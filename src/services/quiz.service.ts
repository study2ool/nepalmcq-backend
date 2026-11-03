import type {
  GenerateQuizRequest,
  GenerateQuizResult,
} from "../types/api.types.js";
import type {
  Question,
  ChapterContext,
  SubjectConfig,
  SyllabusFile,
} from "../types/quiz.types.js";
import { syllabusRepository } from "../repository/syllabus.repository.js";
import { questionRepository } from "../repository/question.repository.js";
import { llmService } from "./llm.service.js";
import { normalizeQuestionText, getNextId } from "../utils/text.util.js";
import { logger } from "../utils/logger.util.js";

export class QuizService {
  /**
   * Generates quiz questions based on request parameters
   */
  public async generateQuiz(
    request: GenerateQuizRequest,
  ): Promise<GenerateQuizResult> {
    const {
      subject,
      classLevel,
      count = 5,
      chapterId,
      topic,
      difficulty,
      persist = false,
    } = request;

    // 1. Resolve Subject Config
    const subjectConfig = syllabusRepository.resolveSubjectConfig(subject);
    if (!subjectConfig) {
      throw new Error(
        `Subject "${subject}" is not recognized or supported. Available subjects include: Physics, Chemistry, Biology, Mathematics, Computer Science, English, Nepali, Accounting, Business Studies, Economics, Business Math, Marketing, Hotel Management.`,
      );
    }

    if (classLevel !== 11 && classLevel !== 12) {
      throw new Error(`Invalid class level: ${classLevel}. Must be 11 or 12.`);
    }

    const requestedCount = Math.min(25, Math.max(1, count));

    // 2. Load Syllabus
    const syllabus = syllabusRepository.loadSyllabus(subjectConfig);

    // 3. Select Chapter Context
    const chapterContext = this.resolveChapterContext(
      syllabus,
      classLevel,
      chapterId || topic,
    );

    if (!chapterContext) {
      throw new Error(
        `No syllabus chapter found for subject "${subjectConfig.name}" (Grade ${classLevel}) with identifier: ${chapterId || topic || "any"}`,
      );
    }

    // 4. Load Existing Questions & Deduplication Context
    const subjectData = questionRepository.loadSubjectQuestions(
      subjectConfig.questionsFile,
      subjectConfig.name,
    );
    const { seenQuestions, allUsedIds } = questionRepository.indexExisting(
      subjectData.questions,
    );

    // Sample recent questions for anti-duplication blacklist
    const recentSampleQuestions = subjectData.questions
      .slice(-12)
      .map((q) => q.question.replace(/\n/g, " ").trim());

    // 5. Generate Questions via LLM
    const generatedQuestions = await this.executeLlmBatchGeneration(
      subjectConfig,
      classLevel,
      requestedCount,
      chapterContext,
      recentSampleQuestions,
      difficulty,
    );

    // 6. Deduplicate and assign sequential IDs
    const finalBatch: Question[] = [];
    for (const q of generatedQuestions) {
      const norm = normalizeQuestionText(q.question);
      if (seenQuestions.has(norm)) {
        logger.warn(
          `Duplicate question skipped: "${q.question.slice(0, 40)}..."`,
        );
        continue;
      }

      seenQuestions.add(norm);
      q.id = getNextId(
        subjectConfig.prefix,
        classLevel,
        subjectData.questions,
        allUsedIds,
      );
      finalBatch.push(q);
      subjectData.questions.push(q);
    }

    // 7. Persist if requested
    if (persist && finalBatch.length > 0) {
      questionRepository.saveSubjectQuestions(
        subjectConfig.questionsFile,
        subjectData,
      );
      questionRepository.appendToMasterCollection(finalBatch);
      logger.info(
        `Persisted ${finalBatch.length} new questions to ${subjectConfig.questionsFile}`,
      );
    }

    return {
      subject: subjectConfig.name,
      classLevel,
      requestedCount,
      generatedCount: finalBatch.length,
      questions: finalBatch,
      persisted: persist,
    };
  }

  /**
   * Resolves or samples a chapter context from the syllabus
   */
  private resolveChapterContext(
    syllabus: SyllabusFile,
    grade: 11 | 12,
    identifier?: string,
  ): ChapterContext | null {
    if (identifier) {
      return syllabusRepository.findChapter(syllabus, grade, identifier);
    }

    const chapters = syllabusRepository.getChapters(syllabus, grade);
    if (chapters.length === 0) return null;

    // Pick a random chapter from available
    const randomIndex = Math.floor(Math.random() * chapters.length);
    return chapters[randomIndex] ?? null;
  }

  /**
   * Executes LLM prompt and parses question batch
   */
  private async executeLlmBatchGeneration(
    subject: SubjectConfig,
    classLevel: 11 | 12,
    count: number,
    context: ChapterContext,
    antiDuplicationList: string[],
    difficultyTarget?: "Easy" | "Medium" | "Hard",
  ): Promise<Question[]> {
    const { chapter, branchName } = context;

    const topicsList = (chapter.topics || [])
      .map((t, idx) => {
        if (typeof t === "string") {
          return `* Subtopic ID: "${chapter.id || chapter.chapterNumber}_${idx + 1}" | Title: "${t}"`;
        }
        return `* Subtopic ID: "${t.id || `${chapter.id || chapter.chapterNumber}_${idx + 1}`}" | Title: "${t.topic || ""}"`;
      })
      .join("\n");

    const languageDirective = subject.isNepaliLang
      ? `CRITICAL LANGUAGE REQUIREMENT:
Since the subject is "${subject.name}", every question, all 4 options, and the explanation MUST be written entirely in authentic Nepali in the Devanagari script (नेपाली भाषा / देवनागरी लिपि). Do NOT use English text for the question or options.`
      : `LANGUAGE: Use clear, formal educational English strictly tailored to the Nepal NEB examination standard.`;

    const difficultyDirective = difficultyTarget
      ? `DIFFICULTY: Every generated question should strictly target the "${difficultyTarget}" difficulty level.`
      : `DIFFICULTY: Distribute difficulties naturally across Easy, Medium, and Hard.`;

    const antiDuplicationBlock =
      antiDuplicationList.length > 0
        ? `CRITICAL ANTI-DUPLICATION BLACKLIST:
Do NOT repeat, rephrase, or make trivial variants of any of these existing questions from our question bank:
${antiDuplicationList.map((q) => `* "${q}"`).join("\n")}`
        : `CRITICAL ANTI-DUPLICATION: Ensure every question is unique and original.`;

    const prompt = `You are a Senior Question Setter and Curriculum Specialist for the Nepal NEB (National Examination Board) Grade ${classLevel} board examinations, adhering strictly to the Curriculum Development Centre (CDC) specification grid.

SUBJECT: ${subject.name} (Grade ${classLevel})
CURRICULUM UNIT / BRANCH: ${branchName}
CHAPTER NAME: ${chapter.chapterName}
CHAPTER ID (topicId): ${chapter.id}

AVAILABLE SYLLABUS TOPICS IN THIS CHAPTER:
${topicsList}

TASK:
Generate exactly ${count} original, rigorous Multiple Choice Questions (MCQs) for NEB Grade ${classLevel} ${subject.name}, covering the chapter "${chapter.chapterName}".

${languageDirective}
${difficultyDirective}

NEB SPECIFICATION GRID & QUALITY STANDARDS:
1. CURRICULUM TAGGING (MANDATORY):
   - "topicId" MUST be exactly "${chapter.id}".
   - "topic" MUST be exactly "${chapter.chapterName}".
   - "subtopicId" MUST be selected from the valid subtopic IDs listed above.
   - "subtopic" MUST be the exact title corresponding to that "subtopicId".
2. BLOOM'S TAXONOMY BALANCE: Mix knowledge recall, conceptual understanding, and analytical application.
3. OPTIONS: Provide exactly 4 plausible options (keys: "A", "B", "C", "D").
4. EXPLANATION: Provide a precise 2-4 sentence explanation justifying the correct answer using textbook principles.
5. MARKS: 1

${antiDuplicationBlock}

OUTPUT FORMAT:
Return ONLY a valid JSON object matching this exact structure:
{
  "questions": [
    {
      "class": ${classLevel},
      "subject": "${subject.name}",
      "topic": "${chapter.chapterName}",
      "subtopic": "string (subtopic title)",
      "topicId": "${chapter.id}",
      "subtopicId": "string (valid subtopicId from syllabus)",
      "question": "string (clear question text)",
      "options": [
        {"key": "A", "text": "string"},
        {"key": "B", "text": "string"},
        {"key": "C", "text": "string"},
        {"key": "D", "text": "string"}
      ],
      "correct_options": ["A"],
      "is_multi_select": false,
      "explanation": "string (step-by-step reasoning)",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "marks": 1,
      "curriculum_note": "Official Nepal NEB Grade ${classLevel} CDC Curriculum aligned."
    }
  ]
}`;

    const content = await llmService.createChatCompletion(
      [
        {
          role: "system",
          content:
            "You are a strict JSON generator for educational question banks. Always output valid JSON with a 'questions' array.",
        },
        { role: "user", content: prompt },
      ],
      {
        temperature: 0.7,
        max_tokens: Math.min(2500, Math.max(900, count * 350 + 350)),
        response_format: { type: "json_object" },
      },
    );

    const cleanJson = content
      .replace(/^```json\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let parsed: any;
    try {
      parsed = JSON.parse(cleanJson);
    } catch {
      const match = cleanJson.match(/\{[\s\S]*\}/);
      if (match) {
        parsed = JSON.parse(match[0]);
      } else {
        throw new Error("Unable to parse JSON from LLM response");
      }
    }

    const rawQuestions = Array.isArray(parsed)
      ? parsed
      : parsed.questions || [];

    const validSubtopicsMap = new Map<string, string>(
      (chapter.topics || []).map((t, idx) => {
        if (typeof t === "string") {
          return [`${chapter.id || chapter.chapterNumber}_${idx + 1}`, t];
        }
        return [
          t.id || `${chapter.id || chapter.chapterNumber}_${idx + 1}`,
          t.topic || "",
        ];
      }),
    );

    const validated: Question[] = [];
    for (const q of rawQuestions) {
      if (
        !q ||
        !q.question ||
        !Array.isArray(q.options) ||
        q.options.length < 2
      ) {
        continue;
      }

      q.class = classLevel;
      q.subject = subject.name;
      q.topicId = chapter.id || String(chapter.chapterNumber);
      q.topic = chapter.chapterName;

      // Match subtopic
      if (!validSubtopicsMap.has(q.subtopicId)) {
        const fallback = (chapter.topics || [])[0];
        if (fallback) {
          if (typeof fallback === "string") {
            q.subtopicId = `${chapter.id || chapter.chapterNumber}_1`;
            q.subtopic = fallback;
          } else {
            q.subtopicId =
              fallback.id || `${chapter.id || chapter.chapterNumber}_1`;
            q.subtopic = fallback.topic || "";
          }
        }
      } else {
        q.subtopic = validSubtopicsMap.get(q.subtopicId)!;
      }

      q.curriculum_note = `Official Nepal NEB Grade ${classLevel} CDC Curriculum aligned.`;
      q.is_multi_select =
        Array.isArray(q.correct_options) && q.correct_options.length > 1;
      q.marks = 1;
      q.question_type = "MCQ";
      if (!["Easy", "Medium", "Hard"].includes(q.difficulty)) {
        q.difficulty = difficultyTarget || "Medium";
      }

      validated.push(q as Question);
    }

    return validated;
  }

  /**
   * Returns overview of available subjects and question counts
   */
  public getAvailableSubjects() {
    const configs = syllabusRepository.getSubjectConfigs();
    return configs.map((sc) => {
      let syllabusChaptersCount = 0;
      try {
        const syl = syllabusRepository.loadSyllabus(sc);
        syllabusChaptersCount =
          syllabusRepository.getChapters(syl, 11).length +
          syllabusRepository.getChapters(syl, 12).length;
      } catch {
        // ignore if not found
      }

      const questionsData = questionRepository.loadSubjectQuestions(
        sc.questionsFile,
        sc.name,
      );

      return {
        name: sc.name,
        code: sc.prefix,
        category: sc.category,
        isNepaliLang: !!sc.isNepaliLang,
        totalSyllabusChapters: syllabusChaptersCount,
        existingQuestionsCount: questionsData.total_questions,
      };
    });
  }

  /**
   * Returns syllabus tree for a subject
   */
  public getSyllabus(subjectName: string) {
    const sc = syllabusRepository.resolveSubjectConfig(subjectName);
    if (!sc) {
      throw new Error(`Subject "${subjectName}" not found.`);
    }
    return syllabusRepository.loadSyllabus(sc);
  }

  /**
   * Retrieves existing questions with filtering
   */
  public getQuestions(filters: {
    subject?: string | undefined;
    classLevel?: (11 | 12) | undefined;
    topic?: string | undefined;
    difficulty?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    random?: boolean | undefined;
  }) {
    return questionRepository.findQuestions(filters);
  }
}

export const quizService = new QuizService();

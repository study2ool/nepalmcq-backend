import { allQuestions, questionsBySubject } from "../data/questions/index.js";
import type { Question, QuestionCollection } from "../types/quiz.types.js";
import { normalizeQuestionText } from "../utils/text.util.js";

export class QuestionRepository {
  private masterQuestions: Question[] = [];
  private subjectQuestionsMap: Map<string, Question[]> = new Map();

  constructor() {
    this.initData();
  }

  private initData(): void {
    // Clone all master questions into in-memory list
    this.masterQuestions = [...allQuestions];

    // Initialize subject questions map
    for (const [subject, list] of Object.entries(questionsBySubject)) {
      this.subjectQuestionsMap.set(subject.toLowerCase(), [...list]);
    }
  }

  /**
   * Loads questions for a subject from the in-memory list
   */
  public loadSubjectQuestions(
    _questionsFileName: string,
    subjectName: string,
  ): QuestionCollection {
    const list =
      this.subjectQuestionsMap.get(subjectName.toLowerCase()) ||
      this.masterQuestions.filter(
        (q) => q.subject.toLowerCase() === subjectName.toLowerCase(),
      );

    return {
      collection_name: `Nepal Grade 11–12 Practice MCQs - ${subjectName}`,
      subject: subjectName,
      version: "1.0",
      language: subjectName === "Nepali" ? "ne" : "en",
      intended_use: "Practice question bank; aligned with NEB curriculum",
      schema_notes: {
        correct_options:
          "Array of option keys; supports single- and multi-select answers",
        is_multi_select: "True when more than one option is correct",
        class: "11 or 12",
        question_type: "MCQ",
      },
      total_questions: list.length,
      questions: [...list],
    };
  }

  /**
   * Updates in-memory question collection for a subject
   */
  public saveSubjectQuestions(
    _questionsFileName: string,
    collection: QuestionCollection,
  ): void {
    collection.total_questions = collection.questions.length;
    const subject = collection.subject || "Unknown";
    this.subjectQuestionsMap.set(
      subject.toLowerCase(),
      [...collection.questions],
    );

    // Keep master list in sync
    this.appendToMasterCollection(collection.questions);
  }

  /**
   * Appends newly generated questions to the in-memory master collection
   */
  public appendToMasterCollection(newQuestions: Question[]): void {
    if (newQuestions.length === 0) return;

    const existingIds = new Set(this.masterQuestions.map((q) => q.id));
    for (const q of newQuestions) {
      if (!existingIds.has(q.id)) {
        this.masterQuestions.push(q);
        existingIds.add(q.id);

        const subKey = q.subject.toLowerCase();
        const currentSubList = this.subjectQuestionsMap.get(subKey) || [];
        if (!currentSubList.some((sq) => sq.id === q.id)) {
          currentSubList.push(q);
          this.subjectQuestionsMap.set(subKey, currentSubList);
        }
      }
    }
  }

  /**
   * Retrieves questions with filtering and pagination directly from regular in-memory list
   */
  public findQuestions(filters: {
    subject?: string | undefined;
    classLevel?: (11 | 12) | undefined;
    topic?: string | undefined;
    difficulty?: string | undefined;
    year?: string | undefined;
    sourceType?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    random?: boolean | undefined;
  }): { total: number; questions: Question[] } {
    let filtered = this.masterQuestions;

    if (filters.subject) {
      const subLower = filters.subject.toLowerCase();
      filtered = filtered.filter((q) => q.subject.toLowerCase() === subLower);
    }

    if (filters.classLevel) {
      filtered = filtered.filter((q) => q.class === filters.classLevel);
    }

    if (filters.topic) {
      const topLower = filters.topic.toLowerCase();
      filtered = filtered.filter(
        (q) =>
          q.topic.toLowerCase().includes(topLower) ||
          q.topicId.toLowerCase() === topLower,
      );
    }

    if (filters.difficulty) {
      filtered = filtered.filter(
        (q) => q.difficulty.toLowerCase() === filters.difficulty?.toLowerCase(),
      );
    }

    if (filters.year && filters.year !== "All" && filters.year !== "All Years") {
      filtered = filtered.filter((q) => (q as any).year === filters.year);
    }

    if (filters.sourceType && filters.sourceType !== "all") {
      filtered = filtered.filter(
        (q) => (q as any).sourceType === filters.sourceType,
      );
    }

    const total = filtered.length;

    if (filters.random) {
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    }

    const offset = Math.max(0, filters.offset || 0);
    const limit = Math.min(100, Math.max(1, filters.limit || 20));
    const paginated = filtered.slice(offset, offset + limit);

    return { total, questions: paginated };
  }

  /**
   * Builds an index of all existing questions and IDs for deduplication
   */
  public indexExisting(subjectQuestions: Question[]): {
    seenQuestions: Set<string>;
    allUsedIds: Set<string>;
  } {
    const seenQuestions = new Set<string>();
    const allUsedIds = new Set<string>();

    // 1. Index subject questions
    for (const q of subjectQuestions) {
      if (q.id) allUsedIds.add(q.id);
      const norm = normalizeQuestionText(q.question);
      if (norm) seenQuestions.add(norm);
    }

    // 2. Index in-memory master questions
    for (const q of this.masterQuestions) {
      if (q.id) allUsedIds.add(q.id);
      const norm = normalizeQuestionText(q.question);
      if (norm) seenQuestions.add(norm);
    }

    return { seenQuestions, allUsedIds };
  }
}

export const questionRepository = new QuestionRepository();

import * as fs from "fs";
import * as path from "path";
import { config } from "../config/env.config.js";
import type { Question, QuestionCollection } from "../types/quiz.types.js";
import { normalizeQuestionText } from "../utils/text.util.js";
import { logger } from "../utils/logger.util.js";

export class QuestionRepository {
  constructor() {
    this.ensureDirectoryExists(config.questionsDir);
  }

  private ensureDirectoryExists(dir: string): void {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  /**
   * Loads questions from subject-specific file (e.g. questions/physics.json)
   */
  public loadSubjectQuestions(
    questionsFileName: string,
    subjectName: string,
  ): QuestionCollection {
    const filePath = path.join(config.questionsDir, questionsFileName);
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.questions)) {
          return parsed as QuestionCollection;
        }
      } catch (e) {
        logger.warn(
          `Could not parse ${filePath}, fallback to empty collection.`,
          e,
        );
      }
    }

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
      total_questions: 0,
      questions: [],
    };
  }

  /**
   * Saves updated question collection to subject JSON file
   */
  public saveSubjectQuestions(
    questionsFileName: string,
    collection: QuestionCollection,
  ): void {
    const filePath = path.join(config.questionsDir, questionsFileName);
    collection.total_questions = collection.questions.length;
    fs.writeFileSync(
      filePath,
      JSON.stringify(collection, null, 2) + "\n",
      "utf-8",
    );
  }

  /**
   * Appends newly generated questions to the master questions file
   */
  public appendToMasterCollection(newQuestions: Question[]): void {
    if (newQuestions.length === 0) return;

    const masterPath = config.masterDataFile;
    let masterData: QuestionCollection = {
      collection_name: "Nepal Grade 11–12 Science Practice MCQs",
      version: "2.0",
      language: "en/ne",
      intended_use:
        "Comprehensive NEB-aligned science practice question bank for Nepal Grade 11 & 12",
      schema_notes: {
        correct_options:
          "Array of option keys; supports single- and multi-select answers",
        is_multi_select: "True when more than one option is correct",
        class: "11 or 12",
        question_type: "MCQ",
      },
      total_questions: 0,
      questions: [],
    };

    if (fs.existsSync(masterPath)) {
      try {
        const raw = fs.readFileSync(masterPath, "utf-8");
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.questions)) {
          masterData = parsed;
        } else if (Array.isArray(parsed)) {
          masterData.questions = parsed;
        }
      } catch (e) {
        logger.warn(`Could not parse master file ${masterPath}:`, e);
      }
    }

    const existingIds = new Set(masterData.questions.map((q) => q.id));
    for (const q of newQuestions) {
      if (!existingIds.has(q.id)) {
        masterData.questions.push(q);
        existingIds.add(q.id);
      }
    }

    masterData.total_questions = masterData.questions.length;
    fs.writeFileSync(
      masterPath,
      JSON.stringify(masterData, null, 2) + "\n",
      "utf-8",
    );
  }

  /**
   * Retrieves questions with filtering and pagination
   */
  public findQuestions(filters: {
    subject?: string | undefined;
    classLevel?: (11 | 12) | undefined;
    topic?: string | undefined;
    difficulty?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
  }): { total: number; questions: Question[] } {
    const masterPath = config.masterDataFile;
    let allQuestions: Question[] = [];

    if (fs.existsSync(masterPath)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(masterPath, "utf-8"));
        allQuestions = Array.isArray(parsed) ? parsed : parsed.questions || [];
      } catch (err) {
        logger.error(`Error reading master questions:`, err);
      }
    }

    let filtered = allQuestions;

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

    const total = filtered.length;
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

    // 2. Index master questions
    const masterPath = config.masterDataFile;
    if (fs.existsSync(masterPath)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(masterPath, "utf-8"));
        const list: Question[] = Array.isArray(parsed)
          ? parsed
          : parsed.questions || [];
        for (const q of list) {
          if (q.id) allUsedIds.add(q.id);
          const norm = normalizeQuestionText(q.question);
          if (norm) seenQuestions.add(norm);
        }
      } catch (e) {
        logger.warn(`Could not index master questions:`, e);
      }
    }

    return { seenQuestions, allUsedIds };
  }
}

export const questionRepository = new QuestionRepository();

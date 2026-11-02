import * as fs from "fs";
import * as path from "path";
import { config } from "../config/env.config.js";
import { SUBJECT_CONFIGS } from "../config/constants.js";
import type {
  SyllabusFile,
  ChapterContext,
  SubjectConfig,
} from "../types/quiz.types.js";
import { logger } from "../utils/logger.util.js";

export interface SubjectSummary {
  name: string;
  code: string;
  category: "science" | "commerce";
  isNepaliLang: boolean;
  grades: number[];
  totalChapters: number;
  totalTopics: number;
  chaptersByGrade: Record<number, string[]>;
  branchesByGrade: Record<number, string[]>;
}

export class SyllabusRepository {
  private cache: Map<string, SyllabusFile> = new Map();

  /**
   * Resolves a subject query to SubjectConfig
   */
  public resolveSubjectConfig(subjectInput: string): SubjectConfig | null {
    const key = subjectInput.trim().toLowerCase();
    return SUBJECT_CONFIGS[key] || null;
  }

  /**
   * Returns list of unique configured subjects
   */
  public getSubjectConfigs(): SubjectConfig[] {
    const seen = new Set<string>();
    const list: SubjectConfig[] = [];
    for (const sc of Object.values(SUBJECT_CONFIGS)) {
      if (!seen.has(sc.name)) {
        seen.add(sc.name);
        list.push(sc);
      }
    }
    return list;
  }

  /**
   * Loads syllabus file for a subject
   */
  public loadSyllabus(subjectConfig: SubjectConfig): SyllabusFile {
    const cacheKey = `${subjectConfig.category}:${subjectConfig.syllabusFile}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const filePath = path.join(
      config.syllabusDir,
      subjectConfig.category,
      subjectConfig.syllabusFile,
    );

    if (!fs.existsSync(filePath)) {
      logger.error(`Syllabus file not found at: ${filePath}`);
      throw new Error(`Syllabus file not found at: ${filePath}`);
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw) as SyllabusFile;
    this.cache.set(cacheKey, parsed);
    return parsed;
  }

  /**
   * Returns all chapter contexts for a grade level
   */
  public getChapters(syllabus: SyllabusFile, grade: 11 | 12): ChapterContext[] {
    const gradeData = syllabus.grades[String(grade) as "11" | "12"];
    if (!gradeData || !gradeData.branches) {
      return [];
    }

    return gradeData.branches.flatMap((branch) =>
      (branch.chapters || []).map((ch) => ({
        branchId: branch.id,
        branchName: branch.branchName,
        chapter: ch,
      })),
    );
  }

  /**
   * Finds a chapter by ID or name
   */
  public findChapter(
    syllabus: SyllabusFile,
    grade: 11 | 12,
    identifier: string,
  ): ChapterContext | null {
    const chapters = this.getChapters(syllabus, grade);
    const idClean = identifier.trim().toLowerCase();

    const directIdMatch = chapters.find(
      (c) => c.chapter.id.toLowerCase() === idClean,
    );
    if (directIdMatch) return directIdMatch;

    const nameMatch = chapters.find(
      (c) =>
        c.chapter.chapterName.toLowerCase() === idClean ||
        c.chapter.chapterName.toLowerCase().includes(idClean),
    );
    return nameMatch || null;
  }

  /**
   * Returns complete subject summaries across grades 11 and 12
   */
  public getSubjectSummaries(): SubjectSummary[] {
    const configs = this.getSubjectConfigs();
    const summaries: SubjectSummary[] = [];

    for (const sc of configs) {
      try {
        const syl = this.loadSyllabus(sc);
        const ch11 = this.getChapters(syl, 11);
        const ch12 = this.getChapters(syl, 12);

        const ch11Names = ch11.map((c) => c.chapter.chapterName);
        const ch12Names = ch12.map((c) => c.chapter.chapterName);

        const branches11 = Array.from(new Set(ch11.map((c) => c.branchName)));
        const branches12 = Array.from(new Set(ch12.map((c) => c.branchName)));

        const totalTopics11 = ch11.reduce(
          (acc, c) => acc + (c.chapter.topics ? c.chapter.topics.length : 0),
          0,
        );
        const totalTopics12 = ch12.reduce(
          (acc, c) => acc + (c.chapter.topics ? c.chapter.topics.length : 0),
          0,
        );

        summaries.push({
          name: sc.name,
          code: sc.prefix,
          category: sc.category,
          isNepaliLang: !!sc.isNepaliLang,
          grades: [11, 12],
          totalChapters: ch11Names.length + ch12Names.length,
          totalTopics: totalTopics11 + totalTopics12,
          chaptersByGrade: {
            11: ch11Names,
            12: ch12Names,
          },
          branchesByGrade: {
            11: branches11,
            12: branches12,
          },
        });
      } catch (err: any) {
        logger.warn(`Could not summarize syllabus for ${sc.name}:`, err.message);
      }
    }

    return summaries;
  }

  /**
   * Returns structured topics map by Grade Level (11 and 12) for subjects (defaulting to science)
   */
  public getTopicsByGrade(
    category: "science" | "commerce" | "all" = "science",
  ): Record<number, Record<string, string[]>> {
    let summaries = this.getSubjectSummaries();
    if (category !== "all") {
      summaries = summaries.filter((s) => s.category === category);
    }
    const result: Record<number, Record<string, string[]>> = {
      11: {},
      12: {},
    };

    for (const s of summaries) {
      result[11]![s.name] = s.chaptersByGrade[11] || [];
      result[12]![s.name] = s.chaptersByGrade[12] || [];
    }

    return result;
  }

  /**
   * Returns all loaded syllabi mapped by subject name
   */
  public getAllSyllabi(): Record<string, SyllabusFile> {
    const configs = this.getSubjectConfigs();
    const result: Record<string, SyllabusFile> = {};

    for (const sc of configs) {
      try {
        result[sc.name] = this.loadSyllabus(sc);
      } catch (err: any) {
        logger.warn(`Could not load syllabus for ${sc.name}:`, err.message);
      }
    }

    return result;
  }
}

export const syllabusRepository = new SyllabusRepository();

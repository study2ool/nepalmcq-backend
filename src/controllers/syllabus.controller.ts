import type { Request, Response, NextFunction } from "express";
import { syllabusRepository } from "../repository/syllabus.repository.js";
import { sendSuccess, sendError } from "../utils/response.util.js";

export class SyllabusController {
  /**
   * GET /api/v1/subjects
   * Returns list of all subjects with curriculum summaries, branches, and chapter counts
   */
  public getSubjects = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      const { category = "science" } = req.query;
      let summaries = syllabusRepository.getSubjectSummaries();

      if (category && category !== "all" && (category === "science" || category === "commerce")) {
        summaries = summaries.filter((s) => s.category === category);
      }

      sendSuccess(res, summaries, "Subjects curriculum retrieved successfully");
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/syllabus
   * Returns complete syllabus trees for all subjects
   */
  public getAllSyllabi = (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      const syllabi = syllabusRepository.getAllSyllabi();
      sendSuccess(res, syllabi, "All syllabi retrieved successfully");
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/syllabus/:subject
   * Returns complete syllabus tree for a specific subject
   */
  public getSyllabusBySubject = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      const subjectParam = Array.isArray(req.params.subject)
        ? req.params.subject[0]
        : req.params.subject;

      if (!subjectParam) {
        sendError(res, "Subject parameter is required.", 400);
        return;
      }

      const config = syllabusRepository.resolveSubjectConfig(subjectParam);
      if (!config) {
        sendError(res, `Subject "${subjectParam}" was not found.`, 404);
        return;
      }

      const syllabus = syllabusRepository.loadSyllabus(config);
      sendSuccess(
        res,
        syllabus,
        `Syllabus for ${config.name} retrieved successfully`,
      );
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/syllabus/topics
   * Returns topics mapping by grade level { 11: { Subject: [...] }, 12: { ... } }
   */
  public getTopics = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      const { grade, category = "science" } = req.query;
      const allTopics = syllabusRepository.getTopicsByGrade(
        category === "all" ? "all" : "science",
      );

      if (grade) {
        const parsedGrade = Number(grade);
        if (parsedGrade === 11 || parsedGrade === 12) {
          sendSuccess(
            res,
            allTopics[parsedGrade],
            `Topics for Grade ${parsedGrade} retrieved successfully`,
          );
          return;
        }
      }

      sendSuccess(
        res,
        allTopics,
        "Curriculum topics by grade retrieved successfully",
      );
    } catch (error) {
      next(error);
    }
  };
}

export const syllabusController = new SyllabusController();


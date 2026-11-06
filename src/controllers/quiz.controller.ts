import type { Request, Response, NextFunction } from "express";
import { quizService } from "../services/quiz.service.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
import type { GenerateQuizRequest } from "../types/api.types.js";

export class QuizController {
  /**
   * POST /api/v1/quiz/generate
   * Generates quiz questions based on curriculum and parameters
   */
  public generate = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const {
        subject,
        classLevel,
        count = 5,
        chapterId,
        topic,
        difficulty,
        persist = false,
      } = req.body;

      if (!subject) {
        sendError(res, "Field 'subject' is required.", 400);
        return;
      }

      const parsedClass = Number(classLevel);
      if (parsedClass !== 11 && parsedClass !== 12) {
        sendError(
          res,
          "Field 'classLevel' is required and must be either 11 or 12.",
          400,
        );
        return;
      }

      const parsedCount = Number(count);
      if (isNaN(parsedCount) || parsedCount < 1 || parsedCount > 30) {
        sendError(
          res,
          "Field 'count' must be a positive integer between 1 and 30.",
          400,
        );
        return;
      }

      if (
        difficulty &&
        !["Easy", "Medium", "Hard"].includes(String(difficulty))
      ) {
        sendError(
          res,
          "Field 'difficulty' must be one of: 'Easy', 'Medium', 'Hard'.",
          400,
        );
        return;
      }

      const generateRequest: GenerateQuizRequest = {
        subject: String(subject),
        classLevel: parsedClass as 11 | 12,
        count: parsedCount,
        chapterId: chapterId ? String(chapterId) : undefined,
        topic: topic ? String(topic) : undefined,
        difficulty: difficulty as "Easy" | "Medium" | "Hard" | undefined,
        persist: Boolean(persist),
      };

      const result = await quizService.generateQuiz(generateRequest);
      sendSuccess(res, result, "Quiz questions generated successfully", 201);
    } catch (error: any) {
      next(error);
    }
  };

  /**
   * GET /api/v1/quiz/subjects
   * Lists available subjects with curriculum and question bank status
   */
  public getSubjects = (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      const subjects = quizService.getAvailableSubjects();
      sendSuccess(res, subjects, "Available subjects retrieved successfully");
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/quiz/syllabus/:subject
   * Returns syllabus tree for the requested subject
   */
  public getSyllabus = (
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

      const syllabus = quizService.getSyllabus(subjectParam);
      sendSuccess(
        res,
        syllabus,
        `Syllabus for ${subjectParam} retrieved successfully`,
      );
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/quiz/questions
   * Queries existing practice questions with filters and pagination
   */
  public getQuestions = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      const {
        subject,
        classLevel,
        topic,
        difficulty,
        year,
        sourceType,
        limit = "20",
        offset = "0",
        random,
      } = req.query;

      const parsedClass = classLevel ? Number(classLevel) : undefined;
      const parsedLimit = parseInt(String(limit), 10);
      const parsedOffset = parseInt(String(offset), 10);
      const isRandom = random === "true" || random === "1";

      const cleanSubject =
        subject && subject !== "All" && subject !== "All Subjects"
          ? String(subject)
          : undefined;
      const cleanTopic =
        topic && topic !== "All Topics" && topic !== "all"
          ? String(topic)
          : undefined;
      const cleanDifficulty =
        difficulty && difficulty !== "All Levels" && difficulty !== "all"
          ? String(difficulty)
          : undefined;
      const cleanYear =
        year && year !== "All" && year !== "All Years"
          ? String(year)
          : undefined;
      const cleanSourceType =
        sourceType && sourceType !== "all" ? String(sourceType) : undefined;

      const result = quizService.getQuestions({
        subject: cleanSubject,
        classLevel:
          parsedClass === 11 || parsedClass === 12 ? parsedClass : undefined,
        topic: cleanTopic,
        difficulty: cleanDifficulty,
        year: cleanYear,
        sourceType: cleanSourceType,
        limit: isNaN(parsedLimit) ? 20 : parsedLimit,
        offset: isNaN(parsedOffset) ? 0 : parsedOffset,
        random: isRandom,
      });

      sendSuccess(res, result, "Questions retrieved successfully");
    } catch (error) {
      next(error);
    }
  };
}

export const quizController = new QuizController();

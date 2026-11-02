import type { Request, Response } from "express";
import { progressService } from "../services/progress.service.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
import { logger } from "../utils/logger.util.js";

export class ProgressController {
  /**
   * POST /api/v1/attempts
   * Submits an exam attempt, grades/aggregates metrics, updates stats & leaderboard
   */
  public submitAttempt = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id || req.body.userId || "guest_student";
      const payload = req.body;

      if (!payload) {
        sendError(res, "Attempt payload is missing.", 400);
        return;
      }

      const result = await progressService.submitAttempt(userId, payload, req.user);
      sendSuccess(res, result, "Exam attempt submitted and stats synced successfully", 201);
    } catch (err: any) {
      logger.error("Error submitting attempt:", err);
      sendError(res, err.message || "Failed to submit exam attempt", 500);
    }
  };

  /**
   * GET /api/v1/attempts/history
   * Retrieves historical attempts for the authenticated user
   */
  public getUserHistory = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        sendError(res, "Authentication required to view attempt history.", 401);
        return;
      }

      const limit = Number(req.query.limit) || 50;
      const history = await progressService.getUserHistory(userId, limit);
      sendSuccess(res, history, "User exam history retrieved successfully");
    } catch (err: any) {
      logger.error("Error fetching history:", err);
      sendError(res, err.message || "Failed to fetch attempt history", 500);
    }
  };

  /**
   * GET /api/v1/attempts/:id
   * Retrieves single attempt details by ID
   */
  public getAttemptById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = String(req.params.id);
      if (!id) {
        sendError(res, "Attempt ID is required.", 400);
        return;
      }

      const attempt = await progressService.getAttemptById(id);
      if (!attempt) {
        sendError(res, "Attempt not found", 404);
        return;
      }

      sendSuccess(res, attempt, "Attempt retrieved successfully");
    } catch (err: any) {
      logger.error("Error fetching attempt by ID:", err);
      sendError(res, err.message || "Failed to fetch attempt", 500);
    }
  };

  /**
   * GET /api/v1/dashboard/me
   * Retrieves single-read aggregated dashboard diagnostics for current user
   */
  public getDashboardSummary = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        sendError(res, "Authentication required to view dashboard diagnostics.", 401);
        return;
      }

      const summary = await progressService.getDashboardSummary(userId);
      sendSuccess(res, summary, "Dashboard diagnostics retrieved successfully");
    } catch (err: any) {
      logger.error("Error fetching dashboard summary:", err);
      sendError(res, err.message || "Failed to load dashboard diagnostics", 500);
    }
  };

  /**
   * GET /api/v1/leaderboard
   * Retrieves ranked student leaderboards & school standings
   */
  public getLeaderboard = async (req: Request, res: Response): Promise<void> => {
    try {
      const timeframe = (req.query.timeframe as "all-time" | "weekly") || "all-time";
      const grade = (req.query.grade as string) || "All";
      const subject = (req.query.subject as string) || "All";
      const currentUserId = req.user?.id;

      const result = await progressService.getLeaderboard(
        timeframe,
        grade,
        subject,
        currentUserId
      );

      sendSuccess(res, result, "Leaderboard standings retrieved successfully");
    } catch (err: any) {
      logger.error("Error fetching leaderboard:", err);
      sendError(res, err.message || "Failed to fetch leaderboard", 500);
    }
  };
}

export const progressController = new ProgressController();

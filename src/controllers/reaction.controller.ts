import type { Request, Response } from "express";
import { questionReactionRepository } from "../repository/reaction.repository.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
import { logger } from "../utils/logger.util.js";
import type { ReactionType } from "../types/reaction.types.js";

export class ReactionController {
  /**
   * GET /api/v1/questions/reactions/:questionId
   * Retrieves like/dislike counts and current user's reaction
   */
  public getQuestionReaction = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const questionId = String(req.params.questionId);
      if (!questionId) {
        sendError(res, "Question ID is required", 400);
        return;
      }

      const actorId =
        req.user?.id ||
        (req.headers["x-guest-id"] as string) ||
        (req.query.guestId as string) ||
        undefined;

      const stats = await questionReactionRepository.getReactionStats(
        questionId,
        actorId,
      );
      sendSuccess(res, stats, "Question reactions retrieved successfully");
    } catch (err: any) {
      logger.error("[ReactionController] Failed to get reactions:", err);
      sendError(res, err.message || "Failed to retrieve reactions", 500);
    }
  };

  /**
   * POST /api/v1/questions/reactions/:questionId
   * Sets or toggles user reaction ('like' | 'dislike' | 'none')
   */
  public setQuestionReaction = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const questionId = String(req.params.questionId);
      if (!questionId) {
        sendError(res, "Question ID is required", 400);
        return;
      }

      const reaction = req.body?.reaction as ReactionType;
      if (!reaction || !["like", "dislike", "none"].includes(reaction)) {
        sendError(
          res,
          "Invalid reaction type. Must be 'like', 'dislike', or 'none'.",
          400,
        );
        return;
      }

      const actorId =
        req.user?.id ||
        (req.headers["x-guest-id"] as string) ||
        (req.body?.guestId as string) ||
        "anonymous";

      const updated = await questionReactionRepository.setReaction(
        questionId,
        actorId,
        reaction,
      );

      sendSuccess(res, updated, "Reaction recorded successfully");
    } catch (err: any) {
      logger.error("[ReactionController] Failed to record reaction:", err);
      sendError(res, err.message || "Failed to record reaction", 500);
    }
  };

  /**
   * POST /api/v1/questions/reactions/batch
   * Retrieves batch reaction stats for multiple questions
   */
  public getBatchReactions = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const questionIds: string[] = Array.isArray(req.body?.questionIds)
        ? req.body.questionIds
        : [];

      const actorId =
        req.user?.id ||
        (req.headers["x-guest-id"] as string) ||
        (req.query.guestId as string) ||
        undefined;

      const stats = await questionReactionRepository.getBatchReactionStats(
        questionIds,
        actorId,
      );

      sendSuccess(res, stats, "Batch reactions retrieved successfully");
    } catch (err: any) {
      logger.error("[ReactionController] Batch fetch error:", err);
      sendError(res, err.message || "Failed to retrieve batch reactions", 500);
    }
  };
}

export const reactionController = new ReactionController();

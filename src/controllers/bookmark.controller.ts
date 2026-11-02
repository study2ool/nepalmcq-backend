import type { Request, Response } from "express";
import { bookmarkRepository } from "../repository/bookmark.repository.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
import { logger } from "../utils/logger.util.js";

export class BookmarkController {
  /**
   * GET /api/v1/bookmarks
   * Fetches user's bookmarks list
   */
  public getBookmarks = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        sendError(res, "Authentication required to view bookmarks", 401);
        return;
      }

      const bookmarks = await bookmarkRepository.getBookmarks(userId);
      sendSuccess(res, bookmarks, "Bookmarks retrieved successfully");
    } catch (err: any) {
      logger.error("Error fetching bookmarks:", err);
      sendError(res, err.message || "Failed to fetch bookmarks", 500);
    }
  };

  /**
   * POST /api/v1/bookmarks/:questionId
   * Adds question to bookmarks
   */
  public addBookmark = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        sendError(res, "Authentication required to save bookmarks", 401);
        return;
      }

      const questionId = String(req.params.questionId);
      if (!questionId) {
        sendError(res, "Question ID is required", 400);
        return;
      }

      const updated = await bookmarkRepository.addBookmark(userId, questionId);
      sendSuccess(res, updated, "Question bookmarked successfully", 201);
    } catch (err: any) {
      logger.error("Error adding bookmark:", err);
      sendError(res, err.message || "Failed to bookmark question", 500);
    }
  };

  /**
   * DELETE /api/v1/bookmarks/:questionId
   * Removes question from bookmarks
   */
  public removeBookmark = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        sendError(res, "Authentication required to remove bookmarks", 401);
        return;
      }

      const questionId = String(req.params.questionId);
      if (!questionId) {
        sendError(res, "Question ID is required", 400);
        return;
      }

      const updated = await bookmarkRepository.removeBookmark(userId, questionId);
      sendSuccess(res, updated, "Bookmark removed successfully");
    } catch (err: any) {
      logger.error("Error removing bookmark:", err);
      sendError(res, err.message || "Failed to remove bookmark", 500);
    }
  };
}

export const bookmarkController = new BookmarkController();

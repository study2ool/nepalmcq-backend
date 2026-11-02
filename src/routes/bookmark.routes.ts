import { Router } from "express";
import { bookmarkController } from "../controllers/bookmark.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/v1/bookmarks
router.get("/", authenticateToken, bookmarkController.getBookmarks);

// POST /api/v1/bookmarks/:questionId
router.post("/:questionId", authenticateToken, bookmarkController.addBookmark);

// DELETE /api/v1/bookmarks/:questionId
router.delete("/:questionId", authenticateToken, bookmarkController.removeBookmark);

export default router;


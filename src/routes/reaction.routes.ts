import { Router } from "express";
import { reactionController } from "../controllers/reaction.controller.js";
import { optionalAuth } from "../middlewares/auth.middleware.js";

const router = Router();

// POST /api/v1/questions/reactions/batch (Batch fetch stats)
router.post("/batch", optionalAuth, reactionController.getBatchReactions);

// GET /api/v1/questions/reactions/:questionId
router.get("/:questionId", optionalAuth, reactionController.getQuestionReaction);

// POST /api/v1/questions/reactions/:questionId
router.post("/:questionId", optionalAuth, reactionController.setQuestionReaction);

export default router;

import { Router } from "express";
import { progressController } from "../controllers/progress.controller.js";
import { optionalAuth } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/v1/leaderboard
router.get("/", optionalAuth, progressController.getLeaderboard);

export default router;


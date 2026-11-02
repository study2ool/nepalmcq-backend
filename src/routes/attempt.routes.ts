import { Router } from "express";
import { progressController } from "../controllers/progress.controller.js";
import { authenticateToken, optionalAuth } from "../middlewares/auth.middleware.js";

const router = Router();

// POST /api/v1/attempts - Requires student authentication
router.post("/", authenticateToken, progressController.submitAttempt);

// GET /api/v1/attempts/history
router.get("/history", authenticateToken, progressController.getUserHistory);

// GET /api/v1/attempts/:id
router.get("/:id", optionalAuth, progressController.getAttemptById);

export default router;


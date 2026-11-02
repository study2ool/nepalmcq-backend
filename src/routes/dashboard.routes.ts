import { Router } from "express";
import { progressController } from "../controllers/progress.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/v1/dashboard/me
router.get("/me", authenticateToken, progressController.getDashboardSummary);

export default router;


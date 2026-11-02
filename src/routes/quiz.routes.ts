import { Router } from "express";
import { quizController } from "../controllers/quiz.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// POST /api/v1/quiz/generate - Requires student to be logged in
router.post("/generate", authenticateToken, quizController.generate);

// GET /api/v1/quiz/subjects
router.get("/subjects", quizController.getSubjects);

// GET /api/v1/quiz/syllabus/:subject
router.get("/syllabus/:subject", quizController.getSyllabus);

// GET /api/v1/quiz/questions
router.get("/questions", quizController.getQuestions);

export default router;

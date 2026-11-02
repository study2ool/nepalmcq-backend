import { Router } from "express";
import { syllabusController } from "../controllers/syllabus.controller.js";

const router = Router();

// GET /api/v1/syllabus (All syllabi mapped by subject)
router.get("/", syllabusController.getAllSyllabi);

// GET /api/v1/syllabus/topics (Topics / chapters dictionary by grade)
router.get("/topics", syllabusController.getTopics);

// GET /api/v1/syllabus/:subject (Specific subject syllabus tree)
router.get("/:subject", syllabusController.getSyllabusBySubject);

export default router;


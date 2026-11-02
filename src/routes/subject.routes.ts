import { Router } from "express";
import { syllabusController } from "../controllers/syllabus.controller.js";

const router = Router();

// GET /api/v1/subjects
router.get("/", syllabusController.getSubjects);

export default router;


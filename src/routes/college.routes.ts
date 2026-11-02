import { Router } from "express";
import { collegeController } from "../controllers/college.controller.js";

const router = Router();

// GET /api/v1/colleges
router.get("/", collegeController.getColleges);

export default router;


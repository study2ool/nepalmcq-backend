import type { Request, Response } from "express";
import { collegeRepository } from "../repository/college.repository.js";
import { sendSuccess, sendError } from "../utils/response.util.js";

export class CollegeController {
  /**
   * GET /api/v1/colleges
   * Returns list of colleges across Nepal
   */
  public getColleges = async (req: Request, res: Response): Promise<void> => {
    try {
      const q = req.query.search ? String(req.query.search) : undefined;
      const list = await collegeRepository.getAll(q);
      sendSuccess(res, list, "Colleges list retrieved successfully");
    } catch (err: any) {
      sendError(res, err.message || "Failed to load colleges", 500);
    }
  };
}

export const collegeController = new CollegeController();


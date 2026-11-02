import type { Request, Response } from "express";
import { userRepository, ADMIN_EMAIL } from "../repository/user.repository.js";
import { collegeRepository } from "../repository/college.repository.js";
import { progressRepository } from "../repository/progress.repository.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
import { logger } from "../utils/logger.util.js";

export class AdminController {
  /**
   * GET /api/v1/admin/stats
   * Returns complete platform analytics and diagnostic overview
   */
  public getStats = async (_req: Request, res: Response): Promise<void> => {
    try {
      const [users, colleges, attempts, schoolStandings] = await Promise.all([
        userRepository.getAllUsers(),
        collegeRepository.getAll(),
        progressRepository.getAllAttempts(200),
        progressRepository.getSchoolStandings(),
      ]);

      const usersByRole = {
        student: 0,
        teacher: 0,
        admin: 0,
      };

      const genderDistribution: Record<string, number> = {
        male: 0,
        female: 0,
        other: 0,
        prefer_not_to_say: 0,
        unspecified: 0,
      };

      const gradeDistribution: Record<string, number> = {
        "11": 0,
        "12": 0,
        unspecified: 0,
      };

      let onboardedCount = 0;

      users.forEach((u) => {
        if (u.role === "admin" || u.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
          usersByRole.admin += 1;
        } else if (u.role === "teacher") {
          usersByRole.teacher += 1;
        } else {
          usersByRole.student += 1;
        }

        if (u.isOnboarded) onboardedCount += 1;

        if (u.gender) {
          genderDistribution[u.gender] = (genderDistribution[u.gender] ?? 0) + 1;
        } else {
          genderDistribution["unspecified"] = (genderDistribution["unspecified"] ?? 0) + 1;
        }

        if (u.grade) {
          gradeDistribution[String(u.grade)] = (gradeDistribution[String(u.grade)] ?? 0) + 1;
        } else {
          gradeDistribution["unspecified"] = (gradeDistribution["unspecified"] ?? 0) + 1;
        }
      });

      let totalQuestionsAnswered = 0;
      let totalMarks = 0;
      let totalAccSum = 0;

      attempts.forEach((a) => {
        totalQuestionsAnswered += a.metrics?.attemptedQuestions || 0;
        totalMarks += a.metrics?.score || 0;
        totalAccSum += a.metrics?.accuracy || 0;
      });

      const averageAccuracy = attempts.length > 0 ? Math.round(totalAccSum / attempts.length) : 0;
      const averageScore = attempts.length > 0 ? Math.round((totalMarks / attempts.length) * 10) / 10 : 0;

      const userMap = new Map(users.map((u) => [u.id, u.name]));

      // Sort users by createdAt/lastLoginAt descending
      const recentUsers = [...users]
        .sort((a, b) => new Date(b.createdAt || b.lastLoginAt).getTime() - new Date(a.createdAt || a.lastLoginAt).getTime())
        .slice(0, 8);

      const recentAttempts = attempts.slice(0, 10).map((a) => ({
        id: a.id,
        userId: a.userId,
        studentName: userMap.get(a.userId) || "Student",
        subject: a.subject,
        grade: a.grade,
        score: a.metrics?.score || 0,
        totalMarks: a.metrics?.totalPossible || 0,
        accuracy: a.metrics?.accuracy || 0,
        completedAt: a.completedAt,
      }));

      sendSuccess(
        res,
        {
          totalUsers: users.length,
          usersByRole,
          onboardedCount,
          genderDistribution,
          gradeDistribution,
          totalColleges: colleges.length,
          totalAttempts: attempts.length,
          totalQuestionsAnswered,
          averageAccuracy,
          averageScore,
          recentUsers,
          recentAttempts,
          topSchools: schoolStandings.slice(0, 5),
        },
        "Admin platform statistics retrieved successfully",
      );
    } catch (err: any) {
      logger.error(`[AdminController] Error retrieving admin stats: ${err.message}`, err);
      sendError(res, err.message || "Failed to retrieve platform statistics", 500);
    }
  };

  /**
   * GET /api/v1/admin/users
   * Lists all users with search, role, and grade filters
   */
  public getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const q = req.query.search ? String(req.query.search).toLowerCase().trim() : "";
      const roleFilter = req.query.role ? String(req.query.role) : "";
      const gradeFilter = req.query.grade ? Number(req.query.grade) : 0;

      let users = await userRepository.getAllUsers();

      if (q) {
        users = users.filter(
          (u) =>
            u.name.toLowerCase().includes(q) ||
            u.email.toLowerCase().includes(q) ||
            (u.collegeName && u.collegeName.toLowerCase().includes(q)),
        );
      }

      if (roleFilter && roleFilter !== "all") {
        users = users.filter((u) => u.role === roleFilter);
      }

      if (gradeFilter) {
        users = users.filter((u) => u.grade === gradeFilter);
      }

      // Sort newest first
      users.sort(
        (a, b) =>
          new Date(b.createdAt || b.lastLoginAt).getTime() -
          new Date(a.createdAt || a.lastLoginAt).getTime(),
      );

      sendSuccess(res, users, "Users list retrieved successfully");
    } catch (err: any) {
      logger.error(`[AdminController] Error listing users: ${err.message}`, err);
      sendError(res, err.message || "Failed to list users", 500);
    }
  };

  /**
   * GET /api/v1/admin/users/:id
   * Retrieves single user details with their past exam history
   */
  public getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = String(req.params.id);
      const user = await userRepository.findById(userId);
      if (!user) {
        sendError(res, "User not found", 404);
        return;
      }

      const [stats, attempts] = await Promise.all([
        progressRepository.getUserStats(userId),
        progressRepository.getUserAttempts(userId, 20),
      ]);

      sendSuccess(res, { user, stats, attempts }, "User details retrieved successfully");
    } catch (err: any) {
      sendError(res, err.message || "Failed to retrieve user details", 500);
    }
  };

  /**
   * PATCH /api/v1/admin/users/:id
   * Updates user role or profile information
   */
  public updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = String(req.params.id);
      const { role, name, grade, gender, collegeId, collegeName, collegeCity } = req.body;

      const existing = await userRepository.findById(userId);
      if (!existing) {
        sendError(res, "User not found", 404);
        return;
      }

      // Prevent demoting the root administrator
      let finalRole = role;
      if (existing.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
        finalRole = "admin";
      }

      const updates: any = {};
      if (finalRole && ["student", "teacher", "admin"].includes(finalRole)) {
        updates.role = finalRole;
      }
      if (name) updates.name = String(name).trim();
      if (grade === 11 || grade === 12) updates.grade = grade;
      if (gender) updates.gender = gender;
      if (collegeId) updates.collegeId = collegeId;
      if (collegeName) updates.collegeName = collegeName;
      if (collegeCity) updates.collegeCity = collegeCity;

      const updated = await userRepository.updateUser(userId, updates);

      // Sync progress stats
      await progressRepository.updateStudentProfile(userId, {
        name: updated?.name,
        collegeId: updated?.collegeId,
        school: updated?.collegeName,
        city: updated?.collegeCity,
        gender: updated?.gender,
        grade: updated?.grade,
      });

      sendSuccess(res, updated, "User profile updated successfully by administrator");
    } catch (err: any) {
      sendError(res, err.message || "Failed to update user", 500);
    }
  };

  /**
   * DELETE /api/v1/admin/users/:id
   * Deletes a user account and associated credentials
   */
  public deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = String(req.params.id);
      const user = await userRepository.findById(userId);
      if (!user) {
        sendError(res, "User not found", 404);
        return;
      }

      if (user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
        sendError(res, "Cannot delete the primary system administrator account", 400);
        return;
      }

      const deleted = await userRepository.deleteUser(userId);
      if (deleted) {
        sendSuccess(res, { userId }, "User account deleted successfully");
      } else {
        sendError(res, "Could not delete user account", 500);
      }
    } catch (err: any) {
      sendError(res, err.message || "Failed to delete user", 500);
    }
  };

  /**
   * GET /api/v1/admin/schools
   * Lists all schools with associated student counts
   */
  public getSchools = async (req: Request, res: Response): Promise<void> => {
    try {
      const q = req.query.search ? String(req.query.search) : undefined;
      const [colleges, users] = await Promise.all([
        collegeRepository.getAll(q),
        userRepository.getAllUsers(),
      ]);

      // Calculate student enrollment counts per college
      const counts: Record<string, number> = {};
      users.forEach((u) => {
        if (u.collegeId) {
          counts[u.collegeId] = (counts[u.collegeId] || 0) + 1;
        }
      });

      const enriched = colleges.map((c) => ({
        ...c,
        studentCount: counts[c.id] || 0,
      }));

      sendSuccess(res, enriched, "Schools list retrieved successfully");
    } catch (err: any) {
      sendError(res, err.message || "Failed to list schools", 500);
    }
  };

  /**
   * POST /api/v1/admin/schools
   * Creates a new school/college
   */
  public createSchool = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, city, isPopular } = req.body;
      if (!name || !city) {
        sendError(res, "School name and city are required", 400);
        return;
      }

      const created = await collegeRepository.addCollege({
        name: String(name).trim(),
        city: String(city).trim(),
        isPopular: !!isPopular,
      });

      sendSuccess(res, created, "School added successfully", 201);
    } catch (err: any) {
      sendError(res, err.message || "Failed to create school", 500);
    }
  };

  /**
   * PUT /api/v1/admin/schools/:id
   * Updates an existing school/college
   */
  public updateSchool = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = String(req.params.id);
      const { name, city, isPopular } = req.body;

      const updated = await collegeRepository.updateCollege(id, {
        ...(name ? { name: String(name).trim() } : {}),
        ...(city ? { city: String(city).trim() } : {}),
        ...(isPopular !== undefined ? { isPopular: !!isPopular } : {}),
      });

      if (!updated) {
        sendError(res, "School not found", 404);
        return;
      }

      sendSuccess(res, updated, "School updated successfully");
    } catch (err: any) {
      sendError(res, err.message || "Failed to update school", 500);
    }
  };

  /**
   * DELETE /api/v1/admin/schools/:id
   * Deletes a school/college
   */
  public deleteSchool = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = String(req.params.id);
      if (id === "clg_other") {
        sendError(res, "Cannot delete the default 'Other' college category", 400);
        return;
      }

      const deleted = await collegeRepository.deleteCollege(id);
      if (deleted) {
        sendSuccess(res, { id }, "School removed successfully");
      } else {
        sendError(res, "School not found", 404);
      }
    } catch (err: any) {
      sendError(res, err.message || "Failed to delete school", 500);
    }
  };
}

export const adminController = new AdminController();

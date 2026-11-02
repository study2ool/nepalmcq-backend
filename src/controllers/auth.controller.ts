import type { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.service.js";
import { userRepository } from "../repository/user.repository.js";
import { progressRepository } from "../repository/progress.repository.js";
import { config } from "../config/env.config.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
import type { GoogleAuthRequest } from "../types/auth.types.js";
import { logger } from "../utils/logger.util.js";

export class AuthController {
  /**
   * POST /api/v1/auth/google
   * Authenticate via Google ID token (One Tap) or authorization code
   */
  public continueWithGoogle = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { credential, code, accessToken } = req.body;

      if (!credential && !code && !accessToken) {
        sendError(
          res,
          "Please provide a Google 'credential' (ID token) or 'code'.",
          400,
        );
        return;
      }

      const authRequest: GoogleAuthRequest = {
        credential: credential ? String(credential) : undefined,
        code: code ? String(code) : undefined,
        accessToken: accessToken ? String(accessToken) : undefined,
      };

      const result = await authService.continueWithGoogle(authRequest);
      sendSuccess(res, result, "Signed in successfully with Google", 200);
    } catch (error: any) {
      logger.error("Authentication error in continueWithGoogle:", error);
      sendError(
        res,
        error.message || "Failed to authenticate with Google",
        401,
      );
    }
  };

  /**
   * GET /api/v1/auth/google
   * Redirect browser to Google's OAuth consent page
   */
  public googleRedirect = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      const stateParam = req.query.state ? String(req.query.state) : undefined;
      const url = authService.getGoogleAuthUrl(stateParam);
      res.redirect(url);
    } catch (error: any) {
      sendError(res, error.message || "Unable to start Google OAuth flow", 500);
    }
  };

  /**
   * GET /api/v1/auth/google/callback
   * OAuth redirect callback from Google
   */
  public googleCallback = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<void> => {
    try {
      const code = req.query.code;
      if (!code) {
        const errorMsg = req.query.error || "No authorization code returned";
        res.redirect(
          `${config.frontendUrl}/auth/callback?error=${encodeURIComponent(String(errorMsg))}`,
        );
        return;
      }

      const result = await authService.continueWithGoogle({
        code: String(code),
      });

      // Redirect to frontend with JWT token in query param
      res.redirect(
        `${config.frontendUrl}/auth/callback?token=${encodeURIComponent(result.token)}`,
      );
    } catch (error: any) {
      logger.error("Google OAuth callback error:", error);
      res.redirect(
        `${config.frontendUrl}/auth/callback?error=${encodeURIComponent(error.message || "OAuth login failed")}`,
      );
    }
  };

  /**
   * GET /api/v1/auth/me
   * Returns current authenticated user
   */
  public getMe = (req: Request, res: Response): void => {
    if (!req.user) {
      sendError(res, "Not authenticated", 401);
      return;
    }

    sendSuccess(
      res,
      {
        user: req.user,
      },
      "Current user profile retrieved",
    );
  };

  /**
   * PATCH /api/v1/auth/profile
   * Updates student profile (name, college/school, gender, city, grade)
   */
  public updateProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        sendError(res, "Authentication required to update profile", 401);
        return;
      }

      const {
        name,
        collegeId,
        collegeName,
        school,
        city,
        gender,
        grade,
        avatarBg,
      } = req.body;
      const parsedGrade =
        Number(grade) === 11 ? 11 : Number(grade) === 12 ? 12 : undefined;
      const finalSchool = collegeName || school;

      const updatedUser = await userRepository.updateUser(userId, {
        ...(name ? { name: String(name).trim() } : {}),
        ...(collegeId ? { collegeId: String(collegeId).trim() } : {}),
        ...(finalSchool ? { collegeName: String(finalSchool).trim() } : {}),
        ...(city ? { collegeCity: String(city).trim() } : {}),
        ...(gender ? { gender } : {}),
        ...(parsedGrade ? { grade: parsedGrade } : {}),
        isOnboarded: true,
      });

      await progressRepository.updateStudentProfile(userId, {
        name: name ? String(name).trim() : undefined,
        collegeId: collegeId ? String(collegeId).trim() : undefined,
        school: finalSchool ? String(finalSchool).trim() : undefined,
        city: city ? String(city).trim() : undefined,
        gender: gender ? String(gender) : undefined,
        grade: parsedGrade,
        avatarBg: avatarBg ? String(avatarBg).trim() : undefined,
      });

      sendSuccess(
        res,
        {
          user: updatedUser || req.user,
          profile: {
            name: name || req.user?.name,
            collegeId: collegeId || updatedUser?.collegeId,
            school: finalSchool,
            city,
            gender: gender || updatedUser?.gender,
            grade: parsedGrade || 12,
            avatarBg,
            isOnboarded: true,
          },
        },
        "Student college and profile updated successfully",
      );
    } catch (err: any) {
      logger.error("Error updating profile:", err);
      sendError(res, err.message || "Failed to update profile", 500);
    }
  };

  /**
   * POST /api/v1/auth/logout
   * Invalidates and expires the current user token upon logout
   */
  public logout = async (req: Request, res: Response): Promise<void> => {
    try {
      let token: string | undefined;

      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      } else if (req.body && typeof req.body.token === "string") {
        token = req.body.token;
      }

      if (token) {
        await authService.revokeToken(token);
        logger.info("User logged out; token has been expired.");
      }

      sendSuccess(
        res,
        { loggedOut: true },
        "Logged out successfully. Token is now expired.",
      );
    } catch (err: any) {
      logger.warn(`Logout error: ${err.message}`);
      sendSuccess(res, { loggedOut: true }, "Logged out successfully");
    }
  };
}

export const authController = new AuthController();

import type { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.service.js";
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
      sendError(res, error.message || "Failed to authenticate with Google", 401);
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
   * POST /api/v1/auth/logout
   */
  public logout = (_req: Request, res: Response): void => {
    sendSuccess(res, { loggedOut: true }, "Logged out successfully");
  };
}

export const authController = new AuthController();


import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// POST /api/v1/auth/google (Continue with Google API - credential/token/code)
router.post("/google", authController.continueWithGoogle);

// GET /api/v1/auth/google (Google OAuth consent screen redirect)
router.get("/google", authController.googleRedirect);

// GET /api/v1/auth/google/callback (Google OAuth redirect callback)
router.get("/google/callback", authController.googleCallback);

// GET /api/v1/auth/me (Get current user)
router.get("/me", authenticateToken, authController.getMe);

// PATCH /api/v1/auth/profile (Update student profile)
router.patch("/profile", authenticateToken, authController.updateProfile);

// POST /api/v1/auth/logout (Logout)
router.post("/logout", authController.logout);

export default router;

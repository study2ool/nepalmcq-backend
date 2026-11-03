import type { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.service.js";
import { userRepository, ADMIN_EMAIL } from "../repository/user.repository.js";
import { sendError } from "../utils/response.util.js";
import type { User } from "../types/auth.types.js";

// Extend Express Request interface to include authenticated user
declare global {
  namespace Express {
    interface Request {
      user?: User | undefined;
    }
  }
}

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    sendError(res, "Authentication required. Bearer token missing.", 401);
    return;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    sendError(res, "Bearer token is empty.", 401);
    return;
  }

  try {
    const payload = await authService.resolveTokenPayload(token);

    // Tokens only expire when the user logs out. Check token, NEVER userId!
    const isRevoked = await authService.isTokenRevoked(
      token,
      payload.tokenId,
    );
    if (isRevoked) {
      sendError(
        res,
        "Token has expired due to logout. Please sign in again.",
        401,
      );
      return;
    }

    const user = await userRepository.findById(payload.userId);

    if (!user) {
      sendError(res, "User associated with token no longer exists.", 401);
      return;
    }

    req.user = user;
    if (user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      req.user.role = "admin";
    }
    next();
  } catch {
    sendError(res, "Invalid or expired authorization token.", 401);
  }
}

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (!req.user) {
    sendError(
      res,
      "Authentication required. Please sign in as an administrator.",
      401,
    );
    return;
  }

  const isAdmin =
    req.user.role === "admin" ||
    req.user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  if (!isAdmin) {
    sendError(
      res,
      "Access forbidden: You do not have administrator permissions to perform this action.",
      403,
    );
    return;
  }

  req.user.role = "admin";
  next();
}

export async function optionalAuth(
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    if (token) {
      try {
        const payload = await authService.resolveTokenPayload(token);
        const isRevoked = await authService.isTokenRevoked(
          token,
          payload.tokenId,
        );
        if (!isRevoked) {
          const user = await userRepository.findById(payload.userId);
          if (user) {
            req.user = user;
          }
        }
      } catch {
        // ignore invalid token in optional auth
      }
    }
  }
  next();
}

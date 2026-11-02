import type { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.service.js";
import { userRepository } from "../repository/user.repository.js";
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
    const payload = authService.verifyJwt(token);
    const user = await userRepository.findById(payload.userId);

    if (!user) {
      sendError(res, "User associated with token no longer exists.", 401);
      return;
    }

    req.user = user;
    next();
  } catch {
    sendError(res, "Invalid or expired authorization token.", 401);
  }
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
        const payload = authService.verifyJwt(token);
        const user = await userRepository.findById(payload.userId);
        if (user) {
          req.user = user;
        }
      } catch {
        // ignore invalid token in optional auth
      }
    }
  }
  next();
}

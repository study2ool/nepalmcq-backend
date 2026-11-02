import type { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger.util.js";
import { sendError } from "../utils/response.util.js";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || "Internal server error";

  logger.error(`Error on ${req.method} ${req.originalUrl}:`, err);

  sendError(
    res,
    message,
    statusCode,
    process.env.NODE_ENV === "development" ? { stack: err.stack } : undefined,
  );
}

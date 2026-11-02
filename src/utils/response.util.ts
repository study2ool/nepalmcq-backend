import type { Response } from "express";
import type { ApiResponse } from "../types/api.types.js";

export function sendSuccess<T>(
  res: Response,
  data: T,
  message?: string,
  statusCode: number = 200,
): Response {
  const body: ApiResponse<T> = {
    success: true,
    ...(message ? { message } : {}),
    data,
    timestamp: new Date().toISOString(),
  };
  return res.status(statusCode).json(body);
}

export function sendError(
  res: Response,
  error: string,
  statusCode: number = 500,
  details?: any,
): Response {
  const body: ApiResponse = {
    success: false,
    error,
    ...(details ? { data: details } : {}),
    timestamp: new Date().toISOString(),
  };
  return res.status(statusCode).json(body);
}

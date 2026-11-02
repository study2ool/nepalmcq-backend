import type { Request, Response } from "express";
import { config } from "../config/env.config.js";
import { llmService } from "../services/llm.service.js";
import { isFirestoreReady } from "../config/firebase.config.js";
import { sendSuccess } from "../utils/response.util.js";
import type { HealthResponse } from "../types/api.types.js";

export class HealthController {
  public getHealth = (_req: Request, res: Response): Response => {
    const llmStatus = llmService.getStatus();
    const firestoreConnected = isFirestoreReady();

    const data: HealthResponse = {
      status: llmStatus.activeTokens > 0 ? "ok" : "degraded",
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      environment: config.env,
      version: config.version,
      llm: {
        tokenPoolSize: llmStatus.tokenPoolSize,
        modelsConfigured: llmStatus.modelsConfigured,
      },
      database: {
        firestoreConnected,
        provider: firestoreConnected ? "firestore" : "local_fallback",
      },
    };

    return sendSuccess(res, data, "Service is healthy and operational");
  };
}

export const healthController = new HealthController();

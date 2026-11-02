import type { Question } from "./quiz.types.js";

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string | undefined;
  data?: T | undefined;
  error?: string | undefined;
  timestamp: string;
}

export interface HealthResponse {
  status: "ok" | "degraded" | "down";
  uptimeSeconds: number;
  timestamp: string;
  environment: string;
  version: string;
  llm: {
    tokenPoolSize: number;
    modelsConfigured: number;
  };
  database: {
    firestoreConnected: boolean;
    provider: "firestore" | "local_fallback";
  };
}

export interface GenerateQuizRequest {
  subject: string;
  classLevel: 11 | 12;
  count?: number | undefined;
  chapterId?: string | undefined;
  topic?: string | undefined;
  difficulty?: ("Easy" | "Medium" | "Hard") | undefined;
  persist?: boolean | undefined;
}

export interface GenerateQuizResult {
  subject: string;
  classLevel: 11 | 12;
  requestedCount: number;
  generatedCount: number;
  questions: Question[];
  persisted: boolean;
}

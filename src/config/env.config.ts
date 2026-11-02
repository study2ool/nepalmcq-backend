import * as path from "path";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

const baseDir = process.cwd();

function resolveDirectory(envKey: string, defaultPath: string): string {
  const custom = process.env[envKey];
  if (custom) {
    return path.isAbsolute(custom) ? custom : path.resolve(baseDir, custom);
  }
  const rootCandidate = path.resolve(baseDir, defaultPath);
  if (fs.existsSync(rootCandidate)) return rootCandidate;

  const backendCandidate = path.resolve(baseDir, "backend", defaultPath);
  if (fs.existsSync(backendCandidate)) return backendCandidate;

  return rootCandidate;
}

function resolveFilePath(envKey: string, defaultPath: string): string {
  const custom =
    process.env[envKey] ||
    (envKey === "FIREBASE_SERVICE_ACCOUNT_KEY_PATH"
      ? process.env.GOOGLE_APPLICATION_CREDENTIALS
      : "");
  const target = custom || defaultPath;
  if (!target) return "";
  if (path.isAbsolute(target)) return target;

  const rootCandidate = path.resolve(baseDir, target);
  if (fs.existsSync(rootCandidate)) return rootCandidate;

  const backendCandidate = path.resolve(baseDir, "backend", target);
  if (fs.existsSync(backendCandidate)) return backendCandidate;

  return rootCandidate;
}

export const config = {
  port: parseInt(process.env.PORT || "5001", 10),
  env: process.env.NODE_ENV || "development",
  apiPrefix: process.env.API_PREFIX || "/api/v1",
  version: "1.0.0",

  // URLs
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  googleCallbackUrl:
    process.env.GOOGLE_CALLBACK_URL ||
    "https://study2ool.firebaseapp.com/__/auth/handler",

  // Auth & JWT (Tokens do not expire by time; only upon explicit logout)
  jwtSecret:
    process.env.JWT_SECRET || "study2ool-quiz-jwt-secret-super-secure-key-2026",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

  // Firebase & Firestore Configuration
  firebaseProjectId:
    process.env.FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT || "",
  firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
  firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : "",
  firebaseServiceAccountKeyPath: resolveFilePath(
    "FIREBASE_SERVICE_ACCOUNT_KEY_PATH",
    "service-account.json",
  ),
  firestoreUsersCollection: process.env.FIRESTORE_USERS_COLLECTION || "users",
  firestoreRevokedTokensCollection:
    process.env.FIRESTORE_REVOKED_TOKENS_COLLECTION || "revoked_tokens",

  // Paths (auto-resolves correctly from both root and backend directory)
  questionsDir: resolveDirectory("QUESTIONS_DIR", "questions"),
  syllabusDir: resolveDirectory("SYLLABUS_DIR", "syllabus"),
  masterDataFile: resolveDirectory(
    "MASTER_DATA_FILE",
    "questions/questions.json",
  ),

  // Generator & LLM Defaults
  targetPerSubject: parseInt(process.env.TARGET_PER_SUBJECT || "200", 10),
  batchSize: parseInt(process.env.BATCH_SIZE || "10", 10),
  openRouterApiKeys: process.env.OPENROUTER_API_KEYS || "",
  openRouterModels: process.env.OPENROUTER_MODELS || "",
};

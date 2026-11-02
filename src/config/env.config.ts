import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const baseDir = process.cwd();

export const config = {
  port: parseInt(process.env.PORT || "5001", 10),
  env: process.env.NODE_ENV || "development",
  apiPrefix: process.env.API_PREFIX || "/api/v1",
  version: "1.0.0",

  // URLs
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  googleCallbackUrl:
    process.env.GOOGLE_CALLBACK_URL ||
    "http://localhost:5001/api/v1/auth/google/callback",

  // Auth & JWT
  jwtSecret:
    process.env.JWT_SECRET || "study2ool-quiz-jwt-secret-super-secure-key-2026",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

  // Firebase & Firestore Configuration
  firebaseProjectId:
    process.env.FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT || "",
  firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
  firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : "",
  firebaseServiceAccountKeyPath:
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    "",
  firestoreUsersCollection: process.env.FIRESTORE_USERS_COLLECTION || "users",

  // Paths
  questionsDir: path.resolve(baseDir, process.env.QUESTIONS_DIR || "questions"),
  syllabusDir: path.resolve(baseDir, process.env.SYLLABUS_DIR || "syllabus"),
  masterDataFile: path.resolve(
    baseDir,
    process.env.MASTER_DATA_FILE || "questions/questions.json",
  ),

  // Generator & LLM Defaults
  targetPerSubject: parseInt(process.env.TARGET_PER_SUBJECT || "200", 10),
  batchSize: parseInt(process.env.BATCH_SIZE || "10", 10),
  openRouterApiKeys: process.env.OPENROUTER_API_KEYS || "",
  openRouterModels: process.env.OPENROUTER_MODELS || "",
};

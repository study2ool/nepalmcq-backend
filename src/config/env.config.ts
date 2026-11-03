import * as path from "path";
import * as fs from "fs";
import * as dotenv from "dotenv";

const baseDir = process.cwd();

// Auto-load .env from current directory or backend directory
const envCandidates = [
  path.resolve(baseDir, ".env"),
  path.resolve(baseDir, "backend", ".env"),
];
for (const envPath of envCandidates) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
  }
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

  // Auth & Google OAuth Credentials
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

  // Firebase & Firestore Configuration
  firebaseProjectId:
    process.env.FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT || "",
  firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
  firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : "",
  firestoreUsersCollection: process.env.FIRESTORE_USERS_COLLECTION || "users",
  firestoreRevokedTokensCollection:
    process.env.FIRESTORE_REVOKED_TOKENS_COLLECTION || "revoked_tokens",

  // Generator & LLM Defaults
  targetPerSubject: parseInt(process.env.TARGET_PER_SUBJECT || "200", 10),
  batchSize: parseInt(process.env.BATCH_SIZE || "10", 10),
  openRouterApiKeys: process.env.OPENROUTER_API_KEYS || "",
  openRouterModels: process.env.OPENROUTER_MODELS || "",
};

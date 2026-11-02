import * as fs from "fs";
import * as path from "path";
import {
  initializeApp,
  getApps,
  cert,
  applicationDefault,
} from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getAuth, type Auth } from "firebase-admin/auth";
import { config } from "./env.config.js";
import { logger } from "../utils/logger.util.js";

let firestoreInstance: Firestore | null = null;
let authInstance: Auth | null = null;
let isReady = false;

try {
  if (getApps().length === 0) {
    let credential: any = null;

    // 1. Service account JSON file
    if (
      config.firebaseServiceAccountKeyPath &&
      fs.existsSync(config.firebaseServiceAccountKeyPath)
    ) {
      const fullPath = path.resolve(config.firebaseServiceAccountKeyPath);
      const serviceAccount = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
      credential = cert(serviceAccount);
      logger.info(
        `Firebase Admin initializing with service account file: ${fullPath}`,
      );
    }
    // 2. Inline environment variables
    else if (
      config.firebaseProjectId &&
      config.firebaseClientEmail &&
      config.firebasePrivateKey
    ) {
      credential = cert({
        projectId: config.firebaseProjectId,
        clientEmail: config.firebaseClientEmail,
        privateKey: config.firebasePrivateKey,
      });
      logger.info(
        `Firebase Admin initializing with project credentials for "${config.firebaseProjectId}"`,
      );
    }
    // 3. Application default credentials (e.g. Cloud Run / GCP / gcloud auth)
    else if (
      config.firebaseProjectId ||
      process.env.GOOGLE_APPLICATION_CREDENTIALS
    ) {
      credential = applicationDefault();
      logger.info(
        `Firebase Admin initializing with Application Default Credentials (ADC)`,
      );
    }

    if (credential) {
      const appOptions: any = { credential };
      if (config.firebaseProjectId) {
        appOptions.projectId = config.firebaseProjectId;
      }

      initializeApp(appOptions);
      firestoreInstance = getFirestore();
      authInstance = getAuth();
      isReady = true;
      logger.info(
        `🔥 Firebase Admin & Cloud Firestore connected successfully!`,
      );
    } else {
      logger.warn(
        `⚠️ Firebase credentials not configured. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY (or FIREBASE_SERVICE_ACCOUNT_KEY_PATH) in .env to connect to live Cloud Firestore. Falling back to local data store.`,
      );
    }
  } else {
    firestoreInstance = getFirestore();
    authInstance = getAuth();
    isReady = true;
  }
} catch (err: any) {
  logger.error(`Failed to initialize Firebase Admin: ${err.message}`, err);
  firestoreInstance = null;
  authInstance = null;
  isReady = false;
}

export const db = firestoreInstance;
export const firebaseAuth = authInstance;
export const isFirestoreReady = (): boolean =>
  isReady && firestoreInstance !== null;

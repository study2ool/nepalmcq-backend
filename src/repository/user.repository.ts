import crypto from "crypto";
import type { QueryDocumentSnapshot } from "firebase-admin/firestore";
import { config } from "../config/env.config.js";
import { db, isFirestoreReady } from "../config/firebase.config.js";
import type { User, GoogleProfile } from "../types/auth.types.js";
import { logger } from "../utils/logger.util.js";

export class UserRepository {
  private users: Map<string, User> = new Map();
  private emailIndex: Map<string, string> = new Map(); // email -> userId
  private googleIdIndex: Map<string, string> = new Map(); // googleId -> userId
  private collectionName: string;

  constructor() {
    this.collectionName = config.firestoreUsersCollection || "users";
    this.init();
  }

  private async init(): Promise<void> {
    if (isFirestoreReady() && db) {
      try {
        const snapshot = await db.collection(this.collectionName).get();
        if (!snapshot.empty) {
          snapshot.forEach((doc: QueryDocumentSnapshot) => {
            const data = doc.data() as User;
            if (data && data.id && data.email) {
              this.indexUserInMemory(data);
            }
          });
          logger.info(
            `Synchronized ${snapshot.size} user(s) from Firestore collection '${this.collectionName}'.`,
          );
        }
      } catch (err: any) {
        logger.warn(
          `Could not pre-fetch users from Firestore collection '${this.collectionName}': ${err.message}`,
        );
      }
    }
  }

  private indexUserInMemory(u: User): void {
    this.users.set(u.id, u);
    this.emailIndex.set(u.email.toLowerCase(), u.id);
    this.googleIdIndex.set(u.googleId, u.id);
  }

  public async findById(id: string): Promise<User | null> {
    // 1. Check in-memory cache
    const inMemory = this.users.get(id);
    if (inMemory) return inMemory;

    // 2. Query Firestore collection
    if (isFirestoreReady() && db) {
      try {
        const doc = await db.collection(this.collectionName).doc(id).get();
        if (doc.exists) {
          const user = doc.data() as User;
          this.indexUserInMemory(user);
          return user;
        }
      } catch (err: any) {
        logger.error(`Firestore findById error for '${id}':`, err);
      }
    }

    return null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const cleanEmail = email.toLowerCase();

    // 1. Check in-memory cache
    const id = this.emailIndex.get(cleanEmail);
    if (id) {
      const user = this.users.get(id);
      if (user) return user;
    }

    // 2. Query Firestore collection
    if (isFirestoreReady() && db) {
      try {
        const snap = await db
          .collection(this.collectionName)
          .where("email", "==", cleanEmail)
          .limit(1)
          .get();
        if (!snap.empty && snap.docs[0]) {
          const user = snap.docs[0].data() as User;
          this.indexUserInMemory(user);
          return user;
        }
      } catch (err: any) {
        logger.error(`Firestore findByEmail error for '${cleanEmail}':`, err);
      }
    }

    return null;
  }

  public async findByGoogleId(googleId: string): Promise<User | null> {
    // 1. Check in-memory cache
    const id = this.googleIdIndex.get(googleId);
    if (id) {
      const user = this.users.get(id);
      if (user) return user;
    }

    // 2. Query Firestore collection
    if (isFirestoreReady() && db) {
      try {
        const snap = await db
          .collection(this.collectionName)
          .where("googleId", "==", googleId)
          .limit(1)
          .get();
        if (!snap.empty && snap.docs[0]) {
          const user = snap.docs[0].data() as User;
          this.indexUserInMemory(user);
          return user;
        }
      } catch (err: any) {
        logger.error(`Firestore findByGoogleId error for '${googleId}':`, err);
      }
    }

    return null;
  }

  /**
   * Saves or updates a user directly in the Firestore collection
   */
  public async createOrUpdateGoogleUser(profile: GoogleProfile): Promise<User> {
    const now = new Date().toISOString();
    let existing =
      (await this.findByGoogleId(profile.sub)) ||
      (await this.findByEmail(profile.email));

    if (existing) {
      existing.name = profile.name || existing.name;
      existing.picture = profile.picture || existing.picture;
      existing.googleId = profile.sub;
      existing.lastLoginAt = now;

      this.indexUserInMemory(existing);

      // Persist in Firestore
      if (isFirestoreReady() && db) {
        try {
          await db
            .collection(this.collectionName)
            .doc(existing.id)
            .set(existing, { merge: true });
          logger.info(
            `Updated user in Firestore collection '${this.collectionName}': ${existing.email} (${existing.id})`,
          );
        } catch (err: any) {
          logger.error(`Error updating user in Firestore: ${err.message}`, err);
          throw new Error(`Failed to save user in database: ${err.message}`);
        }
      }

      return existing;
    }

    // Create new user document
    const newUser: User = {
      id: `usr_${crypto.randomUUID()}`,
      email: profile.email.toLowerCase(),
      name: profile.name || "Student",
      picture: profile.picture,
      googleId: profile.sub,
      role: "student",
      createdAt: now,
      lastLoginAt: now,
    };

    this.indexUserInMemory(newUser);

    // Persist new user in Firestore
    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(newUser.id).set(newUser);
        logger.info(
          `Created new user in Firestore collection '${this.collectionName}': ${newUser.email} (${newUser.id})`,
        );
      } catch (err: any) {
        logger.error(`Error creating user in Firestore: ${err.message}`, err);
        throw new Error(`Failed to create user in database: ${err.message}`);
      }
    }

    return newUser;
  }

  public getAll(): User[] {
    return Array.from(this.users.values());
  }
}

export const userRepository = new UserRepository();

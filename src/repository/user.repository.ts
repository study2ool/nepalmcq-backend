import type { QueryDocumentSnapshot } from "firebase-admin/firestore";
import { config } from "../config/env.config.js";
import {
  db,
  firebaseAuth,
  isFirestoreReady,
} from "../config/firebase.config.js";
import type { User, GoogleProfile } from "../types/auth.types.js";
import { logger } from "../utils/logger.util.js";

export const ADMIN_EMAIL = "study2ool.nepal@gmail.com";

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
    if (u.email && u.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      u.role = "admin";
    }
    this.users.set(u.id, u);
    this.emailIndex.set(u.email.toLowerCase(), u.id);
    this.googleIdIndex.set(u.googleId, u.id);
  }

  public async findById(id: string): Promise<User | null> {
    // 1. Check in-memory cache
    const inMemory = this.users.get(id);
    if (inMemory) {
      if (
        inMemory.email.toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
        inMemory.role !== "admin"
      ) {
        inMemory.role = "admin";
      }
      return inMemory;
    }

    // 2. Query Firestore collection
    if (isFirestoreReady() && db) {
      try {
        const doc = await db.collection(this.collectionName).doc(id).get();
        if (doc.exists) {
          const user = doc.data() as User;
          if (
            user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
            user.role !== "admin"
          ) {
            user.role = "admin";
            await db
              .collection(this.collectionName)
              .doc(id)
              .set({ role: "admin" }, { merge: true });
          }
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
      if (user) {
        if (cleanEmail === ADMIN_EMAIL.toLowerCase() && user.role !== "admin") {
          user.role = "admin";
        }
        return user;
      }
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
          if (
            cleanEmail === ADMIN_EMAIL.toLowerCase() &&
            user.role !== "admin"
          ) {
            user.role = "admin";
            await db
              .collection(this.collectionName)
              .doc(user.id)
              .set({ role: "admin" }, { merge: true });
          }
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
   * Synchronizes user between Firebase Auth and Cloud Firestore DB:
   * 1. Checks whether user exists in Firebase Auth.
   *    - If not: creates user in Firebase Auth with Google provider info.
   *    - Ensures custom claim { role: 'student' } is set on Firebase Auth account.
   * 2. Checks whether user exists in Firestore DB by document ID (Firebase Auth UID).
   *    - If not: inserts user into Firestore DB with Firebase Auth UID as the document ID and role: 'student'.
   *    - If exists: updates existing document with lastLoginAt and ensures role: 'student'.
   * 3. Returns the synchronized user (used to generate the non-expiring JWT token).
   */
  public async createOrUpdateGoogleUser(profile: GoogleProfile): Promise<User> {
    const email = profile.email.toLowerCase();
    const now = new Date().toISOString();
    const isAdmin = email === ADMIN_EMAIL.toLowerCase();
    const assignedRole: "student" | "teacher" | "admin" = isAdmin
      ? "admin"
      : "student";

    logger.info(
      `[Auth Workflow] Processing sign-in for: ${email} (Role: ${assignedRole})`,
    );

    // =========================================================================
    // STEP 1: Check whether user exists in Firebase Auth
    // =========================================================================
    let firebaseUid = profile.sub;
    let fbUser: any = null;

    if (firebaseAuth) {
      try {
        // Check by UID first (if profile.sub is already a Firebase Auth UID)
        try {
          fbUser = await firebaseAuth.getUser(profile.sub);
          logger.info(
            `[Auth Workflow] User found in Firebase Auth by UID: ${profile.sub}`,
          );
        } catch {
          // If not found by UID, check by email
          fbUser = await firebaseAuth.getUserByEmail(email);
          logger.info(
            `[Auth Workflow] User found in Firebase Auth by email: ${email} (UID: ${fbUser.uid})`,
          );
        }
      } catch (err: any) {
        if (
          err.code === "auth/user-not-found" ||
          err.message?.includes("no user record")
        ) {
          logger.info(
            `[Auth Workflow] User does NOT exist in Firebase Auth for: ${email}`,
          );
        } else {
          logger.warn(
            `[Auth Workflow] Notice while querying Firebase Auth: ${err.message}`,
          );
        }
      }

      // If user does not exist in Firebase Auth -> create Firebase user with Google provider data
      if (!fbUser) {
        logger.info(
          `[Auth Workflow] Creating new Firebase Auth user for: ${email}`,
        );
        try {
          const createReq: any = {
            email,
            displayName:
              profile.name || (isAdmin ? "Administrator" : "Student"),
            emailVerified: !!profile.email_verified,
          };
          if (profile.sub && profile.sub.length <= 128) {
            createReq.uid = profile.sub;
          }
          if (profile.picture) {
            createReq.photoURL = profile.picture;
          }
          fbUser = await firebaseAuth.createUser(createReq);
          logger.info(
            `[Auth Workflow] Successfully created Firebase Auth user. UID: ${fbUser.uid}`,
          );
        } catch (createErr: any) {
          logger.warn(
            `[Auth Workflow] Firebase Auth createUser notice: ${createErr.message}`,
          );
          // If creation failed because user might have just been created, try fetch once more
          try {
            fbUser = await firebaseAuth.getUserByEmail(email);
          } catch {
            // fallback to profile.sub
          }
        }
      }

      if (fbUser && fbUser.uid) {
        firebaseUid = fbUser.uid;
      }

      // Ensure custom claim { role: assignedRole } is set in Firebase Auth
      try {
        await firebaseAuth.setCustomUserClaims(firebaseUid, {
          role: assignedRole,
        });
        logger.info(
          `[Auth Workflow] Set Firebase Auth custom claims { role: '${assignedRole}' } for UID: ${firebaseUid}`,
        );
      } catch (claimsErr: any) {
        logger.warn(
          `[Auth Workflow] Could not set Firebase Auth custom claims: ${claimsErr.message}`,
        );
      }
    }

    // =========================================================================
    // STEP 2: Check whether user exists in Firestore DB
    // =========================================================================
    let existingFirestoreUser: User | null = null;

    if (isFirestoreReady() && db) {
      try {
        // Check by doc ID (Firebase Auth UID)
        const docSnap = await db
          .collection(this.collectionName)
          .doc(firebaseUid)
          .get();
        if (docSnap.exists) {
          existingFirestoreUser = docSnap.data() as User;
          logger.info(
            `[Auth Workflow] User exists in Firestore DB with doc ID: ${firebaseUid}`,
          );
        } else {
          // Fallback check by email in case of legacy document
          const querySnap = await db
            .collection(this.collectionName)
            .where("email", "==", email)
            .limit(1)
            .get();
          if (!querySnap.empty && querySnap.docs[0]) {
            existingFirestoreUser = querySnap.docs[0].data() as User;
            logger.info(
              `[Auth Workflow] User found in Firestore DB by email query`,
            );
          } else {
            logger.info(`[Auth Workflow] User does NOT exist in Firestore DB.`);
          }
        }
      } catch (dbErr: any) {
        logger.error(
          `[Auth Workflow] Error checking Firestore: ${dbErr.message}`,
          dbErr,
        );
      }
    } else {
      existingFirestoreUser = this.users.get(firebaseUid) || null;
    }

    let finalUser: User;

    // =========================================================================
    // STEP 3: Insert or update in Firestore DB with Firebase Auth UID as doc ID
    // =========================================================================
    if (existingFirestoreUser) {
      // User exists -> Update lastLoginAt, ensure doc ID is Firebase Auth UID, set role appropriately
      existingFirestoreUser.id = firebaseUid;
      existingFirestoreUser.name = profile.name || existingFirestoreUser.name;
      existingFirestoreUser.picture =
        profile.picture || existingFirestoreUser.picture;
      existingFirestoreUser.googleId = profile.sub;
      existingFirestoreUser.lastLoginAt = now;
      existingFirestoreUser.role = isAdmin
        ? "admin"
        : existingFirestoreUser.role || "student";

      this.indexUserInMemory(existingFirestoreUser);

      if (isFirestoreReady() && db) {
        try {
          await db
            .collection(this.collectionName)
            .doc(firebaseUid)
            .set(existingFirestoreUser, { merge: true });
          logger.info(
            `[Auth Workflow] Existing Firestore user updated for doc ID: ${firebaseUid}`,
          );
        } catch (err: any) {
          logger.error(
            `[Auth Workflow] Error updating Firestore: ${err.message}`,
            err,
          );
          throw new Error(`Failed to save user in database: ${err.message}`);
        }
      }

      finalUser = existingFirestoreUser;
    } else {
      // User does NOT exist in Firestore -> Insert into Firestore DB with Firebase Auth userId as doc id
      const newUser: User = {
        id: firebaseUid,
        email,
        name: profile.name || (isAdmin ? "Administrator" : "Student"),
        picture: profile.picture,
        googleId: profile.sub,
        role: assignedRole,
        createdAt: now,
        lastLoginAt: now,
      };

      this.indexUserInMemory(newUser);

      if (isFirestoreReady() && db) {
        try {
          await db
            .collection(this.collectionName)
            .doc(firebaseUid)
            .set(newUser);
          logger.info(
            `[Auth Workflow] Inserted new user into Firestore DB with doc ID: ${firebaseUid}`,
          );
        } catch (err: any) {
          logger.error(
            `[Auth Workflow] Error creating user in Firestore: ${err.message}`,
            err,
          );
          throw new Error(`Failed to create user in database: ${err.message}`);
        }
      }

      finalUser = newUser;
    }

    return finalUser;
  }

  public async deleteUser(userId: string): Promise<boolean> {
    const existing = await this.findById(userId);
    if (!existing) return false;

    this.users.delete(userId);
    this.emailIndex.delete(existing.email.toLowerCase());
    this.googleIdIndex.delete(existing.googleId);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(userId).delete();
        logger.info(
          `[UserRepository] User '${userId}' deleted from Firestore.`,
        );
      } catch (err: any) {
        logger.error(
          `[UserRepository] Error deleting user '${userId}': ${err.message}`,
          err,
        );
        throw err;
      }
    }

    if (firebaseAuth) {
      try {
        await firebaseAuth.deleteUser(userId);
        logger.info(
          `[UserRepository] User '${userId}' deleted from Firebase Auth.`,
        );
      } catch (fbErr: any) {
        logger.warn(
          `[UserRepository] Firebase Auth delete notice for '${userId}': ${fbErr.message}`,
        );
      }
    }

    return true;
  }

  public async getAllUsers(): Promise<User[]> {
    if (isFirestoreReady() && db) {
      try {
        const snap = await db.collection(this.collectionName).get();
        if (!snap.empty) {
          const list: User[] = [];
          snap.forEach((doc: QueryDocumentSnapshot) => {
            const data = doc.data() as User;
            if (data && data.id && data.email) {
              if (data.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
                data.role = "admin";
              }
              this.indexUserInMemory(data);
              list.push(data);
            }
          });
          return list;
        }
      } catch (err: any) {
        logger.warn(
          `[UserRepository] Error fetching all users from Firestore: ${err.message}`,
        );
      }
    }

    return Array.from(this.users.values());
  }

  public async updateUser(
    userId: string,
    updates: Partial<User>,
  ): Promise<User | null> {
    const existing = await this.findById(userId);
    if (!existing) return null;

    const updatedUser: User = {
      ...existing,
      ...updates,
      id: existing.id, // Immutable ID
    };

    this.indexUserInMemory(updatedUser);

    if (isFirestoreReady() && db) {
      try {
        await db
          .collection(this.collectionName)
          .doc(userId)
          .set(updatedUser, { merge: true });
        logger.info(`[UserRepository] User profile updated for '${userId}'`);
      } catch (err: any) {
        logger.error(
          `[UserRepository] Error updating user '${userId}': ${err.message}`,
          err,
        );
        throw err;
      }
    }

    return updatedUser;
  }

  public getAll(): User[] {
    return Array.from(this.users.values());
  }
}

export const userRepository = new UserRepository();

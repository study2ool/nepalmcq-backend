import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { config } from "../config/env.config.js";
import {
  firebaseAuth,
  db,
  isFirestoreReady,
} from "../config/firebase.config.js";
import { userRepository, ADMIN_EMAIL } from "../repository/user.repository.js";
import type {
  User,
  GoogleProfile,
  GoogleAuthRequest,
  AuthTokenPayload,
  AuthResponse,
} from "../types/auth.types.js";
import { logger } from "../utils/logger.util.js";

export class AuthService {
  private oauth2Client: OAuth2Client;
  private revokedTokenIds: Set<string> = new Set();
  private revokedCollectionName: string;

  constructor() {
    this.oauth2Client = new OAuth2Client(
      config.googleClientId,
      config.googleClientSecret,
      config.googleCallbackUrl,
    );
    this.revokedCollectionName =
      config.firestoreRevokedTokensCollection || "revoked_tokens";
    this.initRevokedTokens();
  }

  /**
   * Initializes and pre-loads revoked tokens from Firestore if connected
   */
  private async initRevokedTokens(): Promise<void> {
    if (isFirestoreReady() && db) {
      try {
        const snap = await db.collection(this.revokedCollectionName).get();
        if (!snap.empty) {
          snap.forEach((doc) => {
            this.revokedTokenIds.add(doc.id);
          });
          logger.info(
            `Synchronized ${snap.size} revoked token(s) from Firestore collection '${this.revokedCollectionName}'.`,
          );
        }
      } catch (err: any) {
        logger.warn(
          `Could not pre-fetch revoked tokens from Firestore collection '${this.revokedCollectionName}': ${err.message}`,
        );
      }
    }
  }

  /**
   * Generates Google OAuth consent screen URL
   */
  public getGoogleAuthUrl(state?: string): string {
    if (!config.googleClientId) {
      throw new Error(
        "Google OAuth is not configured: GOOGLE_CLIENT_ID is missing in .env",
      );
    }

    return this.oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["openid", "email", "profile"],
      prompt: "select_account",
      ...(state ? { state } : {}),
    });
  }

  /**
   * Verifies Firebase or Google ID token
   */
  public async verifyToken(idToken: string): Promise<GoogleProfile> {
    // 1. Try Firebase Admin token verification first if Firebase is initialized
    if (firebaseAuth) {
      try {
        const decoded = await firebaseAuth.verifyIdToken(idToken);
        if (decoded && decoded.email) {
          return {
            sub: decoded.uid || decoded.sub,
            email: decoded.email,
            name: decoded.name || decoded.email.split("@")[0] || "Student",
            picture: decoded.picture,
            email_verified: decoded.email_verified,
          };
        }
      } catch (fbErr: any) {
        logger.debug(
          `Firebase token verification fallback to Google: ${fbErr.message}`,
        );
      }
    }

    // 2. Try Google OAuth token verification
    try {
      if (config.googleClientId) {
        const ticket = await this.oauth2Client.verifyIdToken({
          idToken,
          audience: config.googleClientId,
        });
        const payload = ticket.getPayload();
        if (payload && payload.sub && payload.email) {
          return {
            sub: payload.sub,
            email: payload.email,
            name: payload.name || "Student",
            picture: payload.picture,
            email_verified: payload.email_verified,
          };
        }
      }

      // 3. Fallback: Google tokeninfo endpoint
      const response = await fetch(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`,
      );
      if (response.ok) {
        const data: any = await response.json();
        if (data.sub && data.email) {
          return {
            sub: data.sub,
            email: data.email,
            name: data.name || data.email.split("@")[0] || "Student",
            picture: data.picture,
            email_verified:
              data.email_verified === "true" || data.email_verified === true,
          };
        }
      }
    } catch (googleErr: any) {
      logger.error("Token validation error:", googleErr);
    }

    throw new Error(
      "Unable to verify auth credential with Firebase or Google. Token may be invalid or expired.",
    );
  }

  /**
   * Exchanges authorization code for Google profile
   */
  public async exchangeGoogleCode(code: string): Promise<GoogleProfile> {
    try {
      const { tokens } = await this.oauth2Client.getToken(code);
      this.oauth2Client.setCredentials(tokens);

      if (tokens.id_token) {
        return await this.verifyToken(tokens.id_token);
      }

      // Fetch userinfo using access token
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      });

      if (!res.ok) {
        throw new Error(
          `Failed to fetch userinfo from Google: status ${res.status}`,
        );
      }

      const info: any = await res.json();
      return {
        sub: info.sub,
        email: info.email,
        name: info.name,
        picture: info.picture,
        email_verified: info.email_verified,
      };
    } catch (err: any) {
      logger.error("Error exchanging Google authorization code:", err);
      throw new Error(`Google code exchange failed: ${err.message}`);
    }
  }

  /**
   * Generates a Firebase Custom Token using Firebase Admin SDK.
   * Includes custom claims such as { role: 'student' }.
   * Persists as the primary identity token.
   */
  public async createFirebaseCustomToken(user: User): Promise<string> {
    if (firebaseAuth) {
      try {
        const customToken = await firebaseAuth.createCustomToken(user.id, {
          role: user.role || "student",
          email: user.email,
        });
        logger.info(
          `[Auth Service] Successfully created Firebase custom token for user UID: ${user.id}`,
        );
        return customToken;
      } catch (err: any) {
        logger.error(
          `[Auth Service] Firebase createCustomToken error: ${err.message}`,
          err,
        );
      }
    }

    // Fallback if Firebase Admin Auth is unavailable
    return this.generateJwt(user);
  }

  /**
   * Issues a signed JWT for the authenticated user without an expiry date.
   * The token remains valid indefinitely and only expires if the user logs out.
   */
  public generateJwt(user: User): string {
    const tokenId = `tok_${crypto.randomUUID()}`;
    const payload: AuthTokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      tokenId,
      createdAt: new Date().toISOString(),
    };

    // Note: No expiresIn option is passed. The token does not expire by time.
    return jwt.sign(payload, config.jwtSecret);
  }

  /**
   * Resolves an incoming token (Firebase ID token, Firebase Custom token, or internal JWT)
   * into an AuthTokenPayload without premature expiration, ensuring persistent sessions.
   */
  public async resolveTokenPayload(token: string): Promise<AuthTokenPayload> {
    // 1. If Firebase Auth is available, try verifying as a Firebase ID token
    if (firebaseAuth) {
      try {
        const decodedFb = await firebaseAuth.verifyIdToken(token);
        if (decodedFb && (decodedFb.uid || decodedFb.sub)) {
          const email = decodedFb.email || "";
          const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
          return {
            userId: decodedFb.uid || decodedFb.sub,
            email,
            role: isAdmin ? "admin" : (decodedFb.role as any) || "student",
            tokenId: decodedFb.jti || token,
            createdAt: decodedFb.iat
              ? new Date(decodedFb.iat * 1000).toISOString()
              : new Date().toISOString(),
          };
        }
      } catch {
        // Not a standard Firebase ID token, proceed to check custom token or server JWT
      }
    }

    // 2. Try decoding as a Firebase Custom Token or server JWT
    try {
      const decoded = jwt.decode(token) as any;
      if (decoded) {
        // Firebase custom tokens have `uid` top-level and `claims` dictionary
        if (decoded.uid) {
          const email = decoded.claims?.email || decoded.email || "";
          const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
          const role = isAdmin
            ? "admin"
            : decoded.claims?.role || decoded.role || "student";
          return {
            userId: decoded.uid,
            email,
            role,
            tokenId: decoded.jti || decoded.uid || token,
            createdAt: decoded.iat
              ? new Date(decoded.iat * 1000).toISOString()
              : new Date().toISOString(),
          };
        }

        // Standard server JWT with `userId`
        if (decoded.userId) {
          const email = decoded.email || "";
          const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
          return {
            userId: decoded.userId,
            email,
            role: isAdmin ? "admin" : decoded.role || "student",
            tokenId: decoded.tokenId || token,
            createdAt: decoded.createdAt || new Date().toISOString(),
          };
        }

        // General JWT with `sub`
        if (decoded.sub && !decoded.sub.includes("firebase-adminsdk")) {
          const email = decoded.email || "";
          const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
          return {
            userId: decoded.sub,
            email,
            role: isAdmin ? "admin" : decoded.role || "student",
            tokenId: token,
            createdAt: new Date().toISOString(),
          };
        }
      }
    } catch (decodeErr: any) {
      logger.debug(`Token decode notice: ${decodeErr.message}`);
    }

    // 3. Fallback verification with server JWT secret
    try {
      return this.verifyJwt(token);
    } catch {
      throw new Error("Invalid or unrecognizable authorization token");
    }
  }

  /**
   * Verifies an incoming JWT token
   */
  public verifyJwt(token: string): AuthTokenPayload {
    return jwt.verify(token, config.jwtSecret) as AuthTokenPayload;
  }

  /**
   * Revokes a token by its tokenId or raw token upon user logout
   */
  public async revokeToken(rawToken: string): Promise<void> {
    try {
      let identifier = rawToken;
      let userId = "unknown";

      try {
        const decoded = jwt.decode(rawToken) as any;
        if (decoded) {
          if (decoded.tokenId) {
            identifier = decoded.tokenId;
          } else if (decoded.uid) {
            identifier = decoded.uid;
          }
          if (decoded.userId) {
            userId = decoded.userId;
          } else if (decoded.uid) {
            userId = decoded.uid;
          }
        }
      } catch {
        // use rawToken if decoding fails
      }

      this.revokedTokenIds.add(rawToken);
      if (identifier) this.revokedTokenIds.add(identifier);

      if (isFirestoreReady() && db) {
        try {
          const docId = identifier.replace(/[/\\#?]/g, "_").slice(0, 100);
          await db.collection(this.revokedCollectionName).doc(docId).set({
            tokenId: identifier,
            userId,
            revokedAt: new Date().toISOString(),
          });
          logger.info(
            `Token '${docId}' marked expired in Firestore on logout.`,
          );
        } catch (err: any) {
          logger.error(
            `Failed to persist revoked token to Firestore: ${err.message}`,
          );
        }
      }
    } catch (err: any) {
      logger.warn(`Error during token revocation: ${err.message}`);
    }
  }

  /**
   * Checks whether a token or tokenId has been revoked/expired due to logout
   */
  public async isTokenRevoked(identifier: string): Promise<boolean> {
    if (!identifier) return false;

    // 1. Check in-memory revoked set
    if (this.revokedTokenIds.has(identifier)) {
      return true;
    }

    // 2. Fallback check in Firestore collection
    if (isFirestoreReady() && db) {
      try {
        const doc = await db
          .collection(this.revokedCollectionName)
          .doc(identifier)
          .get();
        if (doc.exists) {
          this.revokedTokenIds.add(identifier);
          return true;
        }
      } catch {
        // Return memory evaluation on error
      }
    }

    return false;
  }

  /**
   * Main Google/Firebase authentication handler
   */
  public async continueWithGoogle(
    request: GoogleAuthRequest,
  ): Promise<AuthResponse> {
    let profile: GoogleProfile;

    if (request.credential) {
      // Firebase ID token or Google ID token
      profile = await this.verifyToken(request.credential);
    } else if (request.code) {
      // Authorization code from redirect flow
      profile = await this.exchangeGoogleCode(request.code);
    } else if (request.accessToken) {
      // Access token
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${request.accessToken}`,
        },
      });
      if (!res.ok) {
        throw new Error("Invalid Google access token");
      }
      const info: any = await res.json();
      profile = {
        sub: info.sub,
        email: info.email,
        name: info.name,
        picture: info.picture,
        email_verified: info.email_verified,
      };
    } else {
      throw new Error(
        "Invalid auth request: missing 'credential', 'code', or 'accessToken'",
      );
    }

    const user = await userRepository.createOrUpdateGoogleUser(profile);
    const token = await this.createFirebaseCustomToken(user);

    return { user, token };
  }
}

export const authService = new AuthService();

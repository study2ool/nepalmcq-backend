import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
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
   * Generates a Firebase Auth Custom Token using Firebase Admin SDK.
   * Includes custom claims such as { role: 'student', email: '...', tokenId: 'tok_...' }.
   */
  public async createFirebaseCustomToken(user: User): Promise<string> {
    const tokenId = `tok_${crypto.randomUUID().replace(/-/g, "")}`;
    if (firebaseAuth) {
      try {
        const customToken = await firebaseAuth.createCustomToken(user.id, {
          role: user.role || "student",
          email: user.email,
          tokenId,
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

    // Fallback self-minted RS256 token if Firebase Admin Auth is not connected
    return this.createLocalCustomToken(user, tokenId);
  }

  /**
   * Creates a self-signed RS256 Firebase custom token when running in offline/local mode
   */
  private createLocalCustomToken(user: User, tokenIdParam?: string): string {
    const jti = tokenIdParam || `tok_${crypto.randomUUID().replace(/-/g, "")}`;
    const header = { alg: "RS256", typ: "JWT" };
    const iat = Math.floor(Date.now() / 1000);
    const body = {
      aud: "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit",
      iat,
      jti,
      iss: config.firebaseClientEmail || "local-auth",
      sub: config.firebaseClientEmail || "local-auth",
      uid: user.id,
      claims: {
        email: user.email,
        role: user.role || "student",
        tokenId: jti,
      },
    };

    const encodedHeader = Buffer.from(JSON.stringify(header)).toString(
      "base64url",
    );
    const encodedBody = Buffer.from(JSON.stringify(body)).toString("base64url");
    const dataToSign = `${encodedHeader}.${encodedBody}`;

    if (config.firebasePrivateKey) {
      const signer = crypto.createSign("RSA-SHA256");
      signer.update(dataToSign);
      const signature = signer.sign(config.firebasePrivateKey, "base64url");
      return `${dataToSign}.${signature}`;
    }

    // Fallback HMAC signature if no private key is configured
    const hmac = crypto.createHmac("sha256", "local-dev-fallback-key");
    hmac.update(dataToSign);
    return `${dataToSign}.${hmac.digest("base64url")}`;
  }

  /**
   * Decodes dot-separated JWT segments without third-party dependencies
   */
  private decodeTokenSegments(token: string): {
    header: any;
    payload: any;
    signature: Buffer;
    data: Buffer;
  } {
    const [part0, part1, part2] = token.split(".");
    if (!part0 || !part1 || !part2) {
      throw new Error(
        "Invalid token format: expected 3 dot-separated segments",
      );
    }

    try {
      const header = JSON.parse(
        Buffer.from(part0, "base64url").toString("utf-8"),
      );
      const payload = JSON.parse(
        Buffer.from(part1, "base64url").toString("utf-8"),
      );
      const data = Buffer.from(`${part0}.${part1}`);
      const signature = Buffer.from(part2, "base64url");
      return { header, payload, signature, data };
    } catch (err: any) {
      throw new Error(`Failed to decode token segments: ${err.message}`);
    }
  }

  /**
   * Verifies Firebase Custom Token RS256 signature using the service account private key
   */
  public verifyCustomToken(token: string): any {
    const { payload, signature, data } = this.decodeTokenSegments(token);

    // If private key is available, verify the RS256 signature
    if (config.firebasePrivateKey) {
      try {
        const isValid = crypto.verify(
          "RSA-SHA256",
          data,
          config.firebasePrivateKey,
          signature,
        );
        if (!isValid) {
          throw new Error("Invalid Firebase custom token signature");
        }
      } catch (err: any) {
        throw new Error(`Token signature verification failed: ${err.message}`);
      }
    }

    return payload;
  }

  /**
   * Helper to compute safe, deterministic token hash for tracking individual sessions
   */
  public computeTokenHash(token: string): string {
    return "h_" + crypto.createHash("sha256").update(token).digest("hex").slice(0, 32);
  }

  /**
   * Resolves an incoming token (Firebase ID token or Firebase Custom token)
   * into an AuthTokenPayload without premature expiration, ensuring persistent sessions.
   */
  public async resolveTokenPayload(token: string): Promise<AuthTokenPayload> {
    const tokenHash = this.computeTokenHash(token);

    // 1. If Firebase Auth is available, try verifying as a Firebase ID token
    if (firebaseAuth) {
      try {
        const decodedFb = await firebaseAuth.verifyIdToken(token);
        if (decodedFb && (decodedFb.uid || decodedFb.sub)) {
          const email = decodedFb.email || "";
          const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
          const tokenId =
            decodedFb.jti ||
            (decodedFb as any).tokenId ||
            tokenHash;
          return {
            userId: decodedFb.uid || decodedFb.sub,
            email,
            role: isAdmin ? "admin" : (decodedFb.role as any) || "student",
            tokenId,
            createdAt: decodedFb.iat
              ? new Date(decodedFb.iat * 1000).toISOString()
              : new Date().toISOString(),
          };
        }
      } catch {
        // Not a standard Firebase ID token, proceed to verify as Firebase Custom Token
      }
    }

    // 2. Verify and decode Firebase Custom Token
    const payload = this.verifyCustomToken(token);
    const tokenId =
      payload.jti ||
      payload.claims?.tokenId ||
      payload.claims?.jti ||
      payload.tokenId ||
      tokenHash;

    // Firebase custom tokens have `uid` top-level and optional `claims`
    if (payload.uid) {
      const email = payload.claims?.email || payload.email || "";
      const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
      const role = isAdmin
        ? "admin"
        : payload.claims?.role || payload.role || "student";

      return {
        userId: payload.uid,
        email,
        role,
        tokenId,
        createdAt: payload.iat
          ? new Date(payload.iat * 1000).toISOString()
          : new Date().toISOString(),
      };
    }

    // General token with `sub` or `userId`
    const userId = payload.userId || payload.sub;
    if (userId) {
      const email = payload.email || "";
      const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
      return {
        userId,
        email,
        role: isAdmin ? "admin" : payload.role || "student",
        tokenId,
        createdAt: payload.createdAt || new Date().toISOString(),
      };
    }

    throw new Error("Unrecognizable token structure: missing user identifier");
  }

  /**
   * Revokes a token by its unique token hash or tokenId upon user logout.
   * NOTE: NEVER revokes a user ID!
   */
  public async revokeToken(rawToken: string): Promise<void> {
    if (!rawToken || typeof rawToken !== "string") return;

    try {
      const tokenHash = this.computeTokenHash(rawToken);
      let tokenId = "";
      let userId = "unknown";

      try {
        const { payload } = this.decodeTokenSegments(rawToken);
        if (payload) {
          tokenId =
            payload.jti ||
            payload.claims?.tokenId ||
            payload.claims?.jti ||
            payload.tokenId ||
            "";
          if (payload.userId) userId = payload.userId;
          else if (payload.uid) userId = payload.uid;
        }
      } catch {
        // use raw token hash if decoding fails
      }

      // Add to in-memory set
      this.revokedTokenIds.add(tokenHash);
      if (tokenId && !tokenId.startsWith("usr_") && !tokenId.startsWith("google_")) {
        this.revokedTokenIds.add(tokenId);
      }

      if (isFirestoreReady() && db) {
        try {
          const docId = `rev_${tokenHash}`;
          await db.collection(this.revokedCollectionName).doc(docId).set({
            tokenHash,
            tokenId: tokenId || tokenHash,
            userId,
            revokedAt: new Date().toISOString(),
          });
          logger.info(`Token '${docId}' marked expired in Firestore on logout.`);
        } catch (err: any) {
          logger.error(`Failed to persist revoked token to Firestore: ${err.message}`);
        }
      }
    } catch (err: any) {
      logger.warn(`Error during token revocation: ${err.message}`);
    }
  }

  /**
   * Checks whether a specific token or its unique tokenId has been revoked due to logout
   */
  public async isTokenRevoked(rawToken: string, tokenIdParam?: string): Promise<boolean> {
    if (!rawToken) return false;

    // Never consider user IDs as revoked tokens
    if (rawToken.startsWith("usr_") || rawToken.startsWith("google_")) {
      return false;
    }

    const tokenHash = this.computeTokenHash(rawToken);

    // 1. Check in-memory revoked set for tokenHash or tokenId
    if (this.revokedTokenIds.has(tokenHash)) {
      return true;
    }
    if (
      tokenIdParam &&
      !tokenIdParam.startsWith("usr_") &&
      !tokenIdParam.startsWith("google_") &&
      this.revokedTokenIds.has(tokenIdParam)
    ) {
      return true;
    }

    // 2. Check in Firestore collection
    if (isFirestoreReady() && db) {
      try {
        const docId = `rev_${tokenHash}`;
        const doc = await db.collection(this.revokedCollectionName).doc(docId).get();
        if (doc.exists) {
          this.revokedTokenIds.add(tokenHash);
          return true;
        }

        if (
          tokenIdParam &&
          !tokenIdParam.startsWith("usr_") &&
          !tokenIdParam.startsWith("google_")
        ) {
          const tokenDoc = await db.collection(this.revokedCollectionName).doc(tokenIdParam).get();
          if (tokenDoc.exists) {
            this.revokedTokenIds.add(tokenIdParam);
            return true;
          }
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

    // Clean up any legacy erroneous user.id entries from revoked storage
    this.revokedTokenIds.delete(user.id);
    if (isFirestoreReady() && db) {
      db.collection(this.revokedCollectionName).doc(user.id).delete().catch(() => {});
    }

    return { user, token };
  }
}

export const authService = new AuthService();

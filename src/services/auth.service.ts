import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { config } from "../config/env.config.js";
import { firebaseAuth } from "../config/firebase.config.js";
import { userRepository } from "../repository/user.repository.js";
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

  constructor() {
    this.oauth2Client = new OAuth2Client(
      config.googleClientId,
      config.googleClientSecret,
      config.googleCallbackUrl,
    );
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
        throw new Error(`Failed to fetch userinfo from Google: status ${res.status}`);
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
   * Issues a signed JWT for the authenticated user
   */
  public generateJwt(user: User): string {
    const payload: AuthTokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    return jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn as any,
    });
  }

  /**
   * Verifies an incoming JWT token
   */
  public verifyJwt(token: string): AuthTokenPayload {
    return jwt.verify(token, config.jwtSecret) as AuthTokenPayload;
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
    const token = this.generateJwt(user);

    return { user, token };
  }
}

export const authService = new AuthService();

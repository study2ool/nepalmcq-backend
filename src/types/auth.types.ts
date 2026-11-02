export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string | undefined;
  googleId: string;
  role: "student" | "teacher" | "admin";
  createdAt: string;
  lastLoginAt: string;
}

export interface GoogleProfile {
  sub: string;
  email: string;
  name: string;
  picture?: string | undefined;
  email_verified?: boolean | undefined;
}

export interface GoogleAuthRequest {
  credential?: string | undefined;
  code?: string | undefined;
  accessToken?: string | undefined;
}

export interface AuthTokenPayload {
  userId: string;
  email: string;
  role: "student" | "teacher" | "admin";
}

export interface AuthResponse {
  user: User;
  token: string;
}


export type GenderType = "male" | "female" | "other" | "prefer_not_to_say";

export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string | undefined;
  googleId: string;
  role: "student" | "teacher" | "admin";
  collegeId?: string | undefined;
  collegeName?: string | undefined;
  collegeCity?: string | undefined;
  gender?: GenderType | undefined;
  grade?: 11 | 12 | undefined;
  isOnboarded?: boolean | undefined;
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
  tokenId?: string | undefined;
  createdAt?: string | undefined;
}

export interface AuthResponse {
  user: User;
  token: string;
}


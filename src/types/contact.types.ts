export type ContactInquiryCategory =
  | "question_feedback"
  | "technical_issue"
  | "college_partnership"
  | "curriculum_request"
  | "account_support"
  | "general";

export type ContactInquiryRole =
  | "student_11"
  | "student_12"
  | "teacher"
  | "college_admin"
  | "other";

export type ContactInquiryStatus =
  | "pending"
  | "reviewed"
  | "resolved"
  | "archived";

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  category: ContactInquiryCategory | string;
  role: ContactInquiryRole | string;
  subject: string;
  message: string;
  status: ContactInquiryStatus;
  source: string;
  userId?: string | undefined;
  adminNotes?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContactInquiryDto {
  name: string;
  email: string;
  category?: string | undefined;
  role?: string | undefined;
  subject?: string | undefined;
  message: string;
  source?: string | undefined;
  userId?: string | undefined;
}

export interface UpdateContactInquiryDto {
  status?: ContactInquiryStatus | undefined;
  adminNotes?: string | undefined;
}

export interface ContactInquiryStats {
  total: number;
  pending: number;
  reviewed: number;
  resolved: number;
  archived: number;
  byCategory: Record<string, number>;
}


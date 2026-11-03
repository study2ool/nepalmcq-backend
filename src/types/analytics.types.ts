export interface GenderBreakdown {
  male: number;
  female: number;
  other: number;
}

export interface SchoolAnalyticsItem {
  collegeId: string;
  name: string;
  city: string;
  studentCount: number;
  male: number;
  female: number;
  other: number;
}

export interface PlatformAnalytics {
  id: string; // 'platform_summary'
  totalColleges: number;
  totalStudents: number;
  totalUsers: number;
  onboardedCount: number;
  genderWise: GenderBreakdown;
  schoolWise: Record<string, SchoolAnalyticsItem>;
  updatedAt: string;
}


import { db, isFirestoreReady } from "../config/firebase.config.js";
import { logger } from "../utils/logger.util.js";
import type { User } from "../types/auth.types.js";
import type { CollegeItem } from "../data/colleges.data.js";
import type {
  PlatformAnalytics,
  GenderBreakdown,
  SchoolAnalyticsItem,
} from "../types/analytics.types.js";

const DEFAULT_GENDER_BREAKDOWN: GenderBreakdown = {
  male: 0,
  female: 0,
  other: 0,
};

function normalizeGender(g?: string): "male" | "female" | "other" | null {
  if (!g) return null;
  const lower = g.toLowerCase().trim();
  if (lower === "male") return "male";
  if (lower === "female") return "female";
  return "other";
}

function cloneGenderBreakdown(gb?: Partial<GenderBreakdown>): GenderBreakdown {
  return {
    male: gb?.male || 0,
    female: gb?.female || 0,
    other: gb?.other || 0,
  };
}

export class AnalyticsRepository {
  private collectionName = "analytics";
  private docId = "platform_summary";
  private cachedAnalytics: PlatformAnalytics | null = null;
  private isInitializing = false;

  constructor() {
    this.init();
  }

  private async init(): Promise<void> {
    if (this.isInitializing) return;
    this.isInitializing = true;
    try {
      if (isFirestoreReady() && db) {
        const snap = await db
          .collection(this.collectionName)
          .doc(this.docId)
          .get();
        if (snap.exists) {
          this.cachedAnalytics = snap.data() as PlatformAnalytics;
          logger.info("[AnalyticsRepository] Loaded platform_summary from Firestore.");
        }
      }
    } catch (err: any) {
      logger.warn(`[AnalyticsRepository] Init warning: ${err.message}`);
    } finally {
      this.isInitializing = false;
    }
  }

  private async persist(): Promise<void> {
    if (!this.cachedAnalytics) return;
    this.cachedAnalytics.updatedAt = new Date().toISOString();

    if (isFirestoreReady() && db) {
      try {
        await db
          .collection(this.collectionName)
          .doc(this.docId)
          .set(this.cachedAnalytics);
      } catch (err: any) {
        logger.error(`[AnalyticsRepository] Error saving analytics: ${err.message}`);
      }
    }
  }

  /**
   * Returns aggregated platform summary. Reads from single document or memory.
   */
  public async getSummary(): Promise<PlatformAnalytics> {
    if (this.cachedAnalytics) {
      return this.cachedAnalytics;
    }

    if (isFirestoreReady() && db) {
      try {
        const snap = await db
          .collection(this.collectionName)
          .doc(this.docId)
          .get();
        if (snap.exists) {
          this.cachedAnalytics = snap.data() as PlatformAnalytics;
          return this.cachedAnalytics;
        }
      } catch (err: any) {
        logger.warn(`[AnalyticsRepository] Firestore read failed: ${err.message}`);
      }
    }

    // If document does not exist yet, recalculate from existing data
    return this.recalculateSummary();
  }

  /**
   * Recalculates full platform summary from user and college repositories.
   */
  public async recalculateSummary(): Promise<PlatformAnalytics> {
    // Dynamic import to prevent circular dependency
    const { userRepository } = await import("./user.repository.js");
    const { collegeRepository } = await import("./college.repository.js");

    const [users, colleges] = await Promise.all([
      userRepository.getAllUsers(),
      collegeRepository.getAll(),
    ]);

    const genderWise: GenderBreakdown = cloneGenderBreakdown();
    const schoolWise: Record<string, SchoolAnalyticsItem> = {};

    // Seed schools
    colleges.forEach((c) => {
      schoolWise[c.id] = {
        collegeId: c.id,
        name: c.name,
        city: c.city,
        studentCount: 0,
        male: 0,
        female: 0,
        other: 0,
      };
    });

    let studentCount = 0;
    let onboardedCount = 0;

    users.forEach((u) => {
      const isStudent = u.role !== "admin";
      if (isStudent) studentCount += 1;
      if (u.isOnboarded) onboardedCount += 1;

      const g = normalizeGender(u.gender);
      if (g) {
        genderWise[g] = (genderWise[g] || 0) + 1;
      }

      if (u.collegeId) {
        if (!schoolWise[u.collegeId]) {
          schoolWise[u.collegeId] = {
            collegeId: u.collegeId,
            name: u.collegeName || u.collegeId,
            city: u.collegeCity || "Nepal",
            studentCount: 0,
            male: 0,
            female: 0,
            other: 0,
          };
        }

        schoolWise[u.collegeId]!.studentCount += 1;

        if (g) {
          schoolWise[u.collegeId]![g] =
            (schoolWise[u.collegeId]![g] || 0) + 1;
        }
      }
    });

    const summary: PlatformAnalytics = {
      id: this.docId,
      totalColleges: colleges.length,
      totalStudents: studentCount,
      totalUsers: users.length,
      onboardedCount,
      genderWise,
      schoolWise,
      updatedAt: new Date().toISOString(),
    };

    this.cachedAnalytics = summary;
    await this.persist();
    logger.info("[AnalyticsRepository] Full platform_summary recalculated and saved.");

    return summary;
  }

  /**
   * Incremental update when a new user registers
   */
  public async onUserCreated(user: User): Promise<void> {
    const summary = await this.getSummary();
    summary.totalUsers += 1;
    if (user.role !== "admin") {
      summary.totalStudents += 1;
    }

    const g = normalizeGender(user.gender);
    if (g) {
      summary.genderWise[g] = (summary.genderWise[g] || 0) + 1;
    }

    if (user.isOnboarded) {
      summary.onboardedCount += 1;
    }

    if (user.collegeId) {
      this.ensureSchoolEntry(summary, user.collegeId, user.collegeName, user.collegeCity);
      summary.schoolWise[user.collegeId]!.studentCount += 1;
      if (g) {
        summary.schoolWise[user.collegeId]![g] =
          (summary.schoolWise[user.collegeId]![g] || 0) + 1;
      }
    }

    await this.persist();
  }

  /**
   * Incremental update when a student selects/changes gender, school, role, or onboarding state
   */
  public async onUserProfileUpdated(
    oldUser: User | null,
    updatedUser: User,
  ): Promise<void> {
    const summary = await this.getSummary();

    const oldGender = normalizeGender(oldUser?.gender);
    const newGender = normalizeGender(updatedUser.gender);
    const oldCollegeId = oldUser?.collegeId;
    const newCollegeId = updatedUser.collegeId;
    const oldRole = oldUser?.role || "student";
    const newRole = updatedUser.role || "student";
    const oldOnboarded = Boolean(oldUser?.isOnboarded);
    const newOnboarded = Boolean(updatedUser.isOnboarded);

    let hasChanges = false;

    // 1. Role change between student and admin
    if (oldRole !== newRole) {
      hasChanges = true;
      if (oldRole !== "admin" && newRole === "admin") {
        summary.totalStudents = Math.max(0, summary.totalStudents - 1);
      } else if (oldRole === "admin" && newRole !== "admin") {
        summary.totalStudents += 1;
      }
    }

    // 2. Gender change in platform genderWise
    if (oldGender !== newGender) {
      hasChanges = true;
      if (oldGender && summary.genderWise[oldGender] > 0) {
        summary.genderWise[oldGender] -= 1;
      }
      if (newGender) {
        summary.genderWise[newGender] = (summary.genderWise[newGender] || 0) + 1;
      }
    }

    // 3. Onboarded state change
    if (oldOnboarded !== newOnboarded) {
      hasChanges = true;
      if (!oldOnboarded && newOnboarded) {
        summary.onboardedCount += 1;
      } else if (oldOnboarded && !newOnboarded && summary.onboardedCount > 0) {
        summary.onboardedCount -= 1;
      }
    }

    // 4. School and School-Gender change
    if (oldCollegeId !== newCollegeId) {
      hasChanges = true;
      // Decrement from old school
      if (oldCollegeId && summary.schoolWise[oldCollegeId]) {
        if (summary.schoolWise[oldCollegeId]!.studentCount > 0) {
          summary.schoolWise[oldCollegeId]!.studentCount -= 1;
        }
        if (oldGender && summary.schoolWise[oldCollegeId]![oldGender] > 0) {
          summary.schoolWise[oldCollegeId]![oldGender] -= 1;
        }
      }

      // Increment in new school
      if (newCollegeId) {
        this.ensureSchoolEntry(
          summary,
          newCollegeId,
          updatedUser.collegeName,
          updatedUser.collegeCity,
        );
        summary.schoolWise[newCollegeId]!.studentCount += 1;
        if (newGender) {
          summary.schoolWise[newCollegeId]![newGender] =
            (summary.schoolWise[newCollegeId]![newGender] || 0) + 1;
        }
      }
    } else if (newCollegeId && oldGender !== newGender) {
      // Gender changed within same school
      hasChanges = true;
      this.ensureSchoolEntry(
        summary,
        newCollegeId,
        updatedUser.collegeName,
        updatedUser.collegeCity,
      );
      if (oldGender && summary.schoolWise[newCollegeId]![oldGender] > 0) {
        summary.schoolWise[newCollegeId]![oldGender] -= 1;
      }
      if (newGender) {
        summary.schoolWise[newCollegeId]![newGender] =
          (summary.schoolWise[newCollegeId]![newGender] || 0) + 1;
      }
    }

    if (hasChanges) {
      await this.persist();
      logger.info(
        `[AnalyticsRepository] Platform stats updated for user '${updatedUser.id}'. Onboarded=${summary.onboardedCount}, Students=${summary.totalStudents}`
      );
    }
  }

  /**
   * Incremental update when a user is deleted
   */
  public async onUserDeleted(user: User): Promise<void> {
    const summary = await this.getSummary();
    if (summary.totalUsers > 0) summary.totalUsers -= 1;
    if (user.role !== "admin" && summary.totalStudents > 0) {
      summary.totalStudents -= 1;
    }
    if (user.isOnboarded && summary.onboardedCount > 0) {
      summary.onboardedCount -= 1;
    }

    const g = normalizeGender(user.gender);
    if (g && summary.genderWise[g] && summary.genderWise[g] > 0) {
      summary.genderWise[g] -= 1;
    }

    if (user.collegeId) {
      if (summary.schoolWise[user.collegeId] && summary.schoolWise[user.collegeId]!.studentCount > 0) {
        summary.schoolWise[user.collegeId]!.studentCount -= 1;
      }
      if (g && summary.schoolWise[user.collegeId] && summary.schoolWise[user.collegeId]![g] > 0) {
        summary.schoolWise[user.collegeId]![g] -= 1;
      }
    }

    await this.persist();
  }

  /**
   * Incremental update when a school/college is added
   */
  public async onSchoolCreated(school: CollegeItem): Promise<void> {
    const summary = await this.getSummary();
    summary.totalColleges += 1;
    this.ensureSchoolEntry(summary, school.id, school.name, school.city);
    await this.persist();
  }

  /**
   * Incremental update when a school/college is updated
   */
  public async onSchoolUpdated(school: CollegeItem): Promise<void> {
    const summary = await this.getSummary();
    if (summary.schoolWise[school.id]) {
      summary.schoolWise[school.id]!.name = school.name;
      summary.schoolWise[school.id]!.city = school.city;
      await this.persist();
    }
  }

  /**
   * Incremental update when a school/college is deleted
   */
  public async onSchoolDeleted(schoolId: string): Promise<void> {
    const summary = await this.getSummary();
    if (summary.totalColleges > 0) summary.totalColleges -= 1;
    delete summary.schoolWise[schoolId];
    await this.persist();
  }

  private ensureSchoolEntry(
    summary: PlatformAnalytics,
    collegeId: string,
    name?: string,
    city?: string,
  ): void {
    if (!summary.schoolWise[collegeId]) {
      summary.schoolWise[collegeId] = {
        collegeId,
        name: name || collegeId,
        city: city || "Nepal",
        studentCount: 0,
        male: 0,
        female: 0,
        other: 0,
      };
    }
  }
}

export const analyticsRepository = new AnalyticsRepository();


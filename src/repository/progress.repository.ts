import type { QueryDocumentSnapshot } from "firebase-admin/firestore";
import { db, isFirestoreReady } from "../config/firebase.config.js";
import { config } from "../config/env.config.js";
import type {
  AttemptRecord,
  UserStatsRecord,
  LeaderboardEntry,
  SchoolStanding,
} from "../types/progress.types.js";
import { logger } from "../utils/logger.util.js";

export class ProgressRepository {
  private attemptsCollection: string;
  private userStatsCollection: string;
  private leaderboardCollection: string;

  // In-memory caches for fast lookup and offline resilience
  private attemptsMemory: Map<string, AttemptRecord> = new Map();
  private userStatsMemory: Map<string, UserStatsRecord> = new Map();
  private leaderboardMemory: Map<string, LeaderboardEntry> = new Map();

  constructor() {
    this.attemptsCollection = "attempts";
    this.userStatsCollection = "user_stats";
    this.leaderboardCollection = "leaderboard";
    this.init();
  }

  private async init(): Promise<void> {
    if (isFirestoreReady() && db) {
      try {
        const statsSnap = await db.collection(this.userStatsCollection).limit(50).get();
        if (!statsSnap.empty) {
          statsSnap.forEach((doc: QueryDocumentSnapshot) => {
            const data = doc.data() as UserStatsRecord;
            if (data && data.userId) {
              this.userStatsMemory.set(data.userId, data);
            }
          });
        }

        const lbSnap = await db.collection(this.leaderboardCollection).limit(100).get();
        if (!lbSnap.empty) {
          lbSnap.forEach((doc: QueryDocumentSnapshot) => {
            const data = doc.data() as LeaderboardEntry;
            if (data && (data.userId || data.id)) {
              const id = data.userId || data.id;
              this.leaderboardMemory.set(id, data);
            }
          });
        }

        logger.info("[ProgressRepository] Initialized with Firestore.");
      } catch (err: any) {
        logger.warn(`[ProgressRepository] Init notice: ${err.message}`);
      }
    }
  }

  /**
   * Saves a single completed attempt
   */
  public async saveAttempt(attempt: AttemptRecord): Promise<void> {
    this.attemptsMemory.set(attempt.id, attempt);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.attemptsCollection).doc(attempt.id).set(attempt);
        logger.info(`[ProgressRepository] Attempt '${attempt.id}' persisted to Firestore.`);
      } catch (err: any) {
        logger.error(`[ProgressRepository] Error saving attempt to Firestore: ${err.message}`, err);
        throw err;
      }
    }
  }

  /**
   * Fetches an attempt by ID
   */
  public async getAttemptById(attemptId: string): Promise<AttemptRecord | null> {
    const memory = this.attemptsMemory.get(attemptId);
    if (memory) return memory;

    if (isFirestoreReady() && db) {
      try {
        const doc = await db.collection(this.attemptsCollection).doc(attemptId).get();
        if (doc.exists) {
          const data = doc.data() as AttemptRecord;
          this.attemptsMemory.set(data.id, data);
          return data;
        }
      } catch (err: any) {
        logger.error(`[ProgressRepository] Error fetching attempt '${attemptId}': ${err.message}`);
      }
    }

    return null;
  }

  /**
   * Retrieves past attempts for a specific user, sorted newest first
   */
  public async getUserAttempts(userId: string, limitCount = 50): Promise<AttemptRecord[]> {
    if (isFirestoreReady() && db) {
      try {
        const snap = await db
          .collection(this.attemptsCollection)
          .where("userId", "==", userId)
          .orderBy("completedAt", "desc")
          .limit(limitCount)
          .get();

        if (!snap.empty) {
          const results: AttemptRecord[] = [];
          snap.forEach((doc) => {
            const item = doc.data() as AttemptRecord;
            this.attemptsMemory.set(item.id, item);
            results.push(item);
          });
          return results;
        }
      } catch (err: any) {
        logger.warn(`[ProgressRepository] Error querying attempts for user '${userId}': ${err.message}`);
      }
    }

    // In-memory fallback
    return Array.from(this.attemptsMemory.values())
      .filter((a) => a.userId === userId)
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
      .slice(0, limitCount);
  }

  /**
   * Retrieves all recent attempts across all users for administrator overview
   */
  public async getAllAttempts(limitCount = 100): Promise<AttemptRecord[]> {
    if (isFirestoreReady() && db) {
      try {
        const snap = await db
          .collection(this.attemptsCollection)
          .orderBy("completedAt", "desc")
          .limit(limitCount)
          .get();

        if (!snap.empty) {
          const results: AttemptRecord[] = [];
          snap.forEach((doc) => {
            const item = doc.data() as AttemptRecord;
            this.attemptsMemory.set(item.id, item);
            results.push(item);
          });
          return results;
        }
      } catch (err: any) {
        logger.warn(`[ProgressRepository] Error querying all attempts: ${err.message}`);
      }
    }

    return Array.from(this.attemptsMemory.values())
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
      .slice(0, limitCount);
  }

  /**
   * Fetches user aggregated stats document (single read for dashboard)
   */
  public async getUserStats(userId: string): Promise<UserStatsRecord | null> {
    const memory = this.userStatsMemory.get(userId);
    if (memory) return memory;

    if (isFirestoreReady() && db) {
      try {
        const doc = await db.collection(this.userStatsCollection).doc(userId).get();
        if (doc.exists) {
          const stats = doc.data() as UserStatsRecord;
          this.userStatsMemory.set(userId, stats);
          return stats;
        }
      } catch (err: any) {
        logger.error(`[ProgressRepository] Error fetching user stats for '${userId}': ${err.message}`);
      }
    }

    return null;
  }

  /**
   * Atomically updates user stats and leaderboard standings in Firestore
   */
  public async saveUserStatsAndLeaderboard(
    stats: UserStatsRecord,
    leaderboardEntry: LeaderboardEntry
  ): Promise<void> {
    const userId = stats.userId;
    this.userStatsMemory.set(userId, stats);
    this.leaderboardMemory.set(userId, leaderboardEntry);

    if (isFirestoreReady() && db) {
      try {
        const batch = db.batch();

        const statsRef = db.collection(this.userStatsCollection).doc(userId);
        batch.set(statsRef, stats, { merge: true });

        const lbRef = db.collection(this.leaderboardCollection).doc(userId);
        batch.set(lbRef, leaderboardEntry, { merge: true });

        await batch.commit();
        logger.info(`[ProgressRepository] Successfully synced stats & leaderboard for user '${userId}'.`);
      } catch (err: any) {
        logger.error(`[ProgressRepository] Error saving stats batch to Firestore: ${err.message}`, err);
        throw err;
      }
    }
  }

  /**
   * Queries ranked leaderboard entries with filters
   */
  public async getLeaderboardRankings(
    timeframe: "all-time" | "weekly" = "all-time",
    gradeFilter: string = "All",
    subjectFilter: string = "All",
    limitCount = 50
  ): Promise<LeaderboardEntry[]> {
    if (isFirestoreReady() && db) {
      try {
        const sortField = timeframe === "weekly" ? "weeklyXp" : "totalXp";
        let query: any = db.collection(this.leaderboardCollection);

        if (gradeFilter !== "All") {
          query = query.where("grade", "==", Number(gradeFilter));
        }

        query = query.orderBy(sortField, "desc").limit(limitCount);

        const snap = await query.get();
        if (!snap.empty) {
          const entries: LeaderboardEntry[] = [];
          snap.forEach((doc: any, index: number) => {
            const data = doc.data() as LeaderboardEntry;
            data.rank = index + 1;
            this.leaderboardMemory.set(data.userId, data);
            entries.push(data);
          });
          return entries;
        }
      } catch (err: any) {
        logger.warn(`[ProgressRepository] Error fetching leaderboard from Firestore: ${err.message}`);
      }
    }

    // In-memory fallback
    const sortField = timeframe === "weekly" ? "weeklyXp" : "totalXp";
    let list = Array.from(this.leaderboardMemory.values());

    if (gradeFilter !== "All") {
      list = list.filter((e) => String(e.grade) === String(gradeFilter));
    }

    if (subjectFilter !== "All") {
      list = list.filter((e) => e.topSubject === subjectFilter);
    }

    return list
      .sort((a, b) => (b[sortField] || 0) - (a[sortField] || 0))
      .slice(0, limitCount)
      .map((item, idx) => ({ ...item, rank: idx + 1 }));
  }

  /**
   * Updates student profile across user_stats and leaderboard
   */
  public async updateStudentProfile(
    userId: string,
    updates: {
      name?: string | undefined;
      collegeId?: string | undefined;
      school?: string | undefined;
      city?: string | undefined;
      gender?: string | undefined;
      grade?: 11 | 12 | undefined;
      avatarBg?: string | undefined;
    }
  ): Promise<void> {
    const stats = this.userStatsMemory.get(userId);
    if (stats) {
      if (updates.name) stats.displayName = updates.name;
      if (updates.collegeId) stats.collegeId = updates.collegeId;
      if (updates.school) stats.school = updates.school;
      if (updates.city) stats.city = updates.city;
      if (updates.gender) stats.gender = updates.gender;
      if (updates.grade) stats.grade = updates.grade;
      stats.updatedAt = new Date().toISOString();
      this.userStatsMemory.set(userId, stats);
    }

    const lb = this.leaderboardMemory.get(userId);
    if (lb) {
      if (updates.name) lb.name = updates.name;
      if (updates.collegeId) lb.collegeId = updates.collegeId;
      if (updates.school) lb.school = updates.school;
      if (updates.city) lb.city = updates.city;
      if (updates.gender) lb.gender = updates.gender;
      if (updates.grade) lb.grade = updates.grade;
      if (updates.avatarBg) lb.avatarBg = updates.avatarBg;
      this.leaderboardMemory.set(userId, lb);
    }

    if (isFirestoreReady() && db) {
      try {
        const batch = db.batch();
        if (stats) {
          batch.set(db.collection(this.userStatsCollection).doc(userId), stats, { merge: true });
        }
        if (lb) {
          batch.set(db.collection(this.leaderboardCollection).doc(userId), lb, { merge: true });
        }
        await batch.commit();
        logger.info(`[ProgressRepository] Synced profile update for '${userId}' in Firestore.`);
      } catch (err: any) {
        logger.error(`[ProgressRepository] Error updating student profile in Firestore: ${err.message}`, err);
      }
    }
  }

  /**
   * Computes school standings based on student rankings
   */
  public async getSchoolStandings(): Promise<SchoolStanding[]> {
    const students = Array.from(this.leaderboardMemory.values());
    const schoolMap = new Map<
      string,
      {
        collegeId: string;
        name: string;
        city: string;
        studentCount: number;
        totalXp: number;
        totalAccuracy: number;
        subjects: Record<string, number>;
      }
    >();

    students.forEach((s) => {
      const collegeKey = s.collegeId || s.school || "clg_other";
      const schoolName = s.school || "Independent Scholars";
      const existing = schoolMap.get(collegeKey) || {
        collegeId: s.collegeId || collegeKey,
        name: schoolName,
        city: s.city || "Nepal",
        studentCount: 0,
        totalXp: 0,
        totalAccuracy: 0,
        subjects: {},
      };

      existing.studentCount += 1;
      existing.totalXp += s.totalXp || 0;
      existing.totalAccuracy += s.overallAccuracy || 0;
      existing.subjects[s.topSubject] = (existing.subjects[s.topSubject] || 0) + 1;

      schoolMap.set(collegeKey, existing);
    });

    const list: SchoolStanding[] = Array.from(schoolMap.entries()).map(([_, val], index) => {
      let topSub = "Physics";
      let maxCount = 0;
      Object.entries(val.subjects).forEach(([sub, count]) => {
        if (count > maxCount) {
          maxCount = count;
          topSub = sub;
        }
      });

      return {
        id: `school_${index + 1}`,
        collegeId: val.collegeId,
        name: val.name,
        city: val.city,
        studentCount: val.studentCount,
        totalXp: val.totalXp,
        averageAccuracy:
          val.studentCount > 0 ? Math.round(val.totalAccuracy / val.studentCount) : 0,
        topSubject: topSub,
      };
    });

    return list
      .sort((a, b) => b.totalXp - a.totalXp)
      .map((item, idx) => ({ ...item, nationalRank: idx + 1 }));
  }
}

export const progressRepository = new ProgressRepository();


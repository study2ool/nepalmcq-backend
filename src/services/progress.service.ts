import crypto from "crypto";
import { progressRepository } from "../repository/progress.repository.js";
import { userRepository } from "../repository/user.repository.js";
import type {
  AttemptRecord,
  UserStatsRecord,
  LeaderboardEntry,
  SchoolStanding,
  WeakTopicItem,
  ExamTrendPoint,
} from "../types/progress.types.js";
import type { User } from "../types/auth.types.js";
import { logger } from "../utils/logger.util.js";

export class ProgressService {
  /**
   * Calculates XP earned from an individual exam attempt
   */
  public calculateExamXp(metrics: {
    correctAnswers: number;
    accuracy: number;
  }): number {
    let xp = 100; // Base completion bonus
    xp += metrics.correctAnswers * 25; // 25 XP per correct answer

    if (metrics.accuracy >= 95) {
      xp += 200; // Flawless bonus
    } else if (metrics.accuracy >= 90) {
      xp += 150; // Elite accuracy bonus
    } else if (metrics.accuracy >= 80) {
      xp += 75; // Strong performance bonus
    }

    return xp;
  }

  /**
   * Calculates streak in consecutive calendar days
   */
  public computeStreak(
    currentStreak: number,
    longestStreak: number,
    lastActiveDate: string | undefined,
    todayDateStr: string
  ): { current: number; longest: number } {
    if (!lastActiveDate) {
      return { current: 1, longest: Math.max(1, longestStreak) };
    }

    if (lastActiveDate === todayDateStr) {
      return { current: currentStreak || 1, longest: Math.max(currentStreak || 1, longestStreak) };
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastActiveDate === yesterdayStr) {
      const nextStreak = (currentStreak || 0) + 1;
      return { current: nextStreak, longest: Math.max(nextStreak, longestStreak) };
    }

    // Missed at least one full day -> reset streak to 1
    return { current: 1, longest: longestStreak };
  }

  /**
   * Main submission processor:
   * 1. Stores attempt record
   * 2. Incrementally aggregates user stats
   * 3. Syncs leaderboard entry
   */
  public async submitAttempt(
    userId: string,
    payload: any,
    userProfile?: Partial<User>
  ): Promise<{
    attempt: AttemptRecord;
    stats: UserStatsRecord;
    earnedXp: number;
  }> {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0]!;
    const attemptId = payload.id || `att_${crypto.randomUUID()}`;

    // 1. Compute accuracy and marks
    const totalQuestions = Number(payload.totalQuestions) || payload.questionResults?.length || 0;
    const attemptedQuestions =
      Number(payload.attemptedQuestions) ??
      payload.questionResults?.filter((q: any) => q.status !== "unattempted").length ??
      0;
    const correctAnswers =
      Number(payload.correctAnswers) ??
      payload.questionResults?.filter((q: any) => q.isCorrect).length ??
      0;
    const incorrectAnswers = attemptedQuestions - correctAnswers;
    const unattemptedQuestions = totalQuestions - attemptedQuestions;

    const accuracy =
      attemptedQuestions > 0
        ? Math.round((correctAnswers / attemptedQuestions) * 100 * 10) / 10
        : 0;

    const score = Number(payload.totalMarksObtained) ?? correctAnswers;
    const totalPossible = Number(payload.totalPossibleMarks) ?? totalQuestions;
    const timeSpent = Number(payload.timeTakenSeconds) || 60;
    const avgTime = totalQuestions > 0 ? Math.round(timeSpent / totalQuestions) : 0;

    const earnedXp = this.calculateExamXp({ correctAnswers, accuracy });

    // 2. Build canonical AttemptRecord
    const attemptRecord: AttemptRecord = {
      id: attemptId,
      userId,
      quizId: payload.config?.quizId || payload.id || attemptId,
      subject: payload.config?.subject || payload.subjectBreakdown?.[0]?.subject || "General",
      grade: Number(payload.config?.grade) === 11 ? 11 : 12,
      config: {
        mode: payload.config?.mode || "practice",
        chapterIds: payload.config?.chapterIds || [],
        topicIds: payload.config?.topicIds || [],
        totalQuestions,
        timeLimitMinutes: payload.config?.timeLimitMinutes || 20,
      },
      metrics: {
        score,
        totalPossible,
        accuracy,
        attemptedQuestions,
        unattemptedQuestions,
        correctAnswers,
        incorrectAnswers,
        timeSpentSeconds: timeSpent,
        avgTimePerQuestion: avgTime,
        earnedXp,
      },
      questionResponses: (payload.questionResults || []).map((qr: any) => ({
        questionId: qr.question?.id || qr.questionId || "",
        selectedKey: qr.selectedAnswer || qr.selectedKey,
        correctAnswer: qr.question?.correctAnswer || qr.correctAnswer,
        isCorrect: !!qr.isCorrect,
        status: qr.status || (qr.isCorrect ? "correct" : qr.selectedAnswer ? "incorrect" : "unattempted"),
        timeSpentSeconds: qr.timeSpentSeconds || 0,
        subject: qr.question?.subject || attemptRecord?.subject || "",
        topic: qr.question?.topic || "",
      })),
      subjectBreakdown: payload.subjectBreakdown || [],
      topicBreakdown: payload.topicBreakdown || [],
      completedAt: payload.completedAt ? new Date(payload.completedAt).toISOString() : now.toISOString(),
      createdAt: now.toISOString(),
    };

    // Save individual attempt
    await progressRepository.saveAttempt(attemptRecord);

    // 3. Load or initialize user stats
    const user = userProfile || (await userRepository.findById(userId)) || {};
    const fetchedStats = await progressRepository.getUserStats(userId);

    const existingStats: UserStatsRecord = fetchedStats || {
      userId,
      displayName: user.name || "Student",
      email: user.email || "",
      picture: user.picture || undefined,
      collegeId: user.collegeId || undefined,
      school: user.collegeName || "St. Xavier's College",
      city: user.collegeCity || "Kathmandu",
      gender: user.gender || undefined,
      grade: attemptRecord.grade,
      lifetime: {
        totalExams: 0,
        totalQuestionsAttempted: 0,
        totalCorrect: 0,
        totalTimeSpentSeconds: 0,
        totalXp: 0,
        overallAccuracy: 0,
        bestScore: 0,
        bestAccuracy: 0,
      },
      streak: {
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: "",
      },
      subjectMastery: {},
      weakTopics: [],
      recentTrend: [],
      updatedAt: now.toISOString(),
    };

    // Update streak
    const streakInfo = this.computeStreak(
      existingStats.streak.currentStreak,
      existingStats.streak.longestStreak,
      existingStats.streak.lastActiveDate,
      todayStr
    );

    // Update lifetime counters
    const newTotalExams = existingStats.lifetime.totalExams + 1;
    const newQuestionsAttempted = existingStats.lifetime.totalQuestionsAttempted + attemptedQuestions;
    const newCorrect = existingStats.lifetime.totalCorrect + correctAnswers;
    const newOverallAccuracy =
      newQuestionsAttempted > 0 ? Math.round((newCorrect / newQuestionsAttempted) * 100 * 10) / 10 : 0;
    const newTotalXp = existingStats.lifetime.totalXp + earnedXp;

    existingStats.lifetime = {
      totalExams: newTotalExams,
      totalQuestionsAttempted: newQuestionsAttempted,
      totalCorrect: newCorrect,
      totalTimeSpentSeconds: existingStats.lifetime.totalTimeSpentSeconds + timeSpent,
      totalXp: newTotalXp,
      overallAccuracy: newOverallAccuracy,
      bestScore: Math.max(existingStats.lifetime.bestScore, score),
      bestAccuracy: Math.max(existingStats.lifetime.bestAccuracy, accuracy),
    };

    existingStats.streak = {
      currentStreak: streakInfo.current,
      longestStreak: streakInfo.longest,
      lastActiveDate: todayStr,
    };

    // Update Subject Mastery
    if (attemptRecord.subjectBreakdown && attemptRecord.subjectBreakdown.length > 0) {
      attemptRecord.subjectBreakdown.forEach((sub) => {
        const currentSub = existingStats!.subjectMastery[sub.subject] || {
          exams: 0,
          attempted: 0,
          correct: 0,
          accuracy: 0,
          xp: 0,
        };

        const att = currentSub.attempted + sub.attempted;
        const corr = currentSub.correct + sub.correct;
        const subAcc = att > 0 ? Math.round((corr / att) * 100) : 0;

        existingStats!.subjectMastery[sub.subject] = {
          exams: currentSub.exams + 1,
          attempted: att,
          correct: corr,
          accuracy: subAcc,
          xp: currentSub.xp + Math.round((earnedXp * (sub.attempted / Math.max(1, attemptedQuestions)))),
        };
      });
    }

    // Update Weak Topics (< 60% accuracy considered weak)
    const topicMap = new Map<string, WeakTopicItem>();
    existingStats.weakTopics.forEach((wt) => topicMap.set(wt.topic, { ...wt }));

    attemptRecord.topicBreakdown.forEach((tb) => {
      const existing = topicMap.get(tb.topic) || {
        topic: tb.topic,
        subject: tb.subject,
        accuracy: tb.accuracy,
        attempted: 0,
        correct: 0,
        total: 0,
      };

      existing.attempted += tb.attempted;
      existing.correct += tb.correct;
      existing.total += tb.total;
      existing.accuracy =
        existing.attempted > 0 ? Math.round((existing.correct / existing.attempted) * 100) : 0;

      if (existing.accuracy < 60) {
        topicMap.set(tb.topic, existing);
      } else {
        topicMap.delete(tb.topic); // Mastered! Remove from weak topics
      }
    });

    existingStats.weakTopics = Array.from(topicMap.values())
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 10);

    // Update Recent Trend (keep last 10 points)
    const newTrendPoint: ExamTrendPoint = {
      attemptId,
      examNumber: `Exam #${newTotalExams}`,
      date: todayStr,
      subject: attemptRecord.subject,
      accuracy,
      score,
    };

    existingStats.recentTrend = [
      ...existingStats.recentTrend.slice(-9),
      newTrendPoint,
    ];
    existingStats.updatedAt = now.toISOString();

    // 4. Update Leaderboard Standing
    let topSubject = attemptRecord.subject;
    let maxSubXp = 0;
    const subjectXp: Record<string, number> = {};
    const subjectAccuracy: Record<string, number> = {};

    Object.entries(existingStats.subjectMastery).forEach(([sub, val]) => {
      subjectXp[sub] = val.xp;
      subjectAccuracy[sub] = val.accuracy;
      if (val.xp > maxSubXp) {
        maxSubXp = val.xp;
        topSubject = sub;
      }
    });

    const initials = (existingStats.displayName || "ST")
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const leaderboardEntry: LeaderboardEntry = {
      id: userId,
      userId,
      name: existingStats.displayName,
      collegeId: existingStats.collegeId || user.collegeId,
      school: existingStats.school || user.collegeName || "St. Xavier's College",
      city: existingStats.city || user.collegeCity || "Kathmandu",
      gender: existingStats.gender || user.gender,
      grade: existingStats.grade,
      avatarInitials: initials || "ST",
      avatarBg: "bg-indigo-600",
      totalXp: newTotalXp,
      weeklyXp: Math.min(newTotalXp, (existingStats.lifetime.totalXp % 3000) + earnedXp),
      examsCompleted: newTotalExams,
      overallAccuracy: newOverallAccuracy,
      subjectXp,
      subjectAccuracy,
      streakDays: streakInfo.current,
      topSubject,
      badgesCount: Math.min(8, Math.floor(newTotalExams / 2) + (newOverallAccuracy >= 80 ? 2 : 1)),
    };

    await progressRepository.saveUserStatsAndLeaderboard(existingStats, leaderboardEntry);

    logger.info(
      `[ProgressService] Attempt processed for ${userId}: Score=${score}, Accuracy=${accuracy}%, XP=+${earnedXp}, Streak=${streakInfo.current}`
    );

    return {
      attempt: attemptRecord,
      stats: existingStats,
      earnedXp,
    };
  }

  /**
   * Returns pre-aggregated dashboard diagnostics in a single read
   */
  public async getDashboardSummary(userId: string): Promise<UserStatsRecord | null> {
    let stats = await progressRepository.getUserStats(userId);
    if (!stats) {
      // Check if user exists in userRepository
      const user = await userRepository.findById(userId);
      if (user) {
        // Return default empty stats for new user
        stats = {
          userId,
          displayName: user.name,
          email: user.email,
          picture: user.picture || undefined,
          collegeId: user.collegeId || undefined,
          school: user.collegeName || "St. Xavier's College",
          city: user.collegeCity || "Kathmandu",
          gender: user.gender || undefined,
          grade: user.grade || 12,
          lifetime: {
            totalExams: 0,
            totalQuestionsAttempted: 0,
            totalCorrect: 0,
            totalTimeSpentSeconds: 0,
            totalXp: 0,
            overallAccuracy: 0,
            bestScore: 0,
            bestAccuracy: 0,
          },
          streak: {
            currentStreak: 0,
            longestStreak: 0,
            lastActiveDate: "",
          },
          subjectMastery: {},
          weakTopics: [],
          recentTrend: [],
          updatedAt: new Date().toISOString(),
        };
      }
    }
    return stats;
  }

  /**
   * Returns paginated attempt history for user
   */
  public async getUserHistory(userId: string, limitCount = 50): Promise<AttemptRecord[]> {
    return await progressRepository.getUserAttempts(userId, limitCount);
  }

  /**
   * Returns attempt details by ID
   */
  public async getAttemptById(attemptId: string): Promise<AttemptRecord | null> {
    return await progressRepository.getAttemptById(attemptId);
  }

  /**
   * Returns leaderboard rankings
   */
  public async getLeaderboard(
    timeframe: "all-time" | "weekly" = "all-time",
    gradeFilter: string = "All",
    subjectFilter: string = "All",
    currentUserId?: string
  ): Promise<{
    students: LeaderboardEntry[];
    schools: SchoolStanding[];
    currentUserRank?: number | undefined;
  }> {
    const students = await progressRepository.getLeaderboardRankings(
      timeframe,
      gradeFilter,
      subjectFilter,
      100
    );
    const schools = await progressRepository.getSchoolStandings();

    let currentUserRank: number | undefined;
    if (currentUserId) {
      const foundIdx = students.findIndex((s) => s.userId === currentUserId || s.id === currentUserId);
      if (foundIdx !== -1) {
        currentUserRank = foundIdx + 1;
        students[foundIdx]!.isCurrentUser = true;
      }
    }

    return {
      students,
      schools,
      currentUserRank,
    };
  }
}

export const progressService = new ProgressService();

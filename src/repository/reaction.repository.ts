import { db, isFirestoreReady } from "../config/firebase.config.js";
import { logger } from "../utils/logger.util.js";
import type {
  QuestionReactionStats,
  ReactionType,
} from "../types/reaction.types.js";

export class QuestionReactionRepository {
  private statsCollection = "question_reaction_stats";
  private userReactionsCollection = "user_question_reactions";

  // In-memory fallback caches
  private questionStats: Map<string, { likesCount: number; dislikesCount: number }> =
    new Map();
  private userReactions: Map<string, Map<string, "like" | "dislike">> =
    new Map();

  /**
   * Retrieves reaction stats and current user reaction for a question
   */
  public async getReactionStats(
    questionId: string,
    actorId?: string,
  ): Promise<QuestionReactionStats> {
    let stats = this.questionStats.get(questionId);

    if (!stats && isFirestoreReady() && db) {
      try {
        const doc = await db.collection(this.statsCollection).doc(questionId).get();
        if (doc.exists) {
          const data = doc.data();
          stats = {
            likesCount: Number(data?.likesCount) || 0,
            dislikesCount: Number(data?.dislikesCount) || 0,
          };
          this.questionStats.set(questionId, stats);
        }
      } catch (err: any) {
        logger.error(
          `[QuestionReactionRepository] Failed to read stats for '${questionId}': ${err.message}`,
        );
      }
    }

    if (!stats) {
      stats = { likesCount: 0, dislikesCount: 0 };
      this.questionStats.set(questionId, stats);
    }

    let userReaction: "like" | "dislike" | null = null;
    if (actorId) {
      userReaction = await this.getUserReaction(questionId, actorId);
    }

    return {
      questionId,
      likesCount: stats.likesCount,
      dislikesCount: stats.dislikesCount,
      userReaction,
    };
  }

  /**
   * Batch fetches reaction stats for a list of question IDs
   */
  public async getBatchReactionStats(
    questionIds: string[],
    actorId?: string,
  ): Promise<Record<string, QuestionReactionStats>> {
    const result: Record<string, QuestionReactionStats> = {};

    let userMap: Map<string, "like" | "dislike"> | null = null;
    if (actorId) {
      userMap = await this.loadUserReactionsMap(actorId);
    }

    for (const qId of questionIds) {
      let stats = this.questionStats.get(qId);
      if (!stats) {
        stats = { likesCount: 0, dislikesCount: 0 };
        this.questionStats.set(qId, stats);
      }

      result[qId] = {
        questionId: qId,
        likesCount: stats.likesCount,
        dislikesCount: stats.dislikesCount,
        userReaction: userMap ? userMap.get(qId) || null : null,
      };
    }

    // Try to load any missing stats in bulk from Firestore if available
    if (isFirestoreReady() && db && questionIds.length > 0) {
      try {
        const missingIds = questionIds.filter(
          (id) => !this.questionStats.has(id),
        );
        if (missingIds.length > 0) {
          const chunks: string[][] = [];
          for (let i = 0; i < missingIds.length; i += 30) {
            chunks.push(missingIds.slice(i, i + 30));
          }

          for (const chunk of chunks) {
            const snap = await db
              .collection(this.statsCollection)
              .where("__name__", "in", chunk)
              .get();

            snap.forEach((doc) => {
              const data = doc.data();
              const qId = doc.id;
              const statsObj = {
                likesCount: Number(data?.likesCount) || 0,
                dislikesCount: Number(data?.dislikesCount) || 0,
              };
              this.questionStats.set(qId, statsObj);
              if (result[qId]) {
                result[qId].likesCount = statsObj.likesCount;
                result[qId].dislikesCount = statsObj.dislikesCount;
              }
            });
          }
        }
      } catch (err: any) {
        logger.warn(
          `[QuestionReactionRepository] Batch load failed: ${err.message}`,
        );
      }
    }

    return result;
  }

  /**
   * Updates a user's reaction to a question, adjusting both like/dislike counts
   */
  public async setReaction(
    questionId: string,
    actorId: string,
    targetAction: ReactionType,
  ): Promise<QuestionReactionStats> {
    const currentStats = await this.getReactionStats(questionId, actorId);
    let likes = currentStats.likesCount;
    let dislikes = currentStats.dislikesCount;
    const previousReaction = currentStats.userReaction;

    let nextReaction: "like" | "dislike" | null = null;

    if (targetAction === "like") {
      if (previousReaction === "like") {
        // Toggle off
        nextReaction = null;
        likes = Math.max(0, likes - 1);
      } else if (previousReaction === "dislike") {
        // Switch from dislike to like
        nextReaction = "like";
        dislikes = Math.max(0, dislikes - 1);
        likes += 1;
      } else {
        // First-time like
        nextReaction = "like";
        likes += 1;
      }
    } else if (targetAction === "dislike") {
      if (previousReaction === "dislike") {
        // Toggle off
        nextReaction = null;
        dislikes = Math.max(0, dislikes - 1);
      } else if (previousReaction === "like") {
        // Switch from like to dislike
        nextReaction = "dislike";
        likes = Math.max(0, likes - 1);
        dislikes += 1;
      } else {
        // First-time dislike
        nextReaction = "dislike";
        dislikes += 1;
      }
    } else {
      // Action is "none" / neutral
      if (previousReaction === "like") {
        likes = Math.max(0, likes - 1);
      } else if (previousReaction === "dislike") {
        dislikes = Math.max(0, dislikes - 1);
      }
      nextReaction = null;
    }

    // 1. Update in-memory caches
    this.questionStats.set(questionId, {
      likesCount: likes,
      dislikesCount: dislikes,
    });

    let userMap = this.userReactions.get(actorId);
    if (!userMap) {
      userMap = new Map();
      this.userReactions.set(actorId, userMap);
    }

    if (nextReaction) {
      userMap.set(questionId, nextReaction);
    } else {
      userMap.delete(questionId);
    }

    // 2. Persist to Firestore asynchronously if connected
    if (isFirestoreReady() && db) {
      try {
        const batch = db.batch();

        // Save question total counts
        const statsRef = db.collection(this.statsCollection).doc(questionId);
        batch.set(
          statsRef,
          {
            questionId,
            likesCount: likes,
            dislikesCount: dislikes,
            updatedAt: new Date().toISOString(),
          },
          { merge: true },
        );

        // Convert user reactions map to plain object
        const reactionsObj: Record<string, "like" | "dislike"> = {};
        userMap.forEach((val, key) => {
          reactionsObj[key] = val;
        });

        // Save user's reaction record
        const userRef = db
          .collection(this.userReactionsCollection)
          .doc(actorId);
        batch.set(
          userRef,
          {
            actorId,
            reactions: reactionsObj,
            updatedAt: new Date().toISOString(),
          },
          { merge: true },
        );

        await batch.commit();
        logger.info(
          `[QuestionReactionRepository] Reaction '${nextReaction || "none"}' set on '${questionId}' by '${actorId}'. Counts: +${likes} / -${dislikes}`,
        );
      } catch (err: any) {
        logger.error(
          `[QuestionReactionRepository] Failed to persist reaction: ${err.message}`,
        );
      }
    }

    return {
      questionId,
      likesCount: likes,
      dislikesCount: dislikes,
      userReaction: nextReaction,
    };
  }

  private async getUserReaction(
    questionId: string,
    actorId: string,
  ): Promise<"like" | "dislike" | null> {
    const userMap = await this.loadUserReactionsMap(actorId);
    return userMap.get(questionId) || null;
  }

  private async loadUserReactionsMap(
    actorId: string,
  ): Promise<Map<string, "like" | "dislike">> {
    let map = this.userReactions.get(actorId);
    if (map) return map;

    map = new Map();
    this.userReactions.set(actorId, map);

    if (isFirestoreReady() && db) {
      try {
        const doc = await db
          .collection(this.userReactionsCollection)
          .doc(actorId)
          .get();
        if (doc.exists) {
          const data = doc.data();
          const reactions = data?.reactions || {};
          for (const [qId, reaction] of Object.entries(reactions)) {
            if (reaction === "like" || reaction === "dislike") {
              map.set(qId, reaction);
            }
          }
        }
      } catch (err: any) {
        logger.warn(
          `[QuestionReactionRepository] Failed to load user reactions for '${actorId}': ${err.message}`,
        );
      }
    }

    return map;
  }
}

export const questionReactionRepository = new QuestionReactionRepository();

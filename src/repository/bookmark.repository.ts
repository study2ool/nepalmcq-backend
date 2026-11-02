import { db, isFirestoreReady } from "../config/firebase.config.js";
import { logger } from "../utils/logger.util.js";

export class BookmarkRepository {
  private collectionName = "user_bookmarks";
  private memoryBookmarks: Map<string, Set<string>> = new Map();

  /**
   * Retrieves bookmarked question IDs for a user
   */
  public async getBookmarks(userId: string): Promise<string[]> {
    const memory = this.memoryBookmarks.get(userId);
    if (memory) return Array.from(memory);

    if (isFirestoreReady() && db) {
      try {
        const doc = await db.collection(this.collectionName).doc(userId).get();
        if (doc.exists) {
          const data = doc.data();
          const list: string[] = data?.questionIds || [];
          this.memoryBookmarks.set(userId, new Set(list));
          return list;
        }
      } catch (err: any) {
        logger.error(`[BookmarkRepository] Error fetching bookmarks for '${userId}': ${err.message}`);
      }
    }

    return [];
  }

  /**
   * Adds a question ID to user bookmarks
   */
  public async addBookmark(userId: string, questionId: string): Promise<string[]> {
    const userSet = this.memoryBookmarks.get(userId) || new Set();
    userSet.add(questionId);
    this.memoryBookmarks.set(userId, userSet);

    const list = Array.from(userSet);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(userId).set({
          userId,
          questionIds: list,
          updatedAt: new Date().toISOString(),
        }, { merge: true });
        logger.info(`[BookmarkRepository] Added bookmark '${questionId}' for user '${userId}'`);
      } catch (err: any) {
        logger.error(`[BookmarkRepository] Error adding bookmark: ${err.message}`, err);
      }
    }

    return list;
  }

  /**
   * Removes a question ID from user bookmarks
   */
  public async removeBookmark(userId: string, questionId: string): Promise<string[]> {
    const userSet = this.memoryBookmarks.get(userId) || new Set();
    userSet.delete(questionId);
    this.memoryBookmarks.set(userId, userSet);

    const list = Array.from(userSet);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(userId).set({
          userId,
          questionIds: list,
          updatedAt: new Date().toISOString(),
        }, { merge: true });
        logger.info(`[BookmarkRepository] Removed bookmark '${questionId}' for user '${userId}'`);
      } catch (err: any) {
        logger.error(`[BookmarkRepository] Error removing bookmark: ${err.message}`, err);
      }
    }

    return list;
  }
}

export const bookmarkRepository = new BookmarkRepository();


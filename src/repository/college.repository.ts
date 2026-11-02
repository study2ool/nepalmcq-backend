import type { QueryDocumentSnapshot } from "firebase-admin/firestore";
import { db, isFirestoreReady } from "../config/firebase.config.js";
import { NEPAL_COLLEGES, CollegeItem } from "../data/colleges.data.js";
import { logger } from "../utils/logger.util.js";

export class CollegeRepository {
  private collectionName = "colleges";
  private collegesMemory: Map<string, CollegeItem> = new Map();

  constructor() {
    // Seed default colleges
    NEPAL_COLLEGES.forEach((c) => {
      this.collegesMemory.set(c.id, { ...c });
    });
    this.init();
  }

  private async init(): Promise<void> {
    if (isFirestoreReady() && db) {
      try {
        const snap = await db.collection(this.collectionName).get();
        if (!snap.empty) {
          snap.forEach((doc: QueryDocumentSnapshot) => {
            const data = doc.data() as CollegeItem;
            if (data && data.id) {
              this.collegesMemory.set(data.id, data);
            }
          });
          logger.info(`[CollegeRepository] Loaded ${snap.size} colleges from Firestore.`);

          // Ensure any newly added base colleges (e.g. from Birgunj) are seeded to Firestore and memory
          const currentDb = db;
          const missing = NEPAL_COLLEGES.filter((c) => !this.collegesMemory.has(c.id));
          if (missing.length > 0) {
            const batch = currentDb.batch();
            missing.forEach((c) => {
              this.collegesMemory.set(c.id, { ...c });
              batch.set(currentDb.collection(this.collectionName).doc(c.id), c);
            });
            await batch.commit();
            logger.info(`[CollegeRepository] Synced ${missing.length} new base colleges to Firestore.`);
          }
        } else {
          // If Firestore collection is empty, pre-populate with default colleges
          logger.info(`[CollegeRepository] Pre-populating Firestore colleges collection...`);
          const currentDb = db;
          const batch = currentDb.batch();
          NEPAL_COLLEGES.forEach((c) => {
            const ref = currentDb.collection(this.collectionName).doc(c.id);
            batch.set(ref, c);
          });
          await batch.commit();
          logger.info(`[CollegeRepository] Seeded ${NEPAL_COLLEGES.length} colleges to Firestore.`);
        }
      } catch (err: any) {
        logger.warn(`[CollegeRepository] Init notice: ${err.message}`);
      }
    }
  }

  public async getAll(search?: string): Promise<CollegeItem[]> {
    let list = Array.from(this.collegesMemory.values());

    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q),
      );
    }

    return list.sort((a, b) => {
      if (a.id === "clg_other") return 1;
      if (b.id === "clg_other") return -1;
      if (a.isPopular && !b.isPopular) return -1;
      if (!a.isPopular && b.isPopular) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  public async getById(id: string): Promise<CollegeItem | null> {
    return this.collegesMemory.get(id) || null;
  }

  public async addCollege(item: Omit<CollegeItem, "id"> & { id?: string }): Promise<CollegeItem> {
    const id =
      item.id ||
      `clg_${item.name.toLowerCase().replace(/[^a-z0-9]/g, "_").slice(0, 30)}_${Date.now().toString().slice(-4)}`;

    const college: CollegeItem = {
      ...item,
      id,
    };

    this.collegesMemory.set(id, college);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(id).set(college);
        logger.info(`[CollegeRepository] Added college '${id}' to Firestore.`);
      } catch (err: any) {
        logger.error(`[CollegeRepository] Error saving college to Firestore: ${err.message}`, err);
        throw err;
      }
    }

    return college;
  }

  public async updateCollege(
    id: string,
    updates: Partial<CollegeItem>,
  ): Promise<CollegeItem | null> {
    const existing = this.collegesMemory.get(id);
    if (!existing) return null;

    const updated: CollegeItem = {
      ...existing,
      ...updates,
      id, // Immutable ID
    };

    this.collegesMemory.set(id, updated);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(id).set(updated, { merge: true });
        logger.info(`[CollegeRepository] Updated college '${id}' in Firestore.`);
      } catch (err: any) {
        logger.error(`[CollegeRepository] Error updating college in Firestore: ${err.message}`, err);
        throw err;
      }
    }

    return updated;
  }

  public async deleteCollege(id: string): Promise<boolean> {
    if (!this.collegesMemory.has(id)) return false;

    this.collegesMemory.delete(id);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(id).delete();
        logger.info(`[CollegeRepository] Deleted college '${id}' from Firestore.`);
      } catch (err: any) {
        logger.error(`[CollegeRepository] Error deleting college from Firestore: ${err.message}`, err);
        throw err;
      }
    }

    return true;
  }
}

export const collegeRepository = new CollegeRepository();

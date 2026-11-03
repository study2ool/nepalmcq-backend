import crypto from "crypto";
import type { QueryDocumentSnapshot } from "firebase-admin/firestore";
import { db, isFirestoreReady } from "../config/firebase.config.js";
import { logger } from "../utils/logger.util.js";
import type {
  ContactInquiry,
  CreateContactInquiryDto,
  UpdateContactInquiryDto,
  ContactInquiryStats,
  ContactInquiryStatus,
} from "../types/contact.types.js";

export class ContactRepository {
  private collectionName = "contact_inquiries";
  private inquiriesMemory: Map<string, ContactInquiry> = new Map();
  private initialized = false;

  constructor() {
    this.init();
  }

  private async init(): Promise<void> {
    if (isFirestoreReady() && db) {
      try {
        const snap = await db.collection(this.collectionName).get();
        if (!snap.empty) {
          snap.forEach((doc: QueryDocumentSnapshot) => {
            const data = doc.data() as ContactInquiry;
            if (data && data.id) {
              this.inquiriesMemory.set(data.id, data);
            }
          });
          logger.info(
            `[ContactRepository] Loaded ${snap.size} contact inquiries from Firestore.`,
          );
        }
        this.initialized = true;
      } catch (err: any) {
        logger.warn(`[ContactRepository] Init notice: ${err.message}`);
      }
    }
  }

  public async create(dto: CreateContactInquiryDto): Promise<ContactInquiry> {
    const id = `inq_${crypto.randomUUID().substring(0, 8)}`;
    const now = new Date().toISOString();

    const inquiry: ContactInquiry = {
      id,
      name: dto.name.trim(),
      email: dto.email.trim().toLowerCase(),
      category: dto.category || "general",
      role: dto.role || "student_12",
      subject: dto.subject?.trim() || "Inquiry from website",
      message: dto.message.trim(),
      status: "pending",
      source: dto.source || "website",
      userId: dto.userId,
      adminNotes: "",
      createdAt: now,
      updatedAt: now,
    };

    // Store in memory
    this.inquiriesMemory.set(id, inquiry);

    // Persist to Firestore if available
    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(id).set(inquiry);
      } catch (err: any) {
        logger.error(`[ContactRepository] Failed to save inquiry to Firestore: ${err.message}`);
      }
    }

    return inquiry;
  }

  public async getAll(filters?: {
    category?: string | undefined;
    status?: string | undefined;
    search?: string | undefined;
  }): Promise<ContactInquiry[]> {
    // If Firestore is ready and not initialized, ensure we pull
    if (!this.initialized && isFirestoreReady() && db) {
      await this.init();
    }

    let list = Array.from(this.inquiriesMemory.values());

    if (filters?.status && filters.status !== "all") {
      list = list.filter((i) => i.status === filters.status);
    }

    if (filters?.category && filters.category !== "all") {
      list = list.filter((i) => i.category === filters.category);
    }

    if (filters?.search && filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      list = list.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.email.toLowerCase().includes(q) ||
          i.subject.toLowerCase().includes(q) ||
          i.message.toLowerCase().includes(q) ||
          i.id.toLowerCase().includes(q),
      );
    }

    // Sort by createdAt desc (newest first)
    list.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return list;
  }

  public async getById(id: string): Promise<ContactInquiry | null> {
    const cached = this.inquiriesMemory.get(id);
    if (cached) return cached;

    if (isFirestoreReady() && db) {
      try {
        const snap = await db.collection(this.collectionName).doc(id).get();
        if (snap.exists) {
          const item = snap.data() as ContactInquiry;
          this.inquiriesMemory.set(item.id, item);
          return item;
        }
      } catch (err: any) {
        logger.error(`[ContactRepository] Error getting inquiry ${id}: ${err.message}`);
      }
    }

    return null;
  }

  public async update(
    id: string,
    updates: UpdateContactInquiryDto,
  ): Promise<ContactInquiry | null> {
    const existing = await this.getById(id);
    if (!existing) return null;

    const updated: ContactInquiry = {
      ...existing,
      ...(updates.status ? { status: updates.status } : {}),
      ...(updates.adminNotes !== undefined ? { adminNotes: updates.adminNotes } : {}),
      updatedAt: new Date().toISOString(),
    };

    this.inquiriesMemory.set(id, updated);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(id).update({
          ...(updates.status ? { status: updates.status } : {}),
          ...(updates.adminNotes !== undefined ? { adminNotes: updates.adminNotes } : {}),
          updatedAt: updated.updatedAt,
        });
      } catch (err: any) {
        logger.error(`[ContactRepository] Error updating inquiry ${id}: ${err.message}`);
      }
    }

    return updated;
  }

  public async delete(id: string): Promise<boolean> {
    const exists = this.inquiriesMemory.has(id);
    this.inquiriesMemory.delete(id);

    if (isFirestoreReady() && db) {
      try {
        await db.collection(this.collectionName).doc(id).delete();
        return true;
      } catch (err: any) {
        logger.error(`[ContactRepository] Error deleting inquiry ${id}: ${err.message}`);
      }
    }

    return exists;
  }

  public async getStats(): Promise<ContactInquiryStats> {
    const list = Array.from(this.inquiriesMemory.values());
    const stats: ContactInquiryStats = {
      total: list.length,
      pending: 0,
      reviewed: 0,
      resolved: 0,
      archived: 0,
      byCategory: {},
    };

    list.forEach((i) => {
      if (i.status in stats) {
        (stats as any)[i.status] += 1;
      }
      stats.byCategory[i.category] = (stats.byCategory[i.category] || 0) + 1;
    });

    return stats;
  }
}

export const contactRepository = new ContactRepository();

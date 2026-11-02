import { Router, Request, Response } from "express";
import crypto from "crypto";
import { db, isFirestoreReady } from "../config/firebase.config.js";

const router = Router();

// In-memory fallback if Firestore is not initialized
const inMemoryDeletions = new Map<string, any>();

/**
 * POST /api/v1/account-deletions
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    const { email, reason, feedback, source = "website" } = req.body;
    const id = `del_${crypto.randomUUID().substring(0, 8)}`;
    const deletionRecord = {
      id,
      email: email || "anonymous@student.np",
      reason: reason || "User requested account deletion",
      feedback: feedback || "",
      status: "pending",
      source,
      requestedAt: new Date().toISOString(),
    };

    if (isFirestoreReady() && db) {
      await db.collection("account_deletions").doc(id).set(deletionRecord);
    } else {
      inMemoryDeletions.set(id, deletionRecord);
    }

    res.status(201).json({
      success: true,
      data: deletionRecord,
      message: "Account deletion request received successfully.",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || "Failed to process account deletion request",
    });
  }
});

/**
 * GET /api/v1/account-deletions/:id
 */
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id || "");
    if (!id) {
      return res.status(400).json({
        success: false,
        error: "Deletion request ID is required",
      });
    }

    let record: any = null;
    if (isFirestoreReady() && db) {
      const snap = await db.collection("account_deletions").doc(id).get();
      if (snap.exists) {
        record = snap.data();
      }
    } else {
      record = inMemoryDeletions.get(id);
    }

    if (!record) {
      return res.status(404).json({
        success: false,
        error: "Account deletion request not found",
      });
    }

    res.json({
      success: true,
      data: record,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || "Failed to retrieve account deletion request",
    });
  }
});

export default router;

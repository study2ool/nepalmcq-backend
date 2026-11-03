import type { Request, Response } from "express";
import { contactRepository } from "../repository/contact.repository.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
import { logger } from "../utils/logger.util.js";
import type { ContactInquiryStatus } from "../types/contact.types.js";

export class ContactController {
  /**
   * POST /api/v1/contact
   * Public submission endpoint for students, teachers, institutions
   */
  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, category, role, subject, message, source } = req.body;

      if (!name || typeof name !== "string" || name.trim().length < 2) {
        sendError(res, "Please provide a valid name (at least 2 characters).", 400);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
        sendError(res, "Please provide a valid email address.", 400);
        return;
      }

      if (!message || typeof message !== "string" || message.trim().length < 5) {
        sendError(res, "Please provide a detailed inquiry message (at least 5 characters).", 400);
        return;
      }

      const inquiry = await contactRepository.create({
        name,
        email,
        category,
        role,
        subject,
        message,
        source: source || "website",
        userId: (req as any).user?.uid || (req as any).user?.id,
      });

      logger.info(
        `[ContactController] New inquiry created: ${inquiry.id} (${inquiry.category}) from ${inquiry.email}`,
      );

      sendSuccess(
        res,
        inquiry,
        "Your inquiry has been received. Our academic team will review it shortly.",
        201,
      );
    } catch (error: any) {
      logger.error(`[ContactController] Error creating inquiry: ${error.message}`);
      sendError(res, error.message || "Failed to submit contact inquiry.", 500);
    }
  };

  /**
   * GET /api/v1/admin/inquiries
   * Admin-only: list all contact inquiries with optional filtering
   */
  public getInquiries = async (req: Request, res: Response): Promise<void> => {
    try {
      const { search, category, status } = req.query;

      const inquiries = await contactRepository.getAll({
        search: search ? String(search) : undefined,
        category: category ? String(category) : undefined,
        status: status ? String(status) : undefined,
      });

      sendSuccess(res, inquiries);
    } catch (error: any) {
      logger.error(`[ContactController] Error fetching inquiries: ${error.message}`);
      sendError(res, error.message || "Failed to retrieve inquiries.", 500);
    }
  };

  /**
   * GET /api/v1/admin/inquiries/stats
   * Admin-only: summary stats of inquiries
   */
  public getInquiryStats = async (_req: Request, res: Response): Promise<void> => {
    try {
      const stats = await contactRepository.getStats();
      sendSuccess(res, stats);
    } catch (error: any) {
      logger.error(`[ContactController] Error fetching inquiry stats: ${error.message}`);
      sendError(res, error.message || "Failed to retrieve inquiry stats.", 500);
    }
  };

  /**
   * GET /api/v1/admin/inquiries/:id
   * Admin-only: retrieve single inquiry details
   */
  public getInquiryById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = String(req.params.id);
      const inquiry = await contactRepository.getById(id);

      if (!inquiry) {
        sendError(res, "Inquiry not found.", 404);
        return;
      }

      sendSuccess(res, inquiry);
    } catch (error: any) {
      logger.error(`[ContactController] Error fetching inquiry ${req.params.id}: ${error.message}`);
      sendError(res, error.message || "Failed to retrieve inquiry.", 500);
    }
  };

  /**
   * PATCH /api/v1/admin/inquiries/:id
   * Admin-only: update status or admin notes
   */
  public updateInquiry = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = String(req.params.id);
      const { status, adminNotes } = req.body;

      const validStatuses: ContactInquiryStatus[] = [
        "pending",
        "reviewed",
        "resolved",
        "archived",
      ];

      if (status && !validStatuses.includes(status)) {
        sendError(
          res,
          `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
          400,
        );
        return;
      }

      const updated = await contactRepository.update(id, {
        status,
        adminNotes,
      });

      if (!updated) {
        sendError(res, "Inquiry not found.", 404);
        return;
      }

      logger.info(`[ContactController] Inquiry ${id} updated to status=${updated.status}`);
      sendSuccess(res, updated, "Inquiry updated successfully.");
    } catch (error: any) {
      logger.error(`[ContactController] Error updating inquiry ${req.params.id}: ${error.message}`);
      sendError(res, error.message || "Failed to update inquiry.", 500);
    }
  };

  /**
   * DELETE /api/v1/admin/inquiries/:id
   * Admin-only: delete an inquiry
   */
  public deleteInquiry = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = String(req.params.id);
      const deleted = await contactRepository.delete(id);

      if (!deleted) {
        sendError(res, "Inquiry not found.", 404);
        return;
      }

      logger.info(`[ContactController] Inquiry ${id} deleted.`);
      sendSuccess(res, { id, deleted: true }, "Inquiry deleted successfully.");
    } catch (error: any) {
      logger.error(`[ContactController] Error deleting inquiry ${req.params.id}: ${error.message}`);
      sendError(res, error.message || "Failed to delete inquiry.", 500);
    }
  };
}

export const contactController = new ContactController();


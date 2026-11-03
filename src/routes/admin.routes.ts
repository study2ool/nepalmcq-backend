import { Router } from "express";
import { adminController } from "../controllers/admin.controller.js";
import { contactController } from "../controllers/contact.controller.js";
import {
  authenticateToken,
  requireAdmin,
} from "../middlewares/auth.middleware.js";

const router = Router();

// All admin routes require valid authentication token AND admin role
router.use(authenticateToken, requireAdmin);

// Platform stats & Single-doc Analytics
router.get("/stats", adminController.getStats);
router.get("/analytics", adminController.getAnalytics);
router.post("/analytics/sync", adminController.syncAnalytics);

// User management
router.get("/users", adminController.getUsers);
router.get("/users/:id", adminController.getUserById);
router.patch("/users/:id", adminController.updateUser);
router.delete("/users/:id", adminController.deleteUser);

// School/College management
router.get("/schools", adminController.getSchools);
router.post("/schools", adminController.createSchool);
router.put("/schools/:id", adminController.updateSchool);
router.delete("/schools/:id", adminController.deleteSchool);

// Contact inquiries management
router.get("/inquiries", contactController.getInquiries);
router.get("/inquiries/stats", contactController.getInquiryStats);
router.get("/inquiries/:id", contactController.getInquiryById);
router.patch("/inquiries/:id", contactController.updateInquiry);
router.delete("/inquiries/:id", contactController.deleteInquiry);

export default router;

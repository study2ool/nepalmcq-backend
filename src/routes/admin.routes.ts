import { Router } from "express";
import { adminController } from "../controllers/admin.controller.js";
import {
  authenticateToken,
  requireAdmin,
} from "../middlewares/auth.middleware.js";

const router = Router();

// All admin routes require valid authentication token AND admin role
router.use(authenticateToken, requireAdmin);

// Platform stats
router.get("/stats", adminController.getStats);

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

export default router;

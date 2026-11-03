import { Router } from "express";
import { contactController } from "../controllers/contact.controller.js";
import { optionalAuth } from "../middlewares/auth.middleware.js";

const router = Router();

// Public contact submission (with optionalAuth to attach userId if logged in)
router.post("/", optionalAuth, contactController.create);

export default router;


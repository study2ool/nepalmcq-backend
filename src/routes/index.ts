import { Router } from "express";
import healthRoutes from "./health.routes.js";
import quizRoutes from "./quiz.routes.js";
import authRoutes from "./auth.routes.js";
import syllabusRoutes from "./syllabus.routes.js";
import subjectRoutes from "./subject.routes.js";
import attemptRoutes from "./attempt.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import leaderboardRoutes from "./leaderboard.routes.js";
import bookmarkRoutes from "./bookmark.routes.js";
import collegeRoutes from "./college.routes.js";
import adminRoutes from "./admin.routes.js";
import accountDeletionRoutes from "./accountDeletion.routes.js";
import contactRoutes from "./contact.routes.js";

const apiRouter = Router();

// Mount child route modules
apiRouter.use("/health", healthRoutes);
apiRouter.use("/quiz", quizRoutes);
apiRouter.use("/auth", authRoutes);
apiRouter.use("/syllabus", syllabusRoutes);
apiRouter.use("/subjects", subjectRoutes);
apiRouter.use("/attempts", attemptRoutes);
apiRouter.use("/dashboard", dashboardRoutes);
apiRouter.use("/leaderboard", leaderboardRoutes);
apiRouter.use("/bookmarks", bookmarkRoutes);
apiRouter.use("/colleges", collegeRoutes);
apiRouter.use("/admin", adminRoutes);
apiRouter.use("/account-deletions", accountDeletionRoutes);
apiRouter.use("/contact", contactRoutes);

export default apiRouter;

import { Router } from "express";
import healthRoutes from "./health.routes.js";
import quizRoutes from "./quiz.routes.js";
import authRoutes from "./auth.routes.js";
import syllabusRoutes from "./syllabus.routes.js";
import subjectRoutes from "./subject.routes.js";

const apiRouter = Router();

// Mount child route modules
apiRouter.use("/health", healthRoutes);
apiRouter.use("/quiz", quizRoutes);
apiRouter.use("/auth", authRoutes);
apiRouter.use("/syllabus", syllabusRoutes);
apiRouter.use("/subjects", subjectRoutes);

export default apiRouter;

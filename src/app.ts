import express, { type Application } from "express";
import cors from "cors";
import { config } from "./config/env.config.js";
import apiRouter from "./routes/index.js";
import { notFoundHandler } from "./middlewares/notFound.middleware.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { logger } from "./utils/logger.util.js";

export function createApp(): Application {
  const app = express();

  // Basic Middlewares
  app.use(cors());
  app.use(express.json({ limit: "2mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Request logger
  app.use((req, _res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
  });

  // Mount API V1 routes
  app.use(config.apiPrefix, apiRouter);

  // Root welcome route
  app.get("/", (_req, res) => {
    res.json({
      message: "Study2ool Quiz API Service",
      docs: `${config.apiPrefix}/health`,
      version: config.version,
    });
  });

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

export const app = createApp();

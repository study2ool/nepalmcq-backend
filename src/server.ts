import { app } from "./app.js";
import { config } from "./config/env.config.js";
import { logger } from "./utils/logger.util.js";

const server = app.listen(config.port, () => {
  logger.info(`Server listening on port ${config.port}`);
  logger.info(
    `Health check available at http://localhost:${config.port}${config.apiPrefix}/health`,
  );
  logger.info(
    `Generate quiz API available at http://localhost:${config.port}${config.apiPrefix}/quiz/generate`,
  );
});

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM received, shutting down gracefully...");
  server.close(() => {
    logger.info("Process terminated.");
  });
});

process.on("SIGINT", () => {
  logger.info("SIGINT received, shutting down gracefully...");
  server.close(() => {
    logger.info("Process terminated.");
  });
});

import winston from "winston";

const loggerPlugin = winston.createLogger({
  level: "info",
  transports: [
    // File transports with clean JSON (no ANSI codes)
    new winston.transports.File({
      filename: "error.log",
      level: "error",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
    new winston.transports.File({
      filename: "combined.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
    // Console with colors
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

const buildLogger = (service: string) => {
  return {
    log: (message: string) => {
      loggerPlugin.log({
        level: "info",
        message,
        service,
      });
    },
    error: (message: string) => {
      loggerPlugin.error({
        level: "error",
        message,
        service,
      });
    },
  };
};

export { buildLogger };

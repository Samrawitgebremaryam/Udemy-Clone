const logger = require("../services/loggerService");
const Sentry = require("../services/sentryService");

const errorHandler = (err, req, res, next) => {
  Sentry.captureException(err);
  logger.error(err.message, { meta: err.stack });
  res.status(500).json({ message: "Internal Server Error" });
};

module.exports = errorHandler;

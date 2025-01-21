const AppError = require("../utils/AppError");

// Global error handling function
const globalErrorHandler = (err, req, res, next) => {
  // Set default values if not already set
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Send a structured error response
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message || "Something went wrong!",
  });
};

module.exports = globalErrorHandler;

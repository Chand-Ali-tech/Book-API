class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // Call parent constructor (Error)

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error"; // Categorize error
    this.isOperational = true; // Marks as an operational (expected) error

    Error.captureStackTrace(this, this.constructor); // Captures stack trace
  }
}

module.exports = AppError;

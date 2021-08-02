const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log errors if the application is running in development environment
  if (process.env.ENVIRONMENT === "development") console.log(err);

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error"
  });
};

module.exports = errorHandler;

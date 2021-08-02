const express = require("express");
const errorHandler = require("./middleware/error");
const morgan = require("morgan");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cookies = require("cookie-parser");
const dotenv = require("dotenv");

require("./supabase");

// Load env vars
dotenv.config({ path: "../.env" });

// Create express instance
const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookies());

// Logger
app.use(morgan("short"));

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 8,
  headers: true,
  message: {
    success: false,
    error: "Too many requests, please try again later."
  }
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Require API routes
const auth = require("./routes/auth");

// Import API Routes
app.use("/auth", auth);

app.use(errorHandler);

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}

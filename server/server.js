const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Simple test routes
app.get("/api", (req, res) => {
  res.json({
    status: "OK",
    message: "HourHire API is running on Vercel! 🚀",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    status: "OK",
    message: "Test route is working!",
    env: process.env.VERCEL ? "Vercel" : "Local"
  });
});

// ✅ Start or export
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

module.exports = app;
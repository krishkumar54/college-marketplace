// ===============================
// Express Server Setup (server.js)
// ===============================

require("dotenv").config(); // Load env variables early

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ 
  limit: "50mb", // Increased limit for base64 images
  verify: (req, res, buf) => {
    try {
      JSON.parse(buf);
    } catch (e) {
      res.status(400).json({ message: 'Invalid JSON payload' });
    }
  }
}));
app.use(express.urlencoded({ 
  extended: true, 
  limit: "50mb" 
}));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// Health Check Route
app.get("/", (req, res) => {
  res.send("✅ Backend is running.");
});

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Export the app for testing
module.exports = app;

// Start server only if run directly (not during test)
if (require.main === module) {
  const PORT = process.env.PORT || 5001;
  
  const startServer = async () => {
    try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log("✅ Express initialized");
      });
    } catch (err) {
      console.error("❌ Failed to start server:", err);
      process.exit(1);
    }
  };

  startServer();
}

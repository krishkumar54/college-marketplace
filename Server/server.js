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
app.use(express.json());

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
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log("✅ Express initialized");
      });
    })
    .catch((err) => {
      console.error("❌ Failed to connect to MongoDB:", err);
    });
}

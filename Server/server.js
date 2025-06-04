// ===============================
// Express Server Setup (server.js)
// ===============================

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// Load environment variables
dotenv.config();

// Initialize Express App
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

// Export for Testing
module.exports = app;

// Server Start (only if not in test mode)
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

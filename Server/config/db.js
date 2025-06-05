// Load Mongo URI from .env file
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Debug log to verify URI at runtimee
    console.log("Connecting to Mongo URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

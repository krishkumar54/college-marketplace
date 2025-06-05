// Load environment variables from .env
require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("❌ MONGO_URI not defined in environment");
    }

    console.log("🔌 Connecting to Mongo URI...");

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
      console.log(`✅ MongoDB connected to: ${mongoose.connection.name}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

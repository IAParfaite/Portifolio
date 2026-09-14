import mongoose from "mongoose";

// DRY — single source of truth for the DB connection, reused by server.js.
export const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.warn("⚠️  MONGODB_URI not set — contact form will run in memory mode. See server/.env.example");
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB");
};

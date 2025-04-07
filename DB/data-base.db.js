import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
    });
    console.log("Connected MongoDB");
  } catch (err) {
    console.error("Error connecting MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;

// server.js (or index.js)
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();

// Gemini API setup
const genAI = new GoogleGenerativeAI(process.env.GEM_API);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // your React frontend
  credentials: true
}));

// Root route
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to our SkillGraph app",
    success: true
  });
});
// ...existing code...

// Gemini Route
app.post("/api/v1/gemini", async (req, res) => {
  try {
    console.log("Received request at /api/v1/gemini");
    console.log("Request body:", req.body);

    const { prompt } = req.body;
    if (!prompt) {
      console.log("Prompt missing in request.");
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("Prompt to Gemini:", prompt);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    console.log("Raw Gemini result:", result);

    const responseText = await result.response.text();
    console.log("Gemini response text:", responseText);

    return res.status(200).json({ text: responseText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: "Failed to fetch AI response" });
  }
});

// ...existing code...

// User API route
app.use("/api/v1/users", userRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

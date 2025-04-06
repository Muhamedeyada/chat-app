import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  })
);
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);

  connectDB();
});

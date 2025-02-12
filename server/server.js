import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(cookieParser());
app.use(express.json());

connectDB();
app.listen(PORT, () => {
  console.log(`port is running at ${PORT}`);
});

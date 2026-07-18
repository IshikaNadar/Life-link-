import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// IMPORT ROUTES
import requestRoutes from "./routes/requestRoutes.js";

dotenv.config();
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/lifelink")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// BASIC ROUTE
app.get("/", (req, res) => res.send("API Running"));

// API ROUTES
app.use("/api/requests", requestRoutes);

// SERVER START
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
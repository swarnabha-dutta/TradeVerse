import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import holdingRoutes from "./routes/holdings.routes.js";
const app = express();


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3002;
const DATABASE_URL = process.env.MONGODB_URL;


app.use("/api/holdings", holdingRoutes);
// MongoDB Connected
await mongoose
    .connect(DATABASE_URL)
    .then(() => {
        console.log("✅ Database connected successfully");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err);
    });

// Default route
app.get("/", (req, res) => {
    res.send("Server is running successfully ✅");
});

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});

import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import holdingRoutes from "./routes/holdings.routes.js";
import positionRoutes from "./routes/positions.routes.js";
import orderRoutes from "./routes/order.routes.js";
import seedHoldings from "./utils/seedholding.utils.js";
import seedPositions from "./utils/seedposition.utils.js";


const app = express();


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3002;
const DATABASE_URL = process.env.MONGODB_URL;


app.use("/api/holdings", holdingRoutes);
app.use("/api/positions", positionRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/allHoldings", async (req, res) => {
    try {
        
        const holdings = await HoldingModel.find({});
        return res.status(200).json(holdings);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch holdings" });
    }
})



// MongoDB Connected
await mongoose
    .connect(DATABASE_URL)
    .then(() => {
        console.log("✅ Database connected successfully");
        // 🌱 Seed dummy data only once
         seedHoldings();
         seedPositions();
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

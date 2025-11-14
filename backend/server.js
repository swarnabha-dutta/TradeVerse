import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import holdingRoutes from "./routes/holdings.routes.js";
import positionRoutes from "./routes/positions.routes.js";
import orderRoutes from "./routes/order.routes.js";
import liveRoutes from "./routes/live.routes.js";
import seedHoldings from "./utils/seedholding.utils.js";
import seedPositions from "./utils/seedposition.utils.js";
import bodyParser from 'body-parser';


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const port = process.env.PORT || 3002;
const DATABASE_URL = process.env.MONGODB_URL;


app.use("/api/holdings", holdingRoutes);
app.use("/api/positions", positionRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/live", liveRoutes);




// MongoDB Connected
try {
    await mongoose.connect(DATABASE_URL);
    console.log("✅ Database connected successfully");

    // Seed only if empty
    const holdingsCount = await mongoose.model("Holding").countDocuments();
    const positionsCount = await mongoose.model("Position").countDocuments();

    if (holdingsCount === 0) await seedHoldings();
    if (positionsCount === 0) await seedPositions();

} catch (err) {
    console.error("❌ MongoDB connection failed:", err);
}


// Default route
app.get("/", (req, res) => {
    res.send("Server is running successfully ✅");
});




app.get("/test/quote", async (req, res) => {
    try {
        const data = await getQuote("AAPL");
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});

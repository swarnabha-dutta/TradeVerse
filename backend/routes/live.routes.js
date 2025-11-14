import express from "express";
import { getYahooQuote } from "../services/yahoo.services.js";

const router = express.Router();

router.get("/quote/:symbol", async (req, res) => {
  try {
    const data = await getYahooQuote(req.params.symbol);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

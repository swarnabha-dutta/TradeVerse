import express from "express";
import { getAllHoldings } from "../controllers/holdingsController.js";

const router = express.Router();

router.get("/", getAllHoldings);

export default router;

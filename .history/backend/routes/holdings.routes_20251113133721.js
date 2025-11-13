import express from "express";
import { getAllHoldings } from "../controllers/holdings.controller.js";

const router = express.Router();

router.get("/", getAllHoldings);

export default router;

import express from "express";
import { getAllHoldings } from "../controllers/holdings.controllers.js";

const router = express.Router();

router.get("/", getAllHoldings);

export default router;

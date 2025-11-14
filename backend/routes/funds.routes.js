import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    return res.json({
        availableMargin: 4043.10,
        usedMargin: 3757.30,
        availableCash: 4043.10,
        openingBalanceDay1: 4043.10,
        openingBalanceDay2: 3736.40,
        payin: 4064.0,
        span: 0.0,
        deliveryMargin: 0.0,
        exposure: 0.0,
        optionsPremium: 0.0,
        collateralLiquid: 0.0,
        collateralEquity: 0.0
    });
});

export default router;

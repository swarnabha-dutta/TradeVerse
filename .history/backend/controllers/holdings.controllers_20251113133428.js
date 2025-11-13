import HoldingModel from "../models/Holdings.models.js";



export const getAllHoldings = async (req, res) => {
    try {
        const holdings = await HoldingModel.f
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch holdings" });
    }
}

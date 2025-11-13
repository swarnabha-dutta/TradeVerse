import HoldingModel from "../models/Holdings.models.js";



const getAllHoldings = async (req, res) => {
    try {
        const holdings = await HoldingModel.find({});
        return res.status(200).json(holdings);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch holdings" });
    }
}


export const getAllHoldings;
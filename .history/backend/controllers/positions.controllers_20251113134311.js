import PositionModel from "../models/Positions.models.js";

const getAllpositions = async (req, res) => {
    try {
        const positions = await 
    } catch (error) {
        return res.status(500).json({
            error:"Failed to fetch positions"
        })
    }
}
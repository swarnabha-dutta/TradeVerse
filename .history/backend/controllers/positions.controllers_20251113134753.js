import PositionModel from "../models/Positions.models.js";

const getAllPositions = async (req, res) => {
    try {
        const positions = await PositionModel.find({});
    } catch (error) {
        return res.status(500).json({
            error:"Failed to fetch positions"
        })
    }
}


export default getAllPositions;
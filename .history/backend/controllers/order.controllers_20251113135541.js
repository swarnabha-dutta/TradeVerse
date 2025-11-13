import OrderModel from "../models/OrderModel.js";


const createOrder = async(req,res)=>{
    try {
        const { name, qty, price, mode } = req.body;
        if (!name || !qty || !price || !mode) {
            return res.status(400).json({
                error: "All fields are required"
            });
        } 

        const newOrder = await OrderModel.create({
            name,c
        })
    } catch (error) {
        return res.status(500).json({
            error:"Order creation Failed ."
        })
    }
}
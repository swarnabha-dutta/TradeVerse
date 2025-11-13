import OrderModel from "../models/OrderModel.js";


const createOrder = async(req,res)=>{
    try {
        const { name, qty, price, mode } = req.body;
        if() 
    } catch (error) {
        return res.status(500).json({
            error:"Order creation Failed ."
        })
    }
}
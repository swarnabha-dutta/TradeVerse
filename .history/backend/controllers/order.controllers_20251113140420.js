import OrderModel from "./models/Orders.Model.js";


const createOrder = async(req,res)=>{
    try {
        const { name, qty, price, mode } = req.body;
        if (!name || !qty || !price || !mode) {
            return res.status(400).json({
                error: "All fields are required"
            });
        } 

        const newOrder = await OrderModel.create({
            name, qty, price, mode
        });

        await newOrder.save();
    } catch (error) {
        return res.status(500).json({
            error:"Order creation Failed ."
        })
    }
}


export default createOrder;
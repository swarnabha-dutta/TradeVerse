import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    mode: {
        type: String,
        required: true,
    }
    qty: {
        type: Number,
        required: true,
        min: 1
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    
}, {timestamps: true});



const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;
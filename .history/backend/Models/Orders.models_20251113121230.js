import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    qty: {
        type: Number,
        required: true,
        minLength: 1
    },
    price: {
        type: Number,
        required: true,
        minLength: 1
    },
    mode: {
        type: String,
        required: true,
    }
});



const OrderModel = mon
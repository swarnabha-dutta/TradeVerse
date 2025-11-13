import mongoose from "mongoose";

const HoldingsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    avg: {
        type: Number,
        required: true,
        min: 0
    },
    
    day: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        min: 1
    },
    net: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
}, {timestamps: true});

const HoldingModel = mongoose.model("Holding", HoldingsSchema);

export default HoldingModel;
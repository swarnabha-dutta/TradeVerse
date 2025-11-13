import mongoose from "mongoose";

const HoldingsSchema = new mongoose.Schema({
    
    avg: {
        type: Number,
        required: true,
        min: 0
    },
    
    day: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
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
import mongoose from "mongoose";

const HoldingsSchema = new mongoose.Schema({
    // avg: Number,
    avg: {
        type: Number,
        required: true,
        min: 0
    },
    // day: String,
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
});

const HoldingModel = mongoose.model("Holding", HoldingsSchema);

export default HoldingModel;
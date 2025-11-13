import mongoose from "mongoose";

const HoldingsSchema = new mongoose.Schema({
    // avg: Number,
    
    // day: String,

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
    net: {
        type: Number,
        required: true,
        minLength: 1
    },
    price: {
        type: Number,
        required: true,
        minLength: 1
    },
});

const HoldingModel = model("Holding", HoldingsSchema);

module.exports = { HoldingModel };

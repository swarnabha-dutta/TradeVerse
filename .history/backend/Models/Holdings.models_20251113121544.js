import mongoose from "mongoose";

const HoldingsSchema = new mongoose.Schema({
    // avg: Number,
    // net: String,
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
    price: {
        type: Number,
        required: true,
        minLength: 1
    },
});

const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };

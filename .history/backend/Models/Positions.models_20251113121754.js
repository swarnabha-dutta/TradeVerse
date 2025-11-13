import mongoose from "mongoose";

const PositionsSchema = new mongoose.Schema({
    // product: String,
    // name: String,
    // qty: Number,
    // avg: Number,
    // price: Number,
    // net: String,
    // day: String,
    // isLoss: Boolean,
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

const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };

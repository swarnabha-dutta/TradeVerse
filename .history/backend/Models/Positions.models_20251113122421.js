import mongoose from "mongoose";

const PositionsSchema = new mongoose.Schema({
    // product: String,
    product: {
        type: String,
        required:true,
    }
    
    // avg: Number,
    
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
        min: 1
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    mode: {
        type: String,
        required: true,
    }
});

const PositionModel = mongoose.model("position", PositionsSchema);

module.exports = { PositionModel };

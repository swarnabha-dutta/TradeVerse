import mongoose from "mongoose";

const PositionsSchema = new mongoose.Schema({
    // product: String,
    
    
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

const PositionModel = mongoosemodel("position", PositionsSchema);

module.exports = { PositionModel };

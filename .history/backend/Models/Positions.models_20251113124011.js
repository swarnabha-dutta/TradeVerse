import mongoose from "mongoose";

const PositionsSchema = new mongoose.Schema({
    // product: String,
    product: {
        type: String,
        required:true,
    },
    
    // avg: Number,
    avg: {
        type: Number,
        required: true,
        min: 0
    },
    // net: String,
    net: {
        type: Number,
        required: true,
        min: 0PositionModel
    },
    // day: String,
    day: {
        type:String,
        required: true
    },
    // isLoss: Boolean,
    isLoss: {
        type: Boolean,
        required:true,
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

const PositionModel = mongoose.model("Position", PositionsSchema);


export default ;

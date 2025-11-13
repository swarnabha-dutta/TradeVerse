import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minLength: 3,
        maxLength: 50,
        
    },
    qty{}
    
})
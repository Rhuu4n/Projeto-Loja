import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    price: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Product", productSchema)
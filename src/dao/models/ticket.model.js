import mongoose from "mongoose";
import { stringify } from "uuid";

const ticketsCollection = "tickets";

const ticketsSchema = new mongoose.Schema ({
    code: {
        type: String,
        required: true,
        unique: true
    },

    purchase_datetime: String,

    amount: Number,

    purchaser: {
        type: String,
        required: true
    }
}); 

export const ticketsModel = mongoose.model (ticketsCollection, ticketsSchema);


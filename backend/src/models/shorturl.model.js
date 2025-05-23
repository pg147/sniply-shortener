// Mongoose
import { model, Schema } from "mongoose";

// Schema for Shortening the URL
const shortURLSchema = new Schema({
    fullURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    clicks: {
        type: Number,
        default: 0,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

// Database modeling for 'shorturl' collection
const ShortURL = model("ShortURL", shortURLSchema);

export default ShortURL;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const audioSchema = new Schema({
    name: { type: String, required: true },
    extension: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    deletedAt: {
        type: Date,
    },
});

module.exports = mongoose.model("audios", audioSchema);

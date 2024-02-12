const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true,
        unique : true
    },
    book_author: {
        type: String,
        required: true
    },
    book_price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["enable", "disable"],
        default: "enable"
    }
}, {
    timestamps: true // Add timestamps option
});

// books is a DB collection name

module.exports = mongoose.model("books", bookSchema);

const mongoose = require('mongoose');

const Review = mongoose.model(
    "Review",
    new mongoose.Schema({
        title: {type: String, required: true},
        body: {type: String, required: true},
        stars: {type: String, enum: ["1", "2", "3", "4", "5"] }
    })
)

module.exports = Review;
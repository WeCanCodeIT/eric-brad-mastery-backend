const Review = require('../models/Review');
const gameVariantService = require("../services/gamefamily-service");

module.exports = {
    async save(review) {
        try {
            const newReview = new Review(review);
            await newReview.save();
        } catch (error) {
            return error;
        }
    },

    async findAll() {
        try {
            const reviews = await Review.find();
            return reviews;
        } catch (error) {
            return error;
        }
    },

    async findById(id) {
        try {
            const review = await review.findById(id);
            return review
        } catch (error) {
            return error
        }
    }, 

    async updateReview(reviewId, reviewUpdates={}){
        try {
            const updateResponse = await Review.findByIdAndUpdate(reviewId, reviewUpdates, {new: true});
            return updateResponse;
        } catch (error) {
            return error;
        }
    }

    // Needs DELETE
};
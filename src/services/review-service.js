const Review = require('../models/Review');
const GameVariantModel = require('../models/GameVariant');
// const gameVariantService = require("../services/gamefamily-service");

module.exports = {
    async save(review, gameVariantId) {
        try {
            const newReview = new Review(review);
            const gameVariant = await GameVariantModel.findById(gameVariantId);
            await gameVariant.stars.push(newReview);
            await gameVariant.save();
            await newReview.save();
            return newReview;
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
            const review = await Review.findById(id);
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
const reviewService = require('../services/review-service');

module.exports = {
    async addReview (req, res) {
        try {
            const {title, body, stars, gameVariantId} = req.body;
            
            const newReview = await reviewService.save(
                {title: title, body: body, stars: stars}, 
                gameVariantId
            );
            res.json({review: newReview})

        } catch(error) {
            res.json({error: error});
        }
    },

    async findAllReviews (req, res) {
        try {
            const reviewArray =   await reviewService.findAll();
            res.json({reviewArray});
        } catch(error) {
            res.json({error: error});
        }
    },

    async findReviewById (req, res) {
        try {
            const id = (req.query.id) ? req.query.id : req.params.id;
            const review = await reviewService.findById(id);
            res.json({review})
        } catch (error) {
            res.json({error: error})
        }
    }
}
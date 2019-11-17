const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review-controller');


router.get("/all?", reviewController.findAllReviews);

router.get("/:id", reviewController.findReviewById);

router.post("/", reviewController.addReview);



module.exports = router;
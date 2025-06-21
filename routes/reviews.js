const express = require("express");
const router = express.Router({mergeParams : true});
const asyncWrap = require("../utils/asyncWrap.js");
const Listing = require("../models/listingModel.js");
const Review = require("../models/reviewModel.js");
const {reviewSchema} = require("../schema.js"); 
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviewsController.js");

// GET route for new review form (this will handle the redirect after login)
router.get("/new", isLoggedIn, asyncWrap(reviewController.newReviewGet));

// POST route for creating review
router.post("/", isLoggedIn, validateReview, asyncWrap(reviewController.newReviewPost));

//delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, asyncWrap(reviewController.destroyReview));

module.exports = router;

const express = require("express");
const router = express.Router({mergeParams : true});
const asyncWrap = require("../utils/asyncWrap.js");
const Listing = require("../models/listingModel.js");
const Review = require("../models/reviewModel.js");
const {reviewSchema} = require("../schema.js"); 
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

// GET route for new review form (this will handle the redirect after login)
router.get("/new", isLoggedIn, asyncWrap(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews").populate("owner");
    res.render("listings/show.ejs", { listing, showReviewForm: true });
}));

// POST route for creating review
router.post("/", isLoggedIn, validateReview, asyncWrap(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let { rating, comment } = req.body;
    let newReview = new Review({
        rating,
        comment
    });

    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("reviewSuccess", "New review added");
    res.redirect(`/listings/${id}`);
}));

//delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, asyncWrap(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("deleteReview", "Review removed");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;

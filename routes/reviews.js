const express = require("express");
const router = express.Router({mergeParams : true});
const asyncWrap = require("../utils/asyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {reviewSchema} = require("../schema.js"); //for Server-side validation using Joi

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
}

//review route
router.post("/", validateReview, asyncWrap(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let { rating, comment } = req.body;
    let newReview = new Review({
        rating,
        comment
    });

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("reviewSuccess", "New review added");
    res.redirect(`/listings/${id}`);
}));

//delete review route
router.delete("/:reviewId", asyncWrap(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("deleteReview", "Review removed");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;

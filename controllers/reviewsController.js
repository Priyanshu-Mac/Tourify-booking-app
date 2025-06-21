const Listing = require("../models/listingModel");
const Review = require("../models/reviewModel");

module.exports.newReviewGet = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews").populate("owner");
    res.render("listings/show.ejs", { listing, showReviewForm: true });
};

module.exports.newReviewPost = async (req, res) => {
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
};

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("deleteReview", "Review removed");
    res.redirect(`/listings/${id}`);
};
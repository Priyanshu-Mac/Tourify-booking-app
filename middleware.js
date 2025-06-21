const Listing = require("./models/listingModel.js");
const Review = require("./models/reviewModel.js")
const { listingSchema, reviewSchema } = require("./schema"); //for Server-side validation using Joi
const ExpressError = require("./utils/ExpressError");

const isLoggedIn = (req, res, next) => {
    req.session.redirectUrl = req.originalUrl;
    if(!req.isAuthenticated()){
        req.flash("authenticationError", "You must be logged in first");
        return res.redirect("/login");
    }
    next();
};
const saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

const isOwner = async(req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("notOwner", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

const isReviewAuthor = async(req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!(review.author.equals(res.locals.currUser._id))){
        req.flash("notAuthor", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
};

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
};
module.exports = {isLoggedIn, saveRedirectUrl, isOwner, isReviewAuthor, validateListing, validateReview};
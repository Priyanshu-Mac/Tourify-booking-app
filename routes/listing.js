const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listingModel.js");
const {isLoggedIn, isOwner, validateListing, validateReview} = require("../middleware.js");

//index route
router.get("/", asyncWrap(async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings })
}));

//new route
router.get("/new", isLoggedIn ,(req, res) => {
    res.render("./listings/new.ejs");
});

//create route
router.post("/", isLoggedIn, validateListing, asyncWrap(async (req, res) => {
    let { title, description, image, price, country, location } = req.body;
    let newListing = new Listing({
        title,
        description,
        image,
        price,
        country,
        location
    });
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("newListing", "New Listing Created");
    res.redirect("/listings");
}));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, asyncWrap(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("./listings/edit.ejs", { listing });
}));

//update route
router.put("/:id", isLoggedIn, isOwner, validateListing, asyncWrap(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, req.body);
    if (!listing) {
    req.flash("notExist", "Cannot update. Listing not found.");
        return res.redirect("/listings");
    }
    req.flash("edited", "Listing updated");
    res.redirect(`/listings/${id}`);
}));

//delete route
router.delete("/:id", isLoggedIn, isOwner, asyncWrap(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id); //this will also trigger Mongoose middleware with findOneAndDelete function which will delete the review also
    if(!deletedListing){
        req.flash("notExist", "Listing not found. Nothing was deleted");
        return res.redirect("/listings");
    }
    req.flash("removed", "Listing removed");
    res.redirect("/listings");
}));

//show route
router.get("/:id", asyncWrap(async(req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
        .populate({
            path : "reviews", 
            populate : {
                path : "author",  //With each review we are bringing their author too
            }
        })
        .populate("owner");
    if(!listing){
        req.flash("notExist", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing })
}));

module.exports = router;
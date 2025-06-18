const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {listingSchema} = require("../schema.js"); //for Server-side validation using Joi
const {reviewSchema} = require("../schema.js"); //for Server-side validation using Joi

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
}

//index route
router.get("/", asyncWrap(async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings })
}));

//new route
router.get("/new", (req, res) => {
    res.render("./listings/new.ejs");
});

//create route
router.post("/", validateListing, asyncWrap(async (req, res) => {
    let { title, description, image, price, country, location } = req.body;
    let newListing = new Listing({
        title,
        description,
        image,
        price,
        country,
        location
    });
    await newListing.save();
    req.flash("newListing", "New Listing Created");
    res.redirect("/listings");
}));

//edit route
router.get("/:id/edit", asyncWrap(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("./listings/edit.ejs", { listing });
}));

//update route
router.put("/:id", validateListing, asyncWrap(async (req, res) => {
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
router.delete("/:id", asyncWrap(async (req, res) => {
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
    let listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("notExist", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing })
}));

module.exports = router;
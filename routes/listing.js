const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listingModel.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listingsController.js");

//new route
router.get("/new", isLoggedIn , listingController.renderNew);

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, asyncWrap(listingController.editListing));

router.route("/")
    //index route
    .get(asyncWrap(listingController.index))
    //create route
    .post(isLoggedIn, validateListing, asyncWrap(listingController.createListing));

router.route("/:id")
    //update route
    .put(isLoggedIn, isOwner, validateListing, asyncWrap(listingController.updateListing))
    //delete route
    .delete(isLoggedIn, isOwner, asyncWrap(listingController.destroyListing))
    //show route
    .get(asyncWrap(listingController.showListing));

// router.route() --> helps us group together those routes 
// which have same path and different method
// so that we don't have to define the same path again and again.

module.exports = router;
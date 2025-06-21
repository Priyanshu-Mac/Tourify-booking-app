const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listingModel.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listingsController.js");

//index route
router.get("/", asyncWrap(listingController.index));

//new route
router.get("/new", isLoggedIn , listingController.renderNew);

//create route
router.post("/", isLoggedIn, validateListing, asyncWrap(listingController.createListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, asyncWrap(listingController.editListing));

//update route
router.put("/:id", isLoggedIn, isOwner, validateListing, asyncWrap(listingController.updateListing));

//delete route
router.delete("/:id", isLoggedIn, isOwner, asyncWrap(listingController.destroyListing));

//show route
router.get("/:id", asyncWrap(listingController.showListing));

module.exports = router;
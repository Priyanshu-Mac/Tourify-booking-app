const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap.js");
const Listing = require("../models/listingModel.js");
const filterController = require("../controllers/filterController.js");

router.get("/listings/filter", filterController.filter);
router.get("/listings/search", filterController.search);

module.exports = router;
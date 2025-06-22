const Listing = require("../models/listingModel");

module.exports.filter = async (req, res) => {
    let { category } = req.query;
    let filter = {};
    if(category){
        filter.categories = { $in : [category]};
    }
    let listings = await Listing.find(filter);
    res.render("./listings/filter.ejs", {listings, category});
};

module.exports.search = async (req, res) => {
    let { country } = req.query;
    let listings = await Listing.find({country});
    if(listings.length > 0){
        return res.render("./listings/search.ejs", {listings, country});
    }
    else{
        req.flash("noCountry", "No Listing found for this country");
        res.redirect("/listings");
    }
};
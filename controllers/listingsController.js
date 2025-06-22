const Listing = require("../models/listingModel");
const ExpressError = require("../utils/ExpressError");

module.exports.index = async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings })
};

module.exports.renderNew = (req, res) => {
    res.render("./listings/new.ejs");
};

module.exports.createListing = async (req, res) => {
    let path = req.file.path;
    let filename = req.file.filename;
    let { title, description, price, country, location, categories } = req.body;
    let newListing = new Listing({
        title,
        description,
        price,
        country,
        location,
        categories
    });
    newListing.owner = req.user._id;
    newListing.image = { path, filename };
    await newListing.save();
    req.flash("newListing", "New Listing Created");
    res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }

    const imagePath = listing.image.path;
    let originalImagePath;
    
    if (imagePath.includes('res.cloudinary.com')) {
        // Cloudinary transformation
        const parts = imagePath.split('/upload/');
        if (parts.length === 2) {
            originalImagePath = parts[0] + '/upload/w_150/' + parts[1];
        } else {
            originalImagePath = imagePath;
        }
    } else if (imagePath.includes('unsplash.com')) {
        // Unsplash URL parameters
        originalImagePath = imagePath + '?w=150&q=60&fm=webp&fit=crop';
    } else {
        // Other external URLs - use original
        originalImagePath = imagePath;
    }

    res.render("./listings/edit.ejs", { listing, originalImagePath });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, req.body);

    if(typeof req.file !== "undefined"){
        let path = req.file.path;
        let filename = req.file.filename;
        listing.image = {path, filename};
        await listing.save();
    }
    
    if (!listing) {
    req.flash("notExist", "Cannot update. Listing not found.");
        return res.redirect("/listings");
    }
    req.flash("edited", "Listing updated");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id); //this will also trigger Mongoose middleware with findOneAndDelete function which will delete the review also
    if(!deletedListing){
        req.flash("notExist", "Listing not found. Nothing was deleted");
        return res.redirect("/listings");
    }
    req.flash("removed", "Listing removed");
    res.redirect("/listings");
};

module.exports.showListing = async(req, res) => {
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
};
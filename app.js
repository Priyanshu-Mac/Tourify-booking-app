const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const asyncWrap = require("./utils/asyncWrap.js");
const ExpressError = require("./utils/ExpressError.js");

const {listingSchema} = require("./schema.js"); //for Server-side validation using Joi
const {reviewSchema} = require("./schema.js"); //for Server-side validation using Joi

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection to mongoDB successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tourify');
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
}
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

//root route
app.get("/", (req, res) => {
    res.send("root route");
});

//index route
app.get("/listings", asyncWrap(async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings })
}));

//new route
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

//create route
app.post("/listings", validateListing, asyncWrap(async (req, res) => {
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
    res.redirect("/listings");
}));

//edit route
app.get("/listings/:id/edit", asyncWrap(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
}));

//update route
app.put("/listings/:id", validateListing, asyncWrap(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body);
    res.redirect(`/listings/${id}`);
}));

//delete route
app.delete("/listings/:id", asyncWrap(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id); //this will also trigger Mongoose middleware with findOneAndDelete function which will delete the review also
    res.redirect("/listings");
}));

//show route
app.get("/listings/:id", asyncWrap(async(req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    res.render("./listings/show.ejs", { listing })
}));

//review route
app.post("/listings/:id/reviews", validateReview, asyncWrap(async (req, res) => {
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
    console.log("new review added");
    res.redirect(`/listings/${id}`);
}));

//delete review route
app.delete("/listings/:id/reviews/:reviewId", asyncWrap(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));


//when no above route matches with what user searches ->
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})

//error handling
app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).render("./listings/error.ejs", { err });
    // res.status(statusCode).send(message);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
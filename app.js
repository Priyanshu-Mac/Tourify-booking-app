const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

//Express Router for Listing routes
const listingRouter = require("./routes/listing.js");

//Express Router for Review routes
const reviewRouter = require("./routes/reviews.js");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
//Express Router for Listing routes
app.use("/listings", listingRouter);

//Express Router for Review routes
app.use("/listings", reviewRouter);

main()
    .then(() => {
        console.log("connection to mongoDB successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tourify');
}

//root route
app.get("/", (req, res) => {
    res.send("root route");
});

//when no above route matches with what user searches ->
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

//error handling
app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).render("./listings/error.ejs", { err });
    // res.status(statusCode).send(message);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
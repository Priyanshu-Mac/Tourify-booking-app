const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/userModel.js");

//Requiring Express Router for Listing routes
const listingRouter = require("./routes/listing.js");

//Requiring Express Router for Review routes
const reviewRouter = require("./routes/reviews.js");

//Requiring Express Router for User routes
const userRouter = require("./routes/user.js");


app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

const sessionOptions = {
    secret : "mysupersecretcode",
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000, //in ms
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    },
};

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

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Flashing message
app.use((req, res, next) => {
    res.locals.newListing = req.flash("newListing");
    res.locals.removed = req.flash("removed");
    res.locals.edited = req.flash("edited");
    res.locals.reviewSuccess = req.flash("reviewSuccess");
    res.locals.deleteReview = req.flash("deleteReview");
    res.locals.notExist = req.flash("notExist");
    res.locals.signupSuccess = req.flash("signupSuccess");
    res.locals.signupError = req.flash("signupError");
    res.locals.loginSuccess = req.flash("loginSuccess")
    //Passport stores it's error here for Login error-->
    res.locals.error = req.flash("error");
    next();
});


//Using Express Router for Listing routes
app.use("/listings", listingRouter);

//Using Express Router for Review routes
app.use("/listings/:id/reviews", reviewRouter);

//Using Express Router for User routes
app.use("/", userRouter);

//when no above route matches with what user searches ->
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

//error handling
app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).render("./listings/error.ejs", { err });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
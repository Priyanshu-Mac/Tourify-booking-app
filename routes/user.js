const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");
const asyncWrap = require("../utils/asyncWrap");
const passport = require("passport");

//signup GET route
router.get("/signup", (req, res) => {
    res.render("./users/signup.ejs");
});

//signup POST route
router.post("/signup", asyncWrap (async (req, res) => {
    try{
        let { email, username, password } = req.body;
        const newUser = new User({email, username});

        const registeredUser = await User.register(newUser, password);
        
        req.flash("signupSuccess", "Welcome to Tourify");
        res.redirect("/listings");
    }
    catch(err){
        req.flash("signupError", err.message);
        res.redirect("/signup");
    }
}));

router.get("/login", (req, res) => {
    res.render("./users/login.ejs");
});

router.post("/login", passport.authenticate("local", {failureRedirect : "/login", failureFlash : true}), async (req, res) => {
    req.flash("loginSuccess", "Welcome back to Tourify");
    res.redirect("/listings");

})

module.exports = router;
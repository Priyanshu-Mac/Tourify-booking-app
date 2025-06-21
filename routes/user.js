const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");
const asyncWrap = require("../utils/asyncWrap");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

//signup route
router.get("/signup", (req, res) => {
    res.render("./users/signup.ejs");
});
router.post("/signup", asyncWrap (async (req, res) => {
    try{
        let { email, username, password } = req.body;
        const newUser = new User({email, username});

        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("signupSuccess", "Welcome to Tourify");
            res.redirect("/listings");
        })
        
    }
    catch(err){
        req.flash("signupError", err.message);
        res.redirect("/signup");
    }
}));

//login route
router.get("/login", (req, res) => {
    res.render("./users/login.ejs");
});

router.post("/login", saveRedirectUrl, passport.authenticate("local", {failureRedirect : "/login", failureFlash : true}), async (req, res) => {
    req.flash("loginSuccess", "Welcome back to Tourify");
    let redirectUrl = res.locals.redirectUrl;
    if(redirectUrl){
        return res.redirect(redirectUrl);
    }
    else{
        return res.redirect("/listings");
    }
});

//logout user
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("logoutSuccess", "You are logged out. Tap on `Log in` option to Login again");
        res.redirect("/listings");
    })
})

module.exports = router;
const User = require("../models/userModel");

module.exports.signupGET = (req, res) => {
    res.render("./users/signup.ejs");
};

module.exports.signupPOST = async (req, res) => {
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
};

module.exports.loginGET = (req, res) => {
    res.render("./users/login.ejs");
};

module.exports.loginPOST = async (req, res) => {
    req.flash("loginSuccess", "Welcome back to Tourify");
    let redirectUrl = res.locals.redirectUrl;
    if(redirectUrl){
        return res.redirect(redirectUrl);
    }
    else{
        return res.redirect("/listings");
    }
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("logoutSuccess", "You are logged out. Tap on `Log in` option to Login again");
        res.redirect("/listings");
    })
}
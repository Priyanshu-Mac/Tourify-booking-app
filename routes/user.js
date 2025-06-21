const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");
const asyncWrap = require("../utils/asyncWrap");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usersController = require("../controllers/usersController.js");

//signup route
router.get("/signup", (usersController.signupGET));
router.post("/signup", asyncWrap (usersController.signupPOST));

//login route
router.get("/login", usersController.loginGET);

router.post("/login", saveRedirectUrl, 
    passport.authenticate("local", {failureRedirect : "/login", failureFlash : true}), 
    usersController.loginPOST);

//logout user
router.get("/logout", usersController.logout);

module.exports = router;
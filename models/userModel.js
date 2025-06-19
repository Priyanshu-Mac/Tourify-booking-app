const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// Passport-Local Mongoose will add a username, 
// hash and salt field to store the username, 
// the hashed password and the salt value.
const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true
    }
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

module.exports = User;
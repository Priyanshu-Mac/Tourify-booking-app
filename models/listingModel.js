const mongoose = require("mongoose");
const Review = require("./reviewModel.js")

const listingSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        path : String,
        filename : String,
    },
    price : {
        type : Number,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    reviews : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    categories : {
        type : [String],
        enum : ["Trending", "Stays", "Mountains", "Nature Escapes", "With Pool", "Beaches", "Urban", "Snow"],
    }
    
});

//Mongoose middleware for : when we delete a listing we also want the reviews of that listing to be deleted
listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
})

const Listing = new mongoose.model("Listing", listingSchema);

module.exports = Listing;
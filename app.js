const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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

//root route
app.get("/", (req, res) => {
    res.send("root route");
});

//index route
app.get("/listings", async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings })
});

//new route
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

//create route
app.post("/listings", async (req, res) => {
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
});

//edit route
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
});

//update route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body);
    res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})

//show route
app.get("/listings/:id", async(req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("./listings/show.ejs", { listing })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
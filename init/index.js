const mongoose = require("mongoose");
const allData = require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then(() => {
        console.log("connection to mongoDB successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tourify');
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(allData.data);
    console.log("data was initialized");
}

initDB();

const mongoose = require("mongoose");
module.exports = function () {
    mongoose
        .connect("mongodb://localhost/shopping")
        .then(() => console.log("Connected to MongoDB..."))
        .catch(() => console.error("Could not connect to MongoDB..."));

}
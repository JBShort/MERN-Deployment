const mongoose = require("mongoose");

mongoose
    // CHANGE THIS FOR EXAM
    .connect("mongodb://localhost/pet_shelter", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Established a connection to the database UwU"))
    .catch((err) =>
    console.log("Something went wrong when connecting to the database OwO", err)
    );
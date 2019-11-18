const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://GEP:poker123@cluster0-brqvw.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the DB!");
});
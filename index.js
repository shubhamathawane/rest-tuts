const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postsRoute = require("./Routes/Post");
app.use(bodyParser.json());

// Middleware : is a function executes when specific route is been hit
// app.use("/post", () => {
// console.log("This i?s a middleware running")
// })

// routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Import route
app.use("/posts", postsRoute);

// connecting to the mongoose database

const mongoUri = "mongodb://localhost/rest-tut";
mongoose.connect(mongoUri, { config: { autoIndex: true } });
console.log("Database Created and Connected !");

// How to we start listening to the server

app.listen(3001, (req, res) => {
  console.log("Server listening on port 3001");
});

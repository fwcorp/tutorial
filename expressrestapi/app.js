const express = require("express");
const app = express();
const mongoose = require("mongoose");

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

// connect to db
mongoose.connect(
  "mongodb+srv://okjinhyuk:LEE.sook!93@cluster0-wgipe.mongodb.net/Cluster0?retryWrites=true&w=majority"
);

// start server
app.listen(3000);

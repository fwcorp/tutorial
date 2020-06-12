const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config');

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION, ()=>{
	console.log('connected to db');
  });

// start server
app.listen(3000);

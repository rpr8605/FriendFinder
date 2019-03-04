var path = require("path");
var express = require("express");
var htmlroutes = express.Router();


htmlroutes.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlroutes.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});



htmlroutes.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});



module.exports = htmlroutes;
"use strict";


const express = require("express");
const path = require("path");

const homePageRoute = express.Router();

homePageRoute.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "../../", "index.html"));
});

homePageRoute.get("/home", (req, res) =>{
    res.sendFile(path.join(__dirname, "../../", "index.html"));
});

module.exports = homePageRoute;
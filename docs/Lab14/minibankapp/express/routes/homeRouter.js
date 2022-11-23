"use strict";

const express = require("express");
const path = require("path");
const homePageRouter = express.Router();

homePageRouter.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"../../", "index.html"));
} );

homePageRouter.get("/home", (req, res) =>{
    res.sendFile(path.join(__dirname,"../../", "index.html"));
} );

module.exports = homePageRouter;
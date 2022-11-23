"use strict";

const express = require("express");
const path = require("path");
const bookListPageRouter = express.Router();

bookListPageRouter.get("/bookList",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../views/", "books.html"));
});

module.exports = bookListPageRouter;
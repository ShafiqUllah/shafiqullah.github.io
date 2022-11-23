"use strict";
// import("");
// import { Book } from "../public/model/bookDAO";


const express = require("express");
const addNewBookRoute = express.Router();
const path = require("path");
const ajax = require("ajax");
const axios = require('axios');

addNewBookRoute.get("/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/", "addBook.html"))
});


addNewBookRoute.post("/saveBook", (req, res) => {
    console.log("Save book in DB....");
    postData(req.body.isbn, req.body.bookTitle, req.body.overDueFee, req.body.publisher, req.body.dateOfPublish);
    res.redirect("new");
});

function postData(isbn,bookTitle,overDueFee,publisher,dateOfPublish){
    axios.post('https://elibraryrestapi.herokuapp.com/elibrary/api/book/add', {
    // bookId: 1234,
    isbn: isbn,
    title : bookTitle,
    overdueFee : overDueFee,
    publisher : publisher,
    datePublished : dateOfPublish
})
    .then(function (response) {
        console.log("Save Ok......................................");
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}



module.exports = addNewBookRoute;
"use strict";

console.log("Starting Server......");

const PORT_NUMBER = 3000;

const express = require("express");
const path = require("path");
const app = express();

//Setting Router
const homePageRouter = require("./routes/homePageRoute");
const bookListPageRouter = require("./routes/bookListPageRoute");
const addNewBookRoute = require("./routes/addNewBookRoute");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
app.use(express.json());


// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "./public")));
// app.set("views", path.join(__dirname, "../../views/"));

// Define middlewares
app.set("view engine", "pug");


//Route to Home Page
app.use("",homePageRouter );

//Route to BookList Page
app.use("/books", bookListPageRouter);

//Route to New Book Page
app.use("/addBook", addNewBookRoute);


app.listen(PORT_NUMBER, ()=>{
    console.log("Server Started. Listening to Port "+PORT_NUMBER);
})

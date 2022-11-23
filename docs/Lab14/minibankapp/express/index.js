"use strict";

console.log("Server Starting......");

const express = require("express");
const path = require("path");
const PORT_NUMBER = 7000;

const app = express();

// Routers
const homePageRouter = require("./routes/homeRouter");
const accoutPageRouter = require("./routes/accountRouter");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
app.use(express.json());


// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "./public")));
//app.use("views", express.static(path.join("/views")));

// Define middlewares
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");


app.use("", homePageRouter);

app.use("/views/account", accoutPageRouter);

app.listen(PORT_NUMBER, ()=>{
    console.log("Server started . Listening to port 7000  ");
});


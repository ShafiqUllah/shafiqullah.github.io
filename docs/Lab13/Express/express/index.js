"use strict";

console.log("server starting...");
const express = require("express");

const PORT_NUMBER = 5000;

// Routers 
const homePageRoute = require("../express/routes/homePageRoute");
const operationPageRoute = require("../express/routes/operationPageRoute");

const app = express();

// define middlewares
//app.set("views", path.join(__dirname, "../../")); // for some reason can't set this view path
app.set("view engine", "pug");


// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
app.use(express.json());



// Route to homepage
app.use("", homePageRoute );

// Route to Operation page
app.use("/operation", operationPageRoute);


app.listen(PORT_NUMBER, ()=>{   
    console.log("server stared. Listening to port 5000.....");
});



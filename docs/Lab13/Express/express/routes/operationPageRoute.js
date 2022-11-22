"use strict";

const express = require("express");
const path = require("path");

const operationPageRoute = express.Router();

operationPageRoute.post("/doOperation", (req, res) =>{
    console.log("sending to operation result page");

    //first=1&second=2&operationType=addition 
    const firstNum = req.body.firstNum;
    const secondNum = req.body.secondNum;
    const operationType = req.body.operationType;
    console.log(firstNum +" "+ secondNum +" "+operationType);
    const result = doCalculation(firstNum, secondNum, operationType);
   // res.sendFile(path.join(__dirname,"../../views/operationPage/", "operationPage.html"));
    res.render(path.join(__dirname, "../../views/operationPage/operationPage") ,
     { 
        operationType : operationType,
        result : result
     });
    
});

function doCalculation(firstNum, secondNum,operationType){
    switch(operationType){ 
        case "addition":
            return parseInt( firstNum) + parseInt(secondNum);
        break;
        case "substruction":
            return parseInt( firstNum) - parseInt(secondNum);
        break;

        case "divition":
            return parseInt( firstNum) / parseInt(secondNum);
        break;

        case "multiplication":
            return parseInt( firstNum) * parseInt(secondNum);
        break;

        default :
        return 0;

    }
}

module.exports = operationPageRoute;

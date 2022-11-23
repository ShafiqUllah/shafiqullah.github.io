"use strict";

const express = require("express");
const path = require("path");
const accoutPageRouter = express.Router();

const accountController = require("../db/DAO/accountsDAO");
const Account = require("../model/account");

accoutPageRouter.get("/accounts", (req, res)=>{
    //make it dinamic, pass this data to html page using PUG
    const accounts = accountController.getAllAccount();

    // console.log(accounts.length);
    // console.log(accounts);

    res.locals = {accounts: accounts};
    res.render("account");
   

    //res.sendFile(path.join(__dirname, "../../views/", "account.html"));
});

accoutPageRouter.post("/addAccount", (req, res)=>{
    //res.sendFile(path.join(__dirname, "../../views/", "account.html"));

    const newAccount = new Account(req.body.txtAccountNo, 
        req.body.txtCustomerName, req.body.ddlAccountType );
    
    accountController.addAccount(newAccount);
    res.redirect(303, "accounts");
    //res.redirect("..");
    //res.redirect("back");
});


module.exports = accoutPageRouter;

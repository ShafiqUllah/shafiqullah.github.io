"use strict";

const Account = require("../../model/account");

const accountController = (function(){
    const accounts = [];
    function getAllAccount(){
        
        // accounts.push(new Account("01-980-0003", "MD Shafiq Ullah", "Loan"));
        // accounts.push(new Account("01-980-0004", "MD Fahim Uddin", "Checking"));
        return accounts;
    }

    function addAccount(newAccount){
        // const accounts = getAllAccount();
        accounts.push(newAccount);
        //return accounts;
    }

    return {
        getAllAccount : getAllAccount ,
        addAccount : addAccount
    }
})();

module.exports = accountController;
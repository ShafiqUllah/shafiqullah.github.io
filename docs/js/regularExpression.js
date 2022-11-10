"use strict";

function submitButtonClick(){
    // console.log("Shafiq");
    const emailAddressid =  document.getElementById("emailAddressid");
    const passwordid = document.getElementById("passwordid");

     console.log("Email address field value is "+emailAddressid.value);
     console.log("Password field value is "+passwordid.value);
}

const submitButton = document.getElementById("submitButton");
submitButton.onclick = submitButtonClick;


"use strict";

function submitButtonClick(){
    

    const productNum = document.getElementById("productNum");
    const quantityinStock = document.getElementById("quantityinStock");
    const name = document.getElementById("name");
    const supplier = document.getElementById("supplier");
    const unitPrice = document.getElementById("unitPrice");
    const date = document.getElementById("date");

    console.log(productNum.value);
    console.log(quantityinStock.value);
    console.log(name.value);
    console.log(supplier.value);
    console.log(unitPrice.value);
    console.log(date.value);

    let message = "Product Number is "+productNum.value +"\n"+
    "Product name is "+name.value +"\n"+
    "Product Unit price is "+unitPrice.value +"\n"+
    "Product quantity is "+quantityinStock.value +"\n"+
    "Product Supplier is "+supplier.value +"\n"+
    "Product Date is "+date.value ;

    alert( message);
}

const submitButton = document.getElementById("addProductID");
submitButton.onclick = submitButtonClick;
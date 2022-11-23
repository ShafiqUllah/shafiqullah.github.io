"use strict";

//const book = require("../../model/bookDAO");
// import {Book} from "../model/bookDAO.js";
import { Book } from "../model/bookDAO.js";

(function () {
    console.log("Fetching book list data .....");
    const displayBooks = (booklist) => {
        console.log(booklist);
        const bookList = document.querySelector("#tbodyBookList");
        let strListItem = "";
        booklist.forEach((book,index) => {
            strListItem += `
             <tr>
                 <td>${index+1}</td>
                 <td>${book.isbn}</td>
                 <td>${book.bookTitle}</td>
                 <td>${book.overDueFee}</td>
                 <td>${book.publiser}</td>
                 <td>${book.dateOfPublish}</td>
             </tr>
            <tr>
            `;
        });
        bookList.innerHTML = strListItem;
    };

    const displayError = (error) => {
        console.log(error);
    };

    const makeBookDAOList = (jsonData) => {
        const bookList = [];
        jsonData.forEach((book) => {
            const isbn = book.isbn;
            const bookTitle = book.title;
            const overDueFee = book.overdueFee;
            const publiser = book.publisher;
            const dateOfPublish = book.datePublished;
            // console.log("ISBN Num is "+isbn);
            bookList.push(new Book(isbn, bookTitle, overDueFee, publiser, dateOfPublish));
        });

        return bookList;
    };

    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        .then(response => response.json())
        .then(jsonData => makeBookDAOList(jsonData))
        .then(booklist => displayBooks(booklist))
        .catch(error => displayError(error));

})();

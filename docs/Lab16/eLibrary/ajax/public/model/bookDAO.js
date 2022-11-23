"use strict";

// const bookDAO = function (isbn, bookTitle, overDueFee, publiser, dateOfPublish) {
//     this.isbn = isbn;
//     this.bookTitle = bookTitle;
//     this.overDueFee = overDueFee;
//     this.publiser = publiser;
//     this.dateOfPublish = dateOfPublish;
// }

// module.exports = bookDAO;


class Book {
    constructor(isbn, bookTitle, overDueFee, publiser, dateOfPublish) {
        this.isbn = isbn;
        this.bookTitle = bookTitle;
        this.overDueFee = overDueFee;
        this.publiser = publiser;
        this.dateOfPublish = dateOfPublish;
    }
}

export {Book}

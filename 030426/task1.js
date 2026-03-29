

function Book(id, title, author, year, isAvailable) {

    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
}

function Library(name, books) {

    this.name = name;
    this.books = [];
}

Library.prototype.addBook = function (book) {

    if (!book.id) {

        throw new Error("book hevent not");
    }

    if (!book.title) {

        throw new Error("do not add a book without title");
    }

    if (!book.author) {

        throw new Error("do not add a book without author");
    }

    if (typeof book.year !== "number") {

        throw new Error("Year must be number");
    }



    let id = book.id;
    let books = this.books;
    let unique = books.some(e => e.id === id);
    if (unique) {

        throw new Error("Id must be unique");
    }


    this.books.push(book);
}

Library.prototype.findBookByTitle = function (title) {

    if (!title) {

        throw new Error("Book not found");
    }

    return this.books.find(b => b.title === title);


}

Library.prototype.findBookByAuthor = function (author) {

    if (!author) {

        throw new Error("Author dont exists");
    }

    let newarr = [];
    for (let i = 0; i < this.books.length; ++i) {

        if (this.books[i].author === author) {
            newarr.push(this.books[i]);
        }
    }

    return newarr;
}

Library.prototype.borrowBook = function (id) {

    for (let i = 0; i < this.books.length; ++i) {

        if (this.books[i].id === id) {

            if (this.books[i].isAvailable) {

                this.books[i].isAvailable = false;

                return;

            }

            if (!this.books[i].isAvailable) {

                throw new Error("is already taken");
            }

        }

    }

    throw new Error("The book dont exsist");

}

Library.prototype.returnBook = function (id) {

    for (let i = 0; i < this.books.length; i++) {

        if (this.books[i].id === id) {

            if (this.books[i].isAvailable) {
                throw new Error("Book is already available");
            }

            this.books[i].isAvailable = true;
            return;
        }
    }

    throw new Error("Book does not exist");
}

Library.prototype.listAvailableBooks = function () {

    let Book = [];
    for (let i = 0; i < this.books.length; i++) {

        if (this.books[i].isAvailable) {

            Book.push(this.books[i]);
        }
    }

    return Book;
}

Library.prototype.listBorrowedBooks = function () {
    let Book = [];
    for (let i = 0; i < this.books.length; i++) {

        if (!this.books[i].isAvailable) {

            Book.push(this.books[i]);
        }
    }

    return Book;
}

Library.prototype.showLibraryInfo = function () {

    let total = this.books.length;
    let available = 0;
    let borrowed = 0;

    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].isAvailable) {
            available++;
        } else {
            borrowed++;
        }
    }

    console.log(`Library: ${this.name}`);
    console.log(`Total books: ${total}`);
    console.log(`Available books: ${available}`);
    console.log(`Borrowed books: ${borrowed}`);
}



const book1 = new Book(500, "Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book(501, "1984", "George Orwell", 1949);
const book3 = new Book(502, "Animal Farm", "George Orwell", 1945);
const book4 = new Book(503, "The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library("Gradaran");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== Library ===");
library.showLibraryInfo();

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBookByAuthor("George Orwell"));

console.log("=== Borrow book ===");
library.borrowBook(501);
console.log(library.findBookByTitle("1984"));

console.log("=== Return book ===");
library.returnBook(501);
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.listAvailableBooks());

console.log("=== Borrowed books ===");
library.borrowBook(503)
console.log(library.listBorrowedBooks()); // 1






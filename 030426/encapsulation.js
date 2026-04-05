class Book {
  #title;
  #author;
  #year;
  #isAvailable = true;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value !== "string" || value === "") {
      return "title cant be empty string";
    }

    this.#title = value;
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (
      typeof value !== "string" ||
      value[0] !== value[0].toUpperCase() ||
      value === ""
    ) {
      return "The author should start with a capital letter and must be non empty string.";
    }

    this.#author = value;
  }

  get year() {
    return this.#year;
  }

  set year(value) {
    if (value < 0 || typeof value !== "number") {
      return "The year should be a number and positive.";
    }

    this.#year = value;
  }

  get isAvailable() {
    return this.#isAvailable;
  }

  borrowBook() {
    if (this.#isAvailable) {
      this.#isAvailable = false;
      return;
    }

    return "not available";
  }

  returnBook() {
    if (!this.#isAvailable) {
      this.#isAvailable = true;
      return;
    }
    return "The book is already available";
  }

  matchesTitle(word) {
    return this.#title.includes(word);
  }

  getInfo() {
    return ` Title: ${this.#title},
        Author: ${this.#author},
        Year: ${this.#year},
        Available: ${this.#isAvailable}`;
  }
}

class Reader {
  #name;
  #borrowedBooks;

  constructor(name) {
    this.name = name;
    this.#borrowedBooks = [];
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (value === "" || value[0] !== value[0].toUpperCase()) {
      return "The name is misspelled.";
    }
    this.#name = value;
  }

  get borrowedBooks() {
    return this.#borrowedBooks;
  }

  get borrowedBooksCount() {
    return this.#borrowedBooks.length;
  }

  takeBook(book) {
    for (let i = 0; i < this.#borrowedBooks.length; ++i) {
      if (this.#borrowedBooks[i] === book) {
        return "Book already borrowed";
      }
    }
    if (!book.isAvailable) {
      return "Book is not available";
    }

    book.borrowBook();
    this.#borrowedBooks.push(book);
  }

  giveBackBook(book) {
    const exists = this.#borrowedBooks.includes(book);

    if (!exists) {
      return "Book not found";
    }

    book.returnBook();

    this.#borrowedBooks = this.#borrowedBooks.filter((a) => a !== book);
  }

  hasBook(book) {
    return this.#borrowedBooks.includes(book);
  }

  showBorrowedBooks() {
    // return this.#borrowedBooks.map((book) => book.title);

    let str = [];
    for (let i = 0; i < this.#borrowedBooks.length; ++i) {
      str.push(this.#borrowedBooks[i].title);
    }
    return str;
  }

  getInfo() {
    let count = this.#borrowedBooks.length;

    return `${this.name} has ${count} borrowed ${
      count === 1 ? "book" : "books"
    }`;
  }
}

class Library {
  #name;
  #books;
  #readers;

  constructor(name) {
    this.name = name;
    this.#books = [];
    this.#readers = [];
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (value === "" || value[0] !== value[0].toUpperCase()) {
      return "The name is misspelled.";
    }
    this.#name = value;
  }

  get books() {
    return this.#books;
  }

  get readers() {
    return this.#readers;
  }

  addBook(book) {
    this.books.push(book);
  }

  registerReader(reader) {
    this.readers.push(reader);
  }

  findBookByTitle(title) {
    // const book = this.#books.find((b) => b.title === title) || null;
    // return book ? book : null;

    for (let i = 0; i < this.#books.length; ++i) {
      if (this.#books[i].title === title) {
        return this.#books[i];
      }
    }

    return null;
  }

  findBooksByAuthor(authorName) {
    //     const books = this.#books.filter((b) => b.author === authorName);
    //     return books.map((b) => b.getInfo());

    let authorBooks = [];
    for (let i = 0; i < this.#books.length; ++i) {
      if (this.#books[i].author === authorName) {
        authorBooks.push(this.#books[i]);
      }
    }
    return authorBooks;
  }

  giveBookToReader(title, reader) {
    const book = this.findBookByTitle(title);

    if (!book) {
      return "There is no book with this title";
    }

    if (!book.isAvailable) {
      return "Book is already borrowed";
    }

    reader.takeBook(book);
  }

  acceptBookFromReader(title, reader) {
    const book = this.findBookByTitle(title);

    if (!book) {
      return "There is no book with this title";
    }
    reader.giveBackBook(book);
  }

  showAvailableBooks() {
    // return this.#books
    //   .filter((book) => book.isAvailable)
    //   .map((book) => book.getInfo());

    let newBooks = [];
    for (let i = 0; i < this.#books.length; ++i) {
      if (this.#books[i].isAvailable) {
        newBooks.push(this.#books[i]);
      }
    }
    return newBooks;
  }

  showAllBooks() {
    // return this.#books.map((book) => book.getInfo());
    // return this.#books.map((book) => book.getInfo());
    let allBooks = [];

    for (let i = 0; i < this.#books.length; ++i) {
      allBooks.push(this.#books[i].getInfo());
    }

    return allBooks;
  }

  getLibraryInfo() {
    let count = this.#books.length;
    let readers = this.#readers.length;

    return `Central Library: ${count} books, ${readers} readers\n`;
  }
}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());

// library.showAvailableBooks().forEach(book => console.log(book.getInfo()));

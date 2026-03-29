class Book {

    constructor({title, author, year}) {
        if (!title) {
    
            throw new Error("do not add a book without title");
        }
    
        if (!author) {
    
            throw new Error("do not add a book without author");
        }
    
        if (!year || typeof year !== "number" || isNaN(year)) {
    
            throw new Error("Year must be number");
         }

        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;

    }

    getInfo() {

        return ` Title: ${this.title},
        Author: ${this.author},
        Year: ${this.year},
        Available: ${this.isAvailable}\n`
    }

    borrowBook() {

        if (this.isAvailable) {

            this.isAvailable = false;

        } else {

            console.log("cannot be false");

        }

    }

    returnBook() {

        if (!this.isAvailable) {

            this.isAvailable = true;
        } else {

            console.log("is already available.");

        }
    }

    matchesAuthor(authorName) {


        if (authorName.toLowerCase() !== this.author.toLowerCase()) {

            return false;
        }
        return true;
    }

    matchesTitle(word) {

        return this.title.includes(word);
    }
}
class Library {
    constructor() {

        this.books = [];

    }

    addBook(book) {
        
        if(!(book instanceof Book)){

        throw new Error("The book should be an instance of Book")
        
        }
    
    
        this.books.push(book);
    }

    removeBook(title) {

        for (let i = 0; i < this.books.length; ++i) {

            if (this.books[i].title === title) {

                this.books.splice(i, 1);

                return "Book removed";
            }

        }

        return "Book not found";
    }

    findBookByTitle(title) {

        for (let i = 0; i < this.books.length; ++i) {

            if (this.books[i].title === title) {

                return this.books[i];
            }
        }

        return null;
    }

    findBooksByAuthor(authorName) {

        let Book = [];

        for (let i = 0; i < this.books.length; i++) {

            if (this.books[i].author === authorName) {

                Book.push(this.books[i]);
            }
        }

        return Book;
    }

    getAvailableBooks() {

        return this.books.filter(book => book.isAvailable === true);
    }

    borrowBook(title) {

        for (let i = 0; i < this.books.length; ++i) {

            if (this.books[i].title === title) {

                this.books[i].borrowBook();
                return "Book borrowed"
            }
        }

        return "Book not found";
    }

    returnBook(title) {

        for (let i = 0; i < this.books.length; ++i) {

            if (this.books[i].title === title) {

                this.books[i].returnBook();
                return "Book returned"
            }

        }

        return "Book not found";
    }

    showAllBooks() {

        for (let i = 0; i < this.books.length; i++) {

            console.log(this.books[i].getInfo());
        }


    }

    countBooks() {
        let count = 0;

        for (let i = 0; i < this.books.length; i++) {

            count++;
        }

        return count;
    }

    countAvailableBooks() {
        let count = 0;

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isAvailable) {
                count++;


            }
        }
        return count;
    }

    searchBooks(word) {
        let Book = [];

        for (let i = 0; i < this.books.length; i++) {

            if (this.books[i].title.includes(word)) {

                Book.push(this.books[i]);
            }

        }

        return Book;

    }

    getOldestBook() {
        if (this.books.length === 0) return null;

        let oldestBook = this.books[0];

        for (let i = 1; i < this.books.length; i++) {

            if (this.books[i].year < oldestBook.year) {

                oldestBook = this.books[i];
            }
        }

        return oldestBook;
    }
}

const book1 = new Book({title:"Harry Potter", author:"J. K. Rowling", year:1997});
const book2 = new Book({title:"1984", author:"George Orwell",year: 1949});
const book3 = new Book({title:"Animal Farm",author: "George Orwell",year: 1945});
const book4 = new Book({title:"The Hobbit", author:"J. R. R. Tolkien", year:1937});
const book5 = new Book({title:"HHH",author:"J. R. R. Tolkien", year:1937});


const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);


// console.log("=== All books ===");
// library.showAllBooks();

// console.log("=== Count books ===");
// console.log(library.countBooks()); // 4

// console.log("=== Count available books ===");
// console.log(library.countAvailableBooks()); // 4

// console.log("=== Find by title ===");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Find by author ===");
// console.log(library.findBooksByAuthor("George Orwell"));

// console.log("=== Search books ===");
// console.log(library.searchBooks("Harry"));

// console.log("=== Borrow book ===");
// library.borrowBook("1984");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Borrow same book again ===");
// library.borrowBook("1984");

// console.log("=== Return book ===");
// library.returnBook("1984");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Available books ===");
// console.log(library.getAvailableBooks());

// console.log("=== Oldest book ===");
// console.log(library.getOldestBook());

// console.log("=== Remove book ===");
// library.removeBook("The Hobbit");
// console.log(library.countBooks()); // 3

// console.log("=== Final books ===");
// library.showAllBooks();


// let book1 = new Book("Brother Axe", "Hovhannes Tumanyan", 1907);
// let book2 = new Book("shunn u katun Axe", "Hovhannes Tumanyan", 1902);
// let book3 = new Book("dzaxort panosy ", "Hovhannes Tumanyan", 1889);
// let library = new Library("Xnko apor");

// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

//console.log(library.removeBook("Brother Axee"));
// console.log(library.findBookByTitle("Brother Axeu"));
// console.log(library.findBooksByAuthor("Hovhannes Tumanyan"));
// console.log(library.getAvailableBooks());
// console.log(library.borrowBook("Brother Axe"));
// console.log(library.returnBook("Brother Axe"));
// console.log(library.showAllBooks());
// console.log(library.countBooks());
// console.log(library.countAvailableBooks());
// console.log(library.searchBooks("Axe"));
// console.log(library.getOldestBook());








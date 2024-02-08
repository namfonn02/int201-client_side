3.
// Instruction:- Creating a library system using class Book and Library.

// Class Book:
//     Constructor
//         • Constructor(title, author, pages, genre): This initializes the properties 'title', 'author', ' pages' and 'genre'.
//     Properties
//         • title: type string
//         • author: type string
//         • pages: type number
//         • genre: type string
//     Methods
//         • getSummary() - Returns a string summary of the book ex: "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"

// Class Library:
//     Constructor
//         • Constructor(name): This initializes the properties 'name' and creates an empty array in the property books
//     Properties
//         • name: type string
//         • books: type array of Book objects, initially empty.
//     Methods
//         • addBook(newBook) - Accepts a Book object and adds it to the books array.
//         • getBooksByGenre(genre) - Returns an array of books that match the specified genre.
//         • getTotalPagesByGenre(genre) - Returns the total number of pages for all books of a specified genre.

class Book {
    constructor(title, author, pages, genre) {
        this.title = title
        this.author = author
        this.pages = pages
        this.genre = genre
    }

    getSummary() {
        return `"Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}"`
    }
}

class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }

    addBook(newBook) {
        this.books.push(newBook)
    }

    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre)
    }
    getTotalPagesByGenre(genre) {
        return this.books.filter(book => book.genre === genre).reduce((totalPages, book) => totalPages + book.pages, 0)
    }
}


4
// Instruction: - Create a 'Book' object and a 'Library' object for 'Practice 3'.Use a constructor and methods in both classes.

const Book3 = new Book('Harry Wick', 'Conan', 345, 'Sci-Fi')
console.log(Book3.getSummary());
console.log('');
const Book4 = new Book('Harry Potter', 'J.K. Rowling', 300, 'Fantasy')
console.log(Book4.getSummary());
console.log('');
const Book5 = new Book('The Hitchhikers Guide to the Galaxy', 'Douglas Adams', 200, 'Sci-Fi')
console.log(Book5.getSummary());
console.log('');
const Book6 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 400, 'Fantasy')
console.log(Book6.getSummary());
console.log('');

const library = new Library('My Library')
library.addBook(Book3)
library.addBook(Book4)
library.addBook(Book5)
library.addBook(Book6)

console.log(library);
console.log('');

const SciFiBook = library.getBooksByGenre('Sci-Fi')
console.log(SciFiBook)
console.log(SciFiBook);
console.log('');
const totalPagesSciFiBook = library.getTotalPagesByGenre('Sci-Fi')
console.log('Total Pages Sci-Fi : ', totalPagesSciFiBook);
console.log('');


const FantasyBook = library.getBooksByGenre('Fantasy')
console.log(FantasyBook);
// console.log('');
const totalPagesFantasyBook = library.getTotalPagesByGenre('Fantasy')
// console.log('Total Pages Fantasy : ', totalPagesFantasyBook);
// console.log('');

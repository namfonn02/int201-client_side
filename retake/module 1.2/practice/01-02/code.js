1.
// Instruction: - Write class Book.Then, add a method to the object that outputs information about the book.
// Class Book
//      Constructor
//          • Constructor(title, author, yearPublished): This initializes the properties 'title', 'author', and 'yearPublished'.
//            If they are empty, it assigns 'no title', 'no author', and 0 respectively.
//      Properties
//          • title: type String
//          • author: type String
//          • yearPublished: type number
//      Methods
//          • getInfo(): This method return a string that combines the book's title, author, and year of publication.

class Book {
    constructor(title, author, yearPublished) {
        this.title = title || 'no title'
        this.author = author || 'no author'
        this.yearPublished = yearPublished || 0
    }

    getInfo() {
        return { 'title': this.title, 'anthor': this.author, 'yearPublished': this.yearPublished }
    }
}

2.
// Instruction: - Create an object Book reference ‘practice 1’. 
// Use a constructor Constructor(title, author, yearPublished.Additionally, use a 'getInfo()' method.

const Book1 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954)
console.log(Book1.getInfo());

const Book2 = new Book('', '')
console.log(Book2.getInfo());

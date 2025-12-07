const book = { // 1 ja 2

    
    bookArray: [ // 3
        {
            id_book: 1,
            name: "Harry Potter ja viisasten kivi",
            author: "J. K. Rowling",
            isbn: "9789520408185"
        },
        {
            id_book: 2,
            name: "Taru sormusten herrasta: Sormuksen ritarit",
            author: "J. R. R. Tolkien",
            isbn: "9789510418993"
        },
        {
            id_book: 3,
            name: "Perillinen",
            author: "Christopher Paolini",
            isbn: "9789520401780"
        }
    ],

    
    getAllBooks() { // 4
        console.log(this.bookArray);
    },

    
    getOneBook(x) {
        const book = this.bookArray.find(b => b.id_book === x);
        console.log(book);
    },

    
    addBook(id_book, name, author, isbn) {
        this.bookArray.push({
            id_book,
            name,
            author,
            isbn
        });
    }
};



console.log("Tulostetaan kaikki kirjat:"); // 5
book.getAllBooks();

console.log("\nTulostetaan kirja id:llä 2:");
book.getOneBook(2);

console.log("\nLisätään uusi kirja:");
book.addBook(4, "Brisingr", "Christopher Paolini", "1234567890");

console.log("\nTulostetaan kaikki kirjat lisäyksen jälkeen:");
book.getAllBooks();

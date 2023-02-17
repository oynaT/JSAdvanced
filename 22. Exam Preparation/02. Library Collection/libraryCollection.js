class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        //If there's not enough space in the collection for the book, throw an Error:
        if (this.capacity === this.books.length) {
            throw new Error('Not enough space in the collection.');
        }
        //Otherwise, this function should add the book, with the properties: 
        //bookName, bookAuthor, payed: default false, to the books array and return
        this.books.push({
            bookName,
            bookAuthor,
            payed: false,
        })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        //If the book is not found, throw an Error:
        let matchBook = this.books.find(x => x.bookName === bookName);
        if (matchBook == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        //If the book has already paid, throw an Error:
        if (matchBook.payed) {
                throw new Error(`${bookName} has already been paid.`);
                //Otherwise, this function set paid to true on the found book and return:
        } else {
                matchBook.payed = true;
                return `${matchBook.bookName} has been successfully paid.`;
        }
    }
    removeBook(bookName) {
        const matchBook = this.books.find(book => book.bookName == bookName);
        //const matchBook = this.books[index];
        if (matchBook == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (!matchBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }else {
            const index = this.books.indexOf(matchBook);
            this.books.splice(index, 1); //delete by index !!
            return `${bookName} remove from the collection.`;
        }
    }
    getStatistics(bookAuthor){
        if (bookAuthor === undefined) {
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            .forEach(book => result.push(`\n${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.`));
            return result.join('');       
        }else {
            let matchBook = this.books.find(b => b.bookAuthor == bookAuthor);
            if(matchBook){
                let result = [];
                result.push(`${matchBook.bookName} == ${matchBook.bookAuthor} - ${matchBook.payed ? "Has Paid" : "Not Paid"}.`);
                return result.join('')
            }else{
                throw Error(`${bookAuthor} is not in the collection.`);
            }
        }        
    }
}

// const library = new LibraryCollection(2);
// console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.addBook("Ulysses", "James Joyce"));
 
//output 1
// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.
 
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));
 
// output 2
// In Search of Lost Time has been successfully paid.
// Don Quixote is not in the collection.
 
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));
 
// Output 3
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Don Quixote == Miguel de Cervantes - Not Paid.
 
// const library = new LibraryCollection(5);
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Ulysses", "James Joyce");
// console.log(library.getStatistics());

// output 4
// Don Quixote remove from the collection.
// In Search of Lost Time need to be paid before removing from the collection.
  
// Output 5
// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.


class LibraryCollection2 {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    };

    payBook(bookName) {
        const findBook = this.books.find(b => b.bookName === bookName);

        if (!findBook) {
            throw new Error(`${bookName} is not in the collection.`);
        };

        if (findBook.payed) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            findBook.payed = true;
            return `${findBook.bookName} has been successfully paid.`
        }
    }

    removeBook(bookName) {
        const findBook = this.books.find(b => b.bookName == bookName);

        if (!findBook) {
            throw new Error("The book, you're looking for, is not found.");
        };

        if (!findBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            const index = this.books.indexOf(findBook);
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`
        }
    };


    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            sortedBook.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join('\n').trim();
        } else {
            let findBook = this.books.find(b => b.bookAuthor == bookAuthor);

            if (findBook) {
                let result = [];
                let paid = findBook.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
    }
}
const library = require('./library');
const { expect } = require('chai');
 
describe('Library Object Test Suit', () => {
    describe('calcPriceOfBook Function Test', () => {
        it('throws error if invalid parameters', () => {
            expect(() => {
                library.calcPriceOfBook(123, 123);
            }).to.throw('Invalid input');
 
            expect(() => {
                library.calcPriceOfBook('string', 'string');
            }).to.throw('Invalid input');
 
            expect(() => {
                library.calcPriceOfBook(123, 'string');
            }).to.throw('Invalid input');
        });
 
        it('returns message with 50% Off Price and Year LESS THAN 1980', () => {
            expect(library.calcPriceOfBook('Name', 1930)).to.equal(
                `Price of Name is 10.00`
            );
        });
 
        it('returns message with 50% Off Price and Year EQUAL to 1980', () => {
            expect(library.calcPriceOfBook('Name', 1980)).to.equal(
                `Price of Name is 10.00`
            );
        });
 
        it('returns the normal price of book', () => {
            expect(library.calcPriceOfBook('NormalBook', 2001)).to.equal(
                'Price of NormalBook is 20.00'
            );
        });
    });
    describe('findBook function', () => {
        it('throws error if the parameter array is empty', () => {
            expect(() => {
                library.findBook([], 'book');
            }).to.throw('No books currently available');
        });
 
        it('throws error if the parameter is empty STRING', () => {
            expect(() => {
                library.findBook('', 'book');
            }).to.throw('No books currently available');
        });
        
        it('returns a message for FOUND book if its is in the books array', () => {
            expect(
                library.findBook(['Book', 'Book2', 'Book3'], 'Book')
            ).to.equal('We found the book you want.');
        });
 
        it('returns a message for NOT FOUND book if its NOT in books array', () => {
            expect(
                library.findBook(['Book', 'Book2', 'Book3'], 'Book4')
            ).to.equal('The book you are looking for is not here!');
        });
    });
 
    describe('arrangeBooks function', () => {
        it('throws error if parameter is invalid type', () => {
            expect(() => {
                library.arrangeTheBooks('string');
            }).to.throw('Invalid input');
        });
 
        it('throws error if parameter is LESS THAN 0', () => {
            expect(() => {
                library.arrangeTheBooks(-10);
            }).to.throw('Invalid input');
        });
 
        it('returns message for insufficient space', () => {
            expect(library.arrangeTheBooks(45)).to.equal(
                'Insufficient space, more shelves need to be purchased.'
            );
        });
 
        it('returns message that books are arranged if the books are LESS THAN Shelves(40)', () => {
            expect(library.arrangeTheBooks(23)).to.equal(
                'Great job, the books are arranged.'
            );
        });
 
        it('returns message that books are arranged if the books are EQUAL TO Shelves(40)', () => {
            expect(library.arrangeTheBooks(40)).to.equal(
                'Great job, the books are arranged.'
            );
        });
    });
});
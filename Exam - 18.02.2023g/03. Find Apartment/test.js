const findNewApartment = require('./findApartment');
const expect = require('chai').expect;

describe("Find New Apartment", function() {
    describe('isGoodLocation', function() {
        it('Invalid input string', function () {
            expect(() => {findNewApartment.isGoodLocation(1, '1');}).to.throw();
        });
        it('Invalid input number', function () {
            expect(() => {findNewApartment.isGoodLocation('a', 1);}).to.throw();
        });
        it('Invalid input integer', function () {
            expect(() => {findNewApartment.isGoodLocation('a', 2);}).to.throw();
        });
    
        it("location is not suitable", function () {
            const result = findNewApartment.isGoodLocation('Petrich', true);
            expect(result).to.equal('This location is not suitable for you.');
        });

        it("False", function () {
            const result = findNewApartment.isGoodLocation('Sofia', false);
            expect(result).to.equal('There is no public transport in area.');
        });

        it("True", function () {
            const result = findNewApartment.isGoodLocation('Varna', true);
            expect(result).to.equal('You can go on home tour!');
        });
     });

     describe('isLargeEnough', function() {

        it('Invalid input', function () {
            expect(() => {findNewApartment.isLargeEnough('a', '1');}).to.throw();
        });
        it('Invalid input', function () {
            expect(() => {findNewApartment.isLargeEnough(['a'], '1');}).to.throw();
        });
        it('Invalid input', function () {
            expect(() => {findNewApartment.isLargeEnough('a', 1);}).to.throw();
        });
        it('Invalid input', function () {
            expect(() => {findNewApartment.isLargeEnough([], 1);}).to.throw();
        });

        it('[40, 50, 60]', function () {
            const result = findNewApartment.isLargeEnough([40, 50, 60], 39);
             expect(result).to.equal('40, 50, 60');
        });
        it('[40, 50, 60]', function () {
            const result = findNewApartment.isLargeEnough([40, 50, 60], 40);
            expect(result).to.equal('40, 50, 60');
        });
        it('[50, 60]', function () {
            const result = findNewApartment.isLargeEnough([40, 50, 60], 50);
            expect(result).to.equal('50, 60');
        });
        it('[40, 50]', function () {
            const result = findNewApartment.isLargeEnough([40, 50, 60], 60);
            expect(result).to.equal('60');
        });
        it('[]', function () {
            const result = findNewApartment.isLargeEnough([40, 50, 60], 61);
            expect(result).to.equal('');
        });
     });

     describe('isItAffordable', function() {
        it('Invalid input!', function () {
            expect(() => {findNewApartment.isItAffordable('1', 'a');}).to.throw();
        });
        it('Invalid input!', function () {
            expect(() => {findNewApartment.isItAffordable(1, 'a');}).to.throw();
        });
        it('Invalid input!', function () {
            expect(() => {findNewApartment.isItAffordable('a', 1);}).to.throw();
        });

        it('lower budget', () => {
            const result = findNewApartment.isItAffordable(2, 1);
            expect(result).to.equal('You don\'t have enough money for this house!');
        })

        it('biger budget', () => {
            const result = findNewApartment.isItAffordable(1, 2);
            expect(result).to.equal('You can afford this home!');
        })

        it('equal', () => {
            const result = findNewApartment.isItAffordable(1, 1);
            expect(result).to.equal('You can afford this home!');
        })
     });

});

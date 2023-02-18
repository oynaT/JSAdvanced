const testNumbers = require('./testNumbers');
const expect = require('chai').expect;

describe('testNumbers', function () {

    describe('sumNumbers', function () {
        it('Works with valid numbers', function () {
            expect(testNumbers.sumNumbers(3, 5)).to.equal(`8.00`);
        });
        it('Works with negative number', function () {
            expect(testNumbers.sumNumbers(3, -5)).to.equal(`-2.00`);
        });
        it('Works with floating point', function () {
            expect(testNumbers.sumNumbers(1.555, 0.333)).to.equal(`1.89`);
        });
        it('return undefined with string parameters', function () {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
        });
        it('return undefined with invalid parameter', function () {
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, 2)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, null)).to.equal(undefined);
        });
    });
    describe('numberChecker', function () {
        it('Works with odd value', function () {
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });
        it('Works with even value', function () {
            expect(testNumbers.numberChecker(2)).to.contain('even');
        });
        it('Works with odd value as string', function () {
            expect(testNumbers.numberChecker('1')).to.contain('odd');
        });
        it('Works with even value as string', function () {
            expect(testNumbers.numberChecker('2')).to.contain('even');
        });
        it('Detect invalid parameter', function () {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
        it('Works with empty string', function () {
            expect(testNumbers.numberChecker('')).to.contain('even');
        });
    });

    describe('averageSumArray', function () {
        it('Works with integers', function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it('Works with floats', function () {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    });
});
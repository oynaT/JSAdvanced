const rentCar = require('./rentCar');
const expect = require('chai').expect;

describe('Tests', function () {
    //searchCar(shop, model) - A function that accepts two parameters (one array and one string):
    //The function checks whether the submitted string model is present in the shop (example: 
    //["Volkswagen", "BMW", "Audi"]), and return number of matching elements and the model of the car in the message:
    // `There is ${findModel.length} car of model ${model} in the catalog!`;
    describe('searchCar', function () {
        it('find one car', () => {
            const shop = ['a', 'b', 'c'];
            const model = 'a';
            const result = rentCar.searchCar(shop, model);;
            expect(result).to.equal('There is 1 car of model a in the catalog!');
        })
        it('find two car', () => {
            const shop = ['a', 'b', 'a'];
            const model = 'a';
            const result = rentCar.searchCar(shop, model);;
            expect(result).to.equal('There is 2 car of model a in the catalog!');
        })

        it("Invalid shop (number)", function () {
            expect(() => {
                rentCar.searchCar(5, 'a');
            }).to.throw();
        });
        it("Invalid shop (string)", function () {
            expect(() => {
                rentCar.searchCar('abc', 'a');
            }).to.throw();
        });
        it("Invalid model", function () {
            expect(() => {
                rentCar.searchCar(['a', 'b', 'a'], 5);
            }).to.throw();
        });
        it("car not found", function () {
            expect(() => {
                rentCar.searchCar(['a', 'b', 'a'], 'd');
            }).to.throw();
        });
    });

    describe('calculatePriceOfCar', function () {
        it("Invalid model", function () {
            expect(() => {
                rentCar.calculatePriceOfCar(['a', 'b', 'c'], 'd');
            }).to.throw();
        });
        it("Invalid day", function () {
            expect(() => {
                rentCar.calculatePriceOfCar(['a', 'b', 'a'], -1);
            }).to.throw();
        });
        it('Correct price for model', () => {
            const result = rentCar.calculatePriceOfCar('Volkswagen', 2);
            expect(result).to.equal('You choose Volkswagen and it will cost $40!');
        })
        it("Invalid model in catalog", function () {
            expect(() => {
                rentCar.calculatePriceOfCar('a', 1);
            }).to.throw();
        });
    });
    describe('checkBudget', function () {
        it("Invalid costPerDay", function () {
            expect(() => {
                rentCar.checkBudget('1', 1, 1);
            }).to.throw();
        });
        it("Invalid days", function () {
            expect(() => {
                rentCar.checkBudget(1, '1', 1);
            }).to.throw();
        });
        it("Invalid budget", function () {
            expect(() => {
                rentCar.checkBudget(1, 1, '1');
            }).to.throw();
        });
        it('The budget enought', () => {
            const result = rentCar.checkBudget(1, 1, 1);
            expect(result).to.equal('You rent a car!');
        })
        it('The budget in not enought', () => {
            const result = rentCar.checkBudget(2, 1, 1);
            expect(result).to.equal('You need a bigger budget!');
        })
    });
});

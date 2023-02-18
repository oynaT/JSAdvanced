const flowerShop = require('./flowerShop');
const assert = require('chai').assert;

describe('Tests', function () {
    describe('calcPriceOfFlowers', function () {
        it('Calculate price', () => {
            assert.equal(flowerShop.calcPriceOfFlowers('o', 1, 1), 'You need $1.00 to buy o!')
            assert.equal(flowerShop.calcPriceOfFlowers('o', 2, 1), 'You need $2.00 to buy o!')
            assert.equal(flowerShop.calcPriceOfFlowers('o', 2, 2), 'You need $4.00 to buy o!')
            assert.equal(flowerShop.calcPriceOfFlowers('o', 2, 3), 'You need $6.00 to buy o!')
        })
        it('Calculate price throw an error', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers('o', '1', 1), 'Invalid input!')
            assert.throw(() => flowerShop.calcPriceOfFlowers('o', 'p', '1'), 'Invalid input!')
            assert.throw(() => flowerShop.calcPriceOfFlowers('o', 1, 'p'), 'Invalid input!')
            assert.throw(() => flowerShop.calcPriceOfFlowers('o', 1, '1'), 'Invalid input!')
            assert.throw(() => flowerShop.calcPriceOfFlowers(1, 1, 1), 'Invalid input!')
        })
    });

    describe('checkFlowersAvailable', function () {
        it('checkFlowersAvailable are available', () => {
            assert.equal(flowerShop.checkFlowersAvailable('o', ['o', 't', 'r']), 'The o are available!')
            assert.equal(flowerShop.checkFlowersAvailable('o', ['s', 't', 't']), 'The o are sold! You need to purchase more!')
        })
    });

    describe('sellFlowers', function () {
        it('SellFlowers changes', () => {
            assert.equal(flowerShop.sellFlowers(['o', 't', 'r'], 0), 't / r')
            assert.equal(flowerShop.sellFlowers(['o', 't', 'r'], 1), 'o / r')
            assert.equal(flowerShop.sellFlowers(['o', 't', 'r'], 2), 'o / t')
        })

        it('SellFlowers throw an error', () => {
            assert.throw(() => flowerShop.sellFlowers(['o', 't', 'r']), 'Invalid input!')
            assert.throw(() => flowerShop.sellFlowers(['o', 't', 'r'], '1'), 'Invalid input!')
            assert.throw(() => flowerShop.sellFlowers(['o', 't', 'r'], 10), 'Invalid input!')
            assert.throw(() => flowerShop.sellFlowers('abc', 1), 'Invalid input!')
            assert.throw(() => flowerShop.sellFlowers(1, 1), 'Invalid input!')
        })
    });

});

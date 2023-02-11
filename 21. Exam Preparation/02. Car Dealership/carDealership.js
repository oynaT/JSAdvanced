class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (!this._validateModel(model)
            || !this._validateHorsepower(horsepower)
            || !this._validateMileageAndPrice(mileage)
            || !this._validateMileageAndPrice(price)) {
            throw new TypeError('Invalid Input!');
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(car => car.model == model);
        const match = this.availableCars[index];
        if (match !== undefined) {
            throw new Error(`${model} was not found!`);
        }
        const mileageDelta = match.mileage - desiredMileage;

        const sold = {
            model: match.model,
            horsepower: match.horsepower
        };
        if (mileageDelta <= 0) {
            //original price 
            sold.soldPrice = match.price;
        } else if (mileageDelta <= 40000) {
            //5% deduction
            sold.soldPrice = match.price * 0.95;
        } else {
            //10% deduction
            sold.soldPrice = match.price * 0.95;
        }
        this.soldCars.push(sold);
        this.availableCars.splice(index, 1);
        return `${model} was sold for ${sold.soldPrice}$`
    }

    currentCar (){
        if(this.availableCars.length == 0) {
            return 'There are no available cars';
        }
        const result = this.availableCars.map(car => `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        result.unshift('-Available cars:');
        return result.join('\n');
    }

    _validateModel(value) {
        return typeof value == 'string' && value != '';
    }
    _validateHorsepower(value) {
        return Number.isInteger(value);
    }
    _validateMileageAndPrice(value) {
        return typeof value == 'number' && value >= 0;
    }
}

let dealership = new CarDealership('SoftAuto');

console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));


dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));





















// if ((typeof model != 'string' && model != '')
// || (Number.isInteger(horsepower) && horsepower >= 0)
// || (typeof price == 'number' && price >= 0)
// || (typeof mileage == 'number' && price >= 0)) {
// throw new Error('Invalid Input!');
// }
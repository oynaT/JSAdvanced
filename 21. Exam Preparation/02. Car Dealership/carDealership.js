class CarDealership {
    //At the initialization of the CarDealership class, the constructor accepts the name. 
    //The totalIncome has a default value of 0! The rest of the properties must be empty!
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    //This method should add a new car to the dealership. The method accepts 4 arguments:
    addCar(model, horsepower, price, mileage) {
        //If any of the following requirements is NOT fulfilled, an error with the following message should be thrown
        if (!this._validateModel(model)
            || !this._validateHorsepower(horsepower)
            || !this._validateMileageAndPrice(price)
            || !this._validateMileageAndPrice(mileage)) {
            throw new Error('Invalid input!');
        }
        //Otherwise, you should add the car, with properties: {model, horsepower, price, mileage} to the availableCars array and return:
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });
        //and return:
        //When returning the result, the Mileage and Price must be rounded to the second decimal point!
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    //This method should search for a car with the given model in the availableCars array, and then sell it. Accepts 2 arguments.
    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(car => car.model == model);
        const match = this.availableCars[index];
        //If a car with the given model cannot be found, an error with the following message should be thrown:
        if (match == undefined) {
            throw new Error(`${model} was not found!`);
        }
        //If you find the car with the given model, you should look up its mileage. 
        //The person who wants to buy it has a simple request. 
        //He is looking for a car with a mileage that is less or equal to his desired mileage.
        //To ensure the sale of the car you must make a bargain:
        const mileageDelta = match.mileage - desiredMileage;

        const sold = {
            model: match.model,
            horsepower: match.horsepower
        };
        //If the found car’s mileage is less than or equal to the desiredMileage – the price stays the same!
        if (mileageDelta <= 0) {
            //original price 
            sold.soldPrice = match.price;
            //If the difference between the car’s mileage and the desiredMileage is less or equal to 40.000 km
        } else if (mileageDelta <= 40000) {
            //5% deduction
            sold.soldPrice = match.price * 0.95;
        } else {
            //If the difference between the car’s mileage and the desiredMileage is more than 40.000 km – the price gets deducted by 10%!
            //10% deduction
            sold.soldPrice = match.price * 0.9;
        }
        //You should remove the car from the availableCars array and add it to 
        //the soldCars array in the following format: {model, horsepower, soldPrice}
        this.soldCars.push(sold);
        this.availableCars.splice(index, 1); //delete with index!!
        //Finally, you must add the soldPrice to the totalIncome and return:
        this.totalIncome += sold.soldPrice;
        return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`
    }

    currentCar() {
        //If there are no available cars, just return:
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }
        //This method should just return all available cars separated by a new line in format:
        const result = this.availableCars.map(car => `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        result.unshift('-Available cars:');
        return result.join('\n');
    }

    salesReport(criteria) {
        //This method accepts 1 argument. It should sort the sold cars, 
        //based on a given criterion. The two possible criteria are – "horsepower" or "model"
        if (criteria == 'horsepower') {
            //If the given criteria is "horsepower" – the sold cars must be sorted by their horsepower in descending order;
            //sort descending by horsepower
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        } else if (criteria == 'model') {
            //If the given criteria is "model" – the sold cars must be sorted alphabetically by their model;
            //sort alphabetical by name
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            //If the given criteria do not match either of the possible criteria, 
            //an error with the following message should be thrown:
            throw new TypeError('Invalid criteria!');
        }
        //Finally, return all sorted sold cars separated by a new line in format:
        const result = this.soldCars.map(car => `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        result.unshift(`-${this.soldCars.length} cars sold:`);
        result.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        return result.join('\n');
    }

    _validateModel(value) {
        //Model – non-empty string;
        return typeof value == 'string' && value != '';
    }
    _validateHorsepower(value) {
        //Horsepower – positive integer number;
        return Number.isInteger(value) && value >= 0;
    }
    _validateMileageAndPrice(value) {
        //Price – positive number;
        //Mileage – positive number.
        return typeof value == 'number' && value >= 0;
    }
}



//let dealership
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

dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());

dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
//console.log(dealership.salesReport('horsepower'));
console.log(dealership.salesReport('model'));





















// if ((typeof model != 'string' && model != '')
// || (Number.isInteger(horsepower) && horsepower >= 0)
// || (typeof price == 'number' && price >= 0)
// || (typeof mileage == 'number' && price >= 0)) {
// throw new Error('Invalid Input!');
// }
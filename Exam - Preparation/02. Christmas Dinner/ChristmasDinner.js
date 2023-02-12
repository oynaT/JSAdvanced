//https://pastebin.com/YxzUavch
//https://pastebin.com/JQLzbF8h

class ChristmasDinner {

    constructor(budget) {
        //If the class is initialized with negative budget throw an error with the following message:
        // if (budget < 0) {
        //     throw new Error("The budget cannot be a negative number");
        // }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    //Important! Use accessors to validate that the budget (the budget cannot be negative number). 

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }
    get budget() {
        return this._budget;
    }

    shopping([type, price]) {
        //If you don’t have enough money to buy the product, you should throw an error
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        //Otherwise you should push the type of the product in the products array,
        // decrease the budget with the price of the product and return a message:
        this.budget -= price;
        this.products.push(type);

        return `You have successfully bought ${type}!`;
    }

    recipes({ recipeName, productsList }) {
        //If one or more products needed to make the meal are absent from the products, throw an error
        if (productsList.some(product => this.products.includes(product) == false)) {
            throw new Error('We do not have this product');
        }

        //The products require to prepare the meal are in contained the productList.
        // If all the products from the productList are present in the products array 
        //you should push an object in the following format: 
        //{ recipeName, productList } to the dishes array and return a message:
        this.dishes.push({ recipeName, productsList });

        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        //If the dish is not present in the dishes array, throw a new error
        if (this.dishes.some(d => d.recipeName == dish) == false) {
            throw new Error(`We do not have this dish`);
            //And if the guest is already present in the guest object, throw a new error:
        } else if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        //Otherwise create a new key and value pair to the guest object with key the name of the 
        //guest and value - the dish in the format: { {guestName}: {dish} } and return a message:
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    // showAttendance() {
    //     let result = [];
    //     Object.entries(this.guests).forEach(([guestName, dish]) => {
    //         result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find((d => d.recipeName == dish).productsList.join(', '))}`);
    //     });
    //     return result.join('\n');
    // }

    showAttendance() {
        let result = [];

        for (let guest in this.guests) {
            const dishName = this.guests[guest];
            const products = this.dishes.find(x => x.recipeName === dishName).productsList;
            result.push(`${guest} will eat ${dishName}, which consists of ${products.join(', ')}`);
        }
        return result.join('\n');
    }
}



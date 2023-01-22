function fruits(fruit, grams, price) {
    let kg = grams / 1000;
    let totalPrice = price * kg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80);
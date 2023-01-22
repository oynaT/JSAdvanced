function aggregateElements(input){
    let numbers = input;
    let total = 0;
    numbers.forEach(el => {
        total += el;
    });
    //console.log(total);
    let inverseSum = 0;
    for (let i = 0; i < numbers.length; i++) { //- calculates the sum of the inverse values (1/ai) of all elements from the array
        inverseSum += 1 / numbers[i];
    }
    console.log(inverseSum);
    console.log(numbers.join(""));
}
aggregateElements([1, 2, 3]);
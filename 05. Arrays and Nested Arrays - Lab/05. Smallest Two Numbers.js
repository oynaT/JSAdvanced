function smallestTwoNumbers(input){
    let sortedArr = input.sort((a, b) => a - b);
    let smallestTwo = sortedArr.slice(0,2);
    console.log(smallestTwo.join(' '));
    
    // input = input.sort(function (a,b) {return a - b;})
    // return input[0] + " " + input[1];
}
smallestTwoNumbers([30, 15, 50, 5]);

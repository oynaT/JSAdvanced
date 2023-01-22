function squareOfStars(input) {
    let n = Number(input); // row or column count
    // defining an empty string
    let string = "";

    for (let i = 0; i < n; i++) { // external loop
        for (let j = 0; j < n; j++) { // internal loop
            string += "* ";
        }
        // newline after each row
        string += "\n";
    }
    // printing the string
    console.log(string);
}
//squareOfStars(5);


function squareOfStars2(number){
    for (let index = 1; index <= number; index++) {
        console.log('* '.repeat(number));
    }
}
squareOfStars2(5);
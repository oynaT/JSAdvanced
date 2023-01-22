function NegativePositiveNumbers(input){
    let result = [];
    for (let index = 0; index < input.length; index++) {
        let curEl = input[index];
        if(curEl < 0){
            result.unshift(curEl);
        }else{
            result.push(curEl);
        }
    }
    console.log(result.join('\n'));
}
NegativePositiveNumbers([7, -2, 8, 9]);
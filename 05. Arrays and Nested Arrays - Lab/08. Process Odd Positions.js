function processOddPositions(input) {
    let newArr = [];
    for (let index = 0; index < input.length; index++) {
        let curEl = input[index];
        if (index % 2 !== 0) {
            newArr.push(curEl + curEl);
        }
    }
    return newArr.reverse().join(' ');
    //console.log(newArr.reverse().join(' '));
}
//processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);

// 07. Sorting Numbers
// Write a function that sorts an array of numbers so that the first element is the smallest one,
// the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, 
//and so on. Return the resulting array.

function sortingNumbers(array) {
    let outputArr = [];
    let sortArr = array.sort((a, b) => a - b);
    //let bigNum = (sortArr.splice(sortArr.length / 2, sortArr.length - 1)).reverse();
    //console.log(bigNum);   
    // for (let index = 0; index < sortArr.length; index++) {
    //     let lastEl = sortArr.pop();
    //     outputArr.push(sortArr[index]);
    //     outputArr.push(lastEl);
    // }
    while (sortArr.length !== 0) {
        outputArr.push(sortArr.shift());
        outputArr.push(sortArr.pop());
    }
    console.log(outputArr);
    //return outputArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
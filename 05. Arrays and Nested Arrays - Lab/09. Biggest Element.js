function biggestElement(input){
    let maxNum = [];
    for (let index = 0; index < input.length; index++) {
        //console.log(input[index]);
         let curNum = Math.max(...input[index]);
         maxNum.push(curNum);
    }
    let num = Math.max(...maxNum);
    console.log(num);
}  
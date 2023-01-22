function sumFirstLast(input){
    let firstNum = input.shift();
    let lastNum = input.pop();
    
    let result = Number(firstNum) + Number(lastNum);
    return result;
}
let end = sumFirstLast(['20', '30', '40']);
console.log(end);
 


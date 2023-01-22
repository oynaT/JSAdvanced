function sameNumbers(num) { // Проверяваме дали в този стринг числа са еднакви или не...
    let numToStr = num.toString();
    let firstDigit = numToStr[0];
    let isSame = true;
    let sum = 0;
    for (let index = 0; index < numToStr.length; index++) {
      if(numToStr[index] !== firstDigit){
        isSame = false;
      }
      sum += Number(numToStr[index]);
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
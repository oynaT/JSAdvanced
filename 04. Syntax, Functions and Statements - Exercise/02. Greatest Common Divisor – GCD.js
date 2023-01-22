function greatestCommonDivisor(arg1, arg2) { //Най-малко общо кратно
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    if (num1 == 0) {
        console.log(num2);
    }
    while (num2 != 0) {
        if (num1 > num2) {
            num1 = num1 - num2;
        } else {
            num2 = num2 - num1;
        }
    }
    console.log(num1);
}
greatestCommonDivisor(15, 5);
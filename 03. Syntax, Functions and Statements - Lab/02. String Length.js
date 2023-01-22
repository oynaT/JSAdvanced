function stringLength(arg1, arg2, arg3){
    let text1 = arg1.length;
    let text2 = arg2.length;
    let text3 = arg3.length;
    let sum = 0;
    let average = 0;
    
    sum = text1 + text2 + text3;
    average = Math.floor(sum / 3);

    console.log(sum);
    console.log(average);

}
stringLength('chocolate', 'ice cream', 'cake');
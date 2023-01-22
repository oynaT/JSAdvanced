function pieceOfPie(arr, str1, str2){
    let startIndex = arr.indexOf(str1);
    let endIndex = arr.indexOf(str2) + 1;
    let result = arr.slice(startIndex, endIndex);
    return result;
}
let end = pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],

'Key Lime Pie',
'Lemon Meringue Pie');
console.log(end);
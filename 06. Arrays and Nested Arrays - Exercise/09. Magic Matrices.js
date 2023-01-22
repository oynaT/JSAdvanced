function magicMatrix(array) {
    let sumFirstRow = array[0].reduce((a, b) => a + b);
    for (let row = 0; row < array[0].length; row++) {
        let curColSum = 0;
        for (let col = 0; col < array.length; col++) {
            curColSum += array[col][row];
        }
        if (curColSum !== sumFirstRow) {
            return false;
        }
    }
    return true;
}

function magicMatrix(array) {
        sumRows = 0;
        sumCols = 0;
        for (let row = 0; row < array.length; row++) {

        for (let col = 0; col < array.length; col++) {
            curColSum += array[col][row];
        }
        if (curColSum === sumFirstRow) {
            return true;
        }else{
            return false;
        }
    }
   
}

magicMatrix(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrix(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
//1
function diagonalSums(array) {
    let leftSum = 0;
    let rightSum = 0;
    let revertedArray = []
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length; col++) {
            if (row == col) {
                leftSum += array[row][col];
            }
            //let sum = array[row][col] + array[row]
        }
    }
    revertedArray = array.reverse();
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length; col++) {
            if (row == col) {
                rightSum += array[row][col];
            }
        }
    }
    console.log(leftSum, rightSum);
}

//2-ro

function diagonalSums(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
 
    for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        firstDiagonal += matrix[rowIndex][rowIndex];
    }
 
    for(let rowIndex = matrix.length - 1; rowIndex >= 0; rowIndex--){
        secondDiagonal += matrix[matrix.length - 1 - rowIndex][rowIndex];
    }
 
    console.log(firstDiagonal, secondDiagonal);
}
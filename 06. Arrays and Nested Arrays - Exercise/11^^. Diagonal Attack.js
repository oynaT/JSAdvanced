function diagonalAttack(input) {
    let matrix = [];
    let leftSum = 0;
    let rightSum = 0;

    while (input.length > 0) {
        matrix.push(input.shift().split(' ').map(Number));
    }

    for (let row = 0; row < matrix.length; row++) {
        leftSum += matrix[row][row];
        rightSum += matrix[matrix.length - 1 - row][row];
    }

    // matrix.reverse();
    // for (let row = 0; row < matrix.length; row++) {
    //     rightSum += matrix[row][row];
    // }

    if (leftSum === rightSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if ((j !== matrix.length - 1 - i) && (j !== i)) {
                    matrix[i][j] = leftSum;
                }
            }
        }
    }
    for (let matr = 0; matr < matrix.length; matr++) {
        console.log(matrix[matr].join(' '));
    }

}
diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']);
// diagonalAttack(
//       ['1 1 1',
//       '1 1 1',
//       '1 1 0']);

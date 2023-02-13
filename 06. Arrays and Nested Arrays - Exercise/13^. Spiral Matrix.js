
//https://pastebin.com/zNkaivzf

function solve(row, col) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = new Array(col);
    }
    let count = 1;
    let startRow = 0, endRow = row - 1, startCol = 0, endCol = col - 1;
    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = count++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = count++;
        }
        endCol--;
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = count++;
            }
            endRow--;
        }
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = count++;
            }
            startCol++;
        }
    }
    for (const element of matrix) {
        console.log(element);
    }
}
solve(5, 5);



//Function that print matrix https://pastebin.com/3UgiZaWN
function solve(a, b) {

    //Function that print matrix 
    function printMatrix(matrix) {
        console.log(matrix.map(el => el.join(' ')).join('\n'));
    }

    let results = Array(a).fill().map(() => Array(b).fill());

    let counter = 1;
    let startColumn = 0;
    let endColumn = b - 1;
    let startRow = 0;
    let endRow = a - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        // Right column 
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    printMatrix(results)
}
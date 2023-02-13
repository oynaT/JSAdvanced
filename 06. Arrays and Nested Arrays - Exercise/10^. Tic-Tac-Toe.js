function ticTacToe(array) {
    // let morskiShax = Array(3).fill(Array(false,false,false)); 
    let morskiShax = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];
        
    let lastTurn = 'O';
    let counter = 0;

    for (let index = 0; index < array.length; index++) {
        let curTurn = array[index].split(' ').map(Number);
        let curTurnRow = curTurn[0];
        let curTurnCol = curTurn[1];
        if (morskiShax[curTurnRow][curTurnCol] === 'X' || morskiShax[curTurnRow][curTurnCol] === 'O') {
            console.log('This place is already taken. Please choose another!');
        } else {
            counter++;
            if (lastTurn == 'O') {
                lastTurn = 'X';
                morskiShax[curTurnRow][curTurnCol] = 'X';
                if ((morskiShax[0][0] == 'X' && morskiShax[0][1] == 'X' && morskiShax[0][2] == 'X') ||
                    (morskiShax[1][0] == 'X' && morskiShax[1][1] == 'X' && morskiShax[1][2] == 'X') ||
                    (morskiShax[2][0] == 'X' && morskiShax[2][1] == 'X' && morskiShax[2][2] == 'X') ||

                    (morskiShax[0][0] == 'X' && morskiShax[1][0] == 'X' && morskiShax[2][0] == 'X') ||
                    (morskiShax[0][1] == 'X' && morskiShax[1][1] == 'X' && morskiShax[2][1] == 'X') ||
                    (morskiShax[0][2] == 'X' && morskiShax[1][2] == 'X' && morskiShax[2][2] == 'X') ||

                    (morskiShax[0][0] == 'X' && morskiShax[1][1] == 'X' && morskiShax[2][2] == 'X') ||
                    (morskiShax[0][2] == 'X' && morskiShax[1][1] == 'X' && morskiShax[2][0] == 'X')) {

                    console.log(`Player X wins!`);
                    for (let matr = 0; matr < morskiShax.length; matr++) {
                        console.table(morskiShax[matr].join('\t'));
                    }
                    break;
                }
            } else if (lastTurn == 'X') {
                lastTurn = 'O';
                morskiShax[curTurnRow][curTurnCol] = 'O';
                if ((morskiShax[0][0] == 'O' && morskiShax[0][1] == 'O' && morskiShax[0][2] == 'O') ||
                    (morskiShax[1][0] == 'O' && morskiShax[1][1] == 'O' && morskiShax[1][2] == 'O') ||
                    (morskiShax[2][0] == 'O' && morskiShax[2][1] == 'O' && morskiShax[2][2] == 'O') ||

                    (morskiShax[0][0] == 'O' && morskiShax[1][0] == 'O' && morskiShax[2][0] == 'O') ||
                    (morskiShax[0][1] == 'O' && morskiShax[1][1] == 'O' && morskiShax[2][1] == 'O') ||
                    (morskiShax[0][2] == 'O' && morskiShax[1][2] == 'O' && morskiShax[2][2] == 'O') ||

                    (morskiShax[0][0] == 'O' && morskiShax[1][1] == 'O' && morskiShax[2][2] == 'O') ||
                    (morskiShax[0][2] == 'O' && morskiShax[1][1] == 'O' && morskiShax[2][0] == 'O')) {
                    console.log(`Player O wins!`);
                    for (let matr = 0; matr < morskiShax.length; matr++) {
                        console.table(morskiShax[matr].join('\t'));
                    }
                    break;
                }
            }
        }
        if (counter == 9) {
            console.log(`The game ended! Nobody wins :(`);
            for (let matr = 0; matr < morskiShax.length; matr++) {
                console.table(morskiShax[matr].join('\t'));
            }
            break;
        }
    }
}
// ticTacToe([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]);
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// ticTacToe(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]
// );
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);



       // if (checkWin('X')) {
    //     console.log(`Player X wins!`);
    //     for (let matr = 0; matr < morskiShax.length; matr++) {
    //         console.table(morskiShax[matr].join(' '));
    //     }
    //     win = true;
    //     return
    // } else if (checkWin('O')) {
    //     console.log(`Player O wins!`);
    //     for (let matr = 0; matr < morskiShax.length; matr++) {
    //         console.table(morskiShax[matr].join(' '));
    //     }
    //     win = true;
    //     return
    // }


    // function checkWin(player) {
    //     if ((morskiShax[0][0] == player && morskiShax[0][1] == player && morskiShax[0][2] == player) ||
    //         (morskiShax[1][0] == player && morskiShax[1][1] == player && morskiShax[1][2] == player) ||
    //         (morskiShax[2][0] == player && morskiShax[2][1] == player && morskiShax[2][2] == player) ||

    //         (morskiShax[0][0] == player && morskiShax[1][0] == player && morskiShax[2][0] == player) ||
    //         (morskiShax[0][1] == player && morskiShax[1][1] == player && morskiShax[2][1] == player) ||
    //         (morskiShax[0][2] == player && morskiShax[1][2] == player && morskiShax[2][2] == player) ||

    //         (morskiShax[0][0] == player && morskiShax[1][1] == player && morskiShax[2][2] == player) ||
    //         (morskiShax[0][2] == player && morskiShax[1][1] == player && morskiShax[2][0] == player)) {
    //     }
    //     return true;
    // }
function equalNeigbors(array) {
    let count = 0;
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            
            let curP = array[row][col];

            let nextR = array[row][col + 1];
            if (curP === nextR) {
                count++;
            }

            if (row + 1 < array.length) {
                let curD = array[row + 1][col];
                if (curP === curD) {
                    count++;
                }
            }

        }
    }
    console.log(count);
}
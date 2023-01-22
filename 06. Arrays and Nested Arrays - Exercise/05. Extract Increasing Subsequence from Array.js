function extractIncreasingSubsequenceFromArray(array) {
    let output = [];
    let max = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < array.length; index++) {
        let curNum = array[index];
        if (curNum >= max) {
            max = curNum;
            output.push(curNum);
        }
    }
    //console.log(output.join(" "));
    return output;
}
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);

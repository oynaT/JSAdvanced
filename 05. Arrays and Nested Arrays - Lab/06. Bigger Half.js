function biggerHalf(input){
    let sortArr = input.sort((a, b) => a - b);
    let half = sortArr.length / 2;
    if (half % 2 == 0){
        return result = sortArr.slice(half);
        //console.log(result);
    } else {
        return result = sortArr.slice(half);
        //console.log(result);
    }
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6, 29 , 1]);
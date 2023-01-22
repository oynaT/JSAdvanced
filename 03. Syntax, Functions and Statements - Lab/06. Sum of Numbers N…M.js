function sumOfNum(a,b){
    let sum = 0;
    let n = Number(a);
    let m = Number(b);

    for (let i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNum(-8,20);
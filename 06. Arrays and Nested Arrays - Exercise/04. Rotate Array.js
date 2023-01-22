function rotateArray(array, num){ 
    for (let index = 0; index < num; index++) {
        let el = array.pop();
        array.unshift(el);
    }
    console.log(array.join(` `));
}
rotateArray(['1', '2', '3','4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
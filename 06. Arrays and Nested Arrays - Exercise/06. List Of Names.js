function listOfNames(array){
    let sortedArr = array.sort((a,b) => a.localeCompare(b));
    let key = 1;
    array.forEach((name) => {
        console.log(`${key}.${name}`);
        key++;
    });
    // array.forEach((name, key) => {
    //     console.log(`${key + 1}.${name}`);
    // });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
function evenPositionElements(input){
    let resutl = [];
    for (const key in input) {
        if(key % 2 == 0){
            resutl.push(input[key]);
        }
    }
    console.log(resutl.join(' '));
}
evenPositionElements(['20', '30', '40', '50', '60']);
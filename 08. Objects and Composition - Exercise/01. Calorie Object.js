function calorieObject(input) {
    let result = {};
    for (let index = 0; index < input.length; index += 2) {
        let name = input[index];
        let calories = input[index + 1];
        result[name] = Number(calories);
    }
    console.log(result);

    return input.reduce((acc, curr, index) => {
        if(index % 2=== 0) acc[curr] = Number(input[index + 1]); //в reduce не можем да вземем елемента acc[curr + 1](не работи)
        return acc;                                                   //ние манипулираме масива и знаем на кой индекс сме Number(input[index + 1]);
    }, {})

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
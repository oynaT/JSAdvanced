function autoEngineeringCompany(input) {

    const carBrands = {};

    input.forEach(line => {

        let [brand, model, produce] = line.split(' | ');

        if (!carBrands[brand]) {

            carBrands[brand] = {};
        }
        if (!carBrands[brand][model]) {

            carBrands[brand][model] = 0
        }

        carBrands[brand][model] += Number(produce);

    });
    for (let brand in carBrands) {
        console.log(brand);
        Object.entries(carBrands[brand])
            .forEach(car => {
                console.log(`###${car[0]} -> ${car[1]}`)
            });
    };
}
autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);



    //with MAP()
    function autoEngineeringCompany2(input) {

        let brands = new Map();
    
        while (input.length > 0) {
    
            let [brand, model, produce] = input.shift().split(' | ');
            produce = Number(produce);
    
            if (!brands.has(brand)) {
                brands.set(brand, new Map());
            }
            if (brands.get(brand).has(model)) {
                brands.get(brand).set(model, brands.get(brand).get(model) + produce);
            } else {
                brands.get(brand).set(model, produce);
            }
        }
        for (let [brand, data] of brands) {
            console.log(brand);
            for (let [model, quantity] of data) {
                console.log(`###${model} -> ${quantity}`);
            }
        }
    }
    autoEngineeringCompany2([
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']);
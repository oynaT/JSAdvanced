function townPopulation(townArray) {
    let towns = {}
    for (const toStr of townArray) {
        let [name, population] = toStr.split(' <-> ');
        population = Number(population);
        if (!towns.hasOwnProperty(name)) {
            towns[name] = 0;
        }
        towns[name] += population;

        // if (towns[name] != undefined) {
        //     population += towns[name];
        // }
        // towns[name] = population;
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

    //2 начин за отпечатване...
    // console.log(Object
    //     .entries(towns)
    //     .map(([name, popilation]) => `${name} : ${popilation}`)
    //     .join(`\n`));
    
    //console.table(towns);
}
// townPopulation(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']);
townPopulation(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']);

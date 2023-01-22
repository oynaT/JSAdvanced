// function cityTaxes(name, population, treasury){
//     return {
//         name, population, treasury, taxRate: 10,
//         collectTaxes(){
//             this.treasury += this.population * this.taxRate;
//         },
//         applyGrowth(percent){
//             this.population += Math.floor(this.population * percent / 100);
//         },
//         applyRecession(percent){
//             this.treasury -= Math.floor(this.treasury * percent / 100);
//         },
//     };
// }
// let city = cityTaxes('Tortuga', 7000, 15000); 
// console.log(city);
// city.collectTaxes(); 
// console.log(city.treasury); 
// city.applyGrowth(5); 
// console.log(city.population);



function cityTaxes2(name, population, treasury){
  let result = {
        name,
        treasury,
        population,
        taxRate: 10,
        collectTaxes(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage){
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage){
            this.treasury -= Math.ceil(this.treasury * percentage / 100);
        }
    }
    return result;
}

let city = cityTaxes2('Tortuga', 7000, 15000); 
console.log(city);
city.collectTaxes(); 
console.log(city.treasury); 
city.applyGrowth(5); 
console.log(city.population);
city.applyRecession(15); 
console.log(city.treasury);


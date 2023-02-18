// Follow the steps to add a folder to .gitignore using UI
// Click Source Control on left pane
// Click on three dots at right top of Source Control tab
// Select View & Sort>View as Tree
// Right click on the folder you want to add to .gitignore
// Select Add to .gitignore
// You are done!


//HELP file

// %

// Aко искаш да разбереш колко са 20% от нещо:
// нещо * 0.20

// Ако искаш да махнеш 20% от нещо:
// нещо * 0.80

// Ако искаш да добавиш 20%:
// нещо * 1.20

// Ако искаш да разбереш едно нещо колко % е от друго нещо:

// делиш малкото на голямото и умножаваш по 100

// Като стигнеш до pipes in pool Ще го видиш нагледно. Добро утро. Отивам на кръщенкат


let different = Math.ceil(Math.abs(timeOfShow - timeLeft));

//Math.ceil
//Math.floof

//Целочислено деление пример;   totalPoints = Math.floof(totalPoints / 2);

Math.min('array or порменлива'); // Връща най-малкото число
Math.max('array or порменлива') // Връща най-голямото число


let rangeStart = firstChart.charCodeAt(); //charCodeAt() показва кода на символа от Аски таблицата
console.log(String.fromCharCode(currentChar)); //fromCharCode() превръща от string към чар символ-а


let numberAsString = number.toString(); // Кастваме числото 10000435 към стринг..

let currentNum = Number(numberAsString[index]); //Number каства полученото число към цифра от стринга..

let word = 'Test'; //String
let reversedWord = word.reverse(); // reverse() работи само с МАСИВИ!!!
let arr = ['1','2','3']; // Array
let reversedArr = arr.reverse(); // reverse() работи само с МАСИВИ!!!


let array = ['1','2','3'].join(' '); // превръща Array to String;
let text = 'Test'; //превръща String to Array 

let StringToArr = 'Test'; //String to Array Еxamp
let reverseStringToArr = StringToArr.split('').reverse(); - ['t','s','e','t']; 

//Array Advanced - FUNCTIONS 
cars = ['lada','trabant','bmv','audi',]

//push();
//добавя към края на масива (става на последен елемент в масива) 
cars.push('audi'); 
cars.push('moskvich' , 'skoda'); // може да добавя повече от един елемент в масива
let CarLenght = cars.push('moskvich' , 'skoda' , 'honda');                               // метода push връща новата дължината ма масива   
console.log('Count ', CarLenght);

//pop();
//маха/изтрива последният елемент от масива  - Constantna сложност!
cars.pop();  
let lastCar = cars.pop(); //може да запазим махнатият елемент от масива  
console.log(lastCar);

//shift();
//маха/изтрива първият елемент от маса и го пренарежда !!!! сложност - N
cars.shift();
let fistCar = cars.shift(); // така може да вземем и отпечатаме 1-вият елемент който сме махнали..
console.log(fistCar); 

//unshift();
//добавя най-отпред на масива 
cars.unshift();

//slice();
//създава нов масив базиран на елементите от оригиналният масив (оригиналният масив не се променя) (Нарича се немутиращ метод!!!)
//приема start to end -> cars.slice(0,2); изрязва от 0 index до index 2 но без него тоест: само index 1 и 2 
//Винаги връща масив!!
cars.slice(0,2);

//ако подадем един параметър в случая 2 за end ще вземе всички елементи от index 2 до края на масива!!
cars.slice(2);

//прави копие на  масива в нова променлива !!!
let newCarArr = cars.slice();

//може да взимаме елементи с отрицателни индекси
cars = ['lada','trabant','bmv','audi',]
let lastCarIs = cars.slice(-1); //let lastCarIs = cars.slice(-2);  console.log(lastCarIs); -> ['bmv','audi',]
console.log(lastCarIs); // Върща последният елемент от масива като масив audi -> ['audi']


//splice();
//маха и добавя елементи към масива едновременно !!(мутира оригиналният масив, тоест променя го (Това е мутиращ метод))
cars = ['lada','trabant','bmv','audi',]
cars.splice(2,1); // изтрива от индекс 2 само 1 елемент -> 'bmv'  -> изтрит
let removedCars = cars.splice(2,1);
console.log(removedCars);

//изтриване 2 елемента
cars = ['lada','trabant','bmv','audi',]
cars.splice(1,2); // изтрива от индекс 1 , 2 елемент -> 'trabant','bmv' ->изтритите
let removeCars = cars.splice(2,1);
console.log(cars);
console.log(removeCars);

//добавяне на елемент
cars = ['lada','trabant','bmv','audi',]
cars.splice(1,0,'vw','taxi'); // добавя елемент започва от индекс 1 не изтрива нищо 0 и добавяме 2 елемента 'vw','taxi'
console.log(cars);  

//изтриване - добавяне
cars = ['lada','trabant','bmv','audi']
cars.splice(1,2,'honda'); // започва от индекс 1 изтрива 2 елемента ('trabant','bmv') и на тяхно място добавя honda
console.log(cars);  

//map(); 
//СЪЗДАВА нов масив -> с трансформирани елементи !! Не променя новият масив !!
let numbers = [2,4,1,6,10];
console.log(numbers);
let doubleNumbers = numbers.map(x => x * 2); //arrow function в map фунцкията, която умножава всички числа в масива * 2
console.log(doubleNumbers);
let dNumbers = numbers.map((x,i) => i % 2 === 0); // може да вземаме и index-a

//filter();
//Функция която прави булева проверка и ако е вярно я добавя в нов масив !! Не променя оригиналният масив!
let nums = [2,4,1,9,10,3];
let evenNumbers = nums.filter(num => num % 2 === 0); // Подаваме на филтъра по какъв критерий да проверява масива и да го записва в новият масив
let oddNumbers =  nums.filter(x => x % 2 !== 0);

console.log(nums);
console.log(evenNumbers);
console.log(oddNumbers);

//взимаме елемнтите на четна позиции x -> element i - index
let evenPositionNum = nums.filter((x, i) => i % 2 === 0); //взимам елемнтите на четните позиции


//sort(); 
//Мутира оригиналният масив (тоест променя го);
//default sort -> default sort elemnts by ASCI codes
let numberSort = [2,4,1,6,2,100];
let sortedNumbs = numberSort.sort();
console.log('default sort ', sortedNumbs);


//default sort limitation //По подразбиране сортира елементите по техните ASCI код номер-а
let numberForSort = [2,4,1,6,2,100];
let sortedNum = numberForSort.sort();
console.log('default sort limitation: ', sortedNum); //[1,100,3,4,9,10];


//Сортиране с 
let numberes = [2,4,1,6,2,100];
let sortN = numberes.sort((a,b) => {
    if (a < b){ // a - b = negative
        return -1;
    }else if (a > b){ // a - b = positive
        return 1;
    }else { // a - b == zero
        return 0;
    }
});
//ИЛИ за по кратко сортираме така (а - б) сортира  сортира от малко към голямо()
let sortNn = numberes.sort((a,b) => a - b);
console.log(sortN);

//Сортира наобратно от голямо към малко
let sortNm = numberes.sort((a,b) => b - a);
console.log(sortN);


// Сортиране на STRIGN -> localCompare() -> сортира по азбучен ред без значение главни малки букви...
cars = ['lada','trabant','bmv','audi','VW'];
let carSort = cars.sort((a,b) => a.localeCompare(b)); // от малко към голямо !!!
console.log(carSort);
let carSortba = cars.sort((a,b) => b.localeCompare(a)); // от голямо към малко !!!


//sort()
arr.sort(function(a, b){
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length;
  });

//DOM ADVANCED - Create dom element function 
function createDOMelement(type, text, className) {
    let result = document.createElement(type);
    result.textContent = text;
    if (className) {
        result.classList = className
    }
    return result
}

//UNIT TEST 
//За сравнение на МАСИВ !!!
//expect(testNumbers.averageSumArray([{title:'aa', genre:'a'}], 'a')).to.deep.equal(['aa']);
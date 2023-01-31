function calculator() {
    const calculatorObj = {
        init(selector1, selector2, resultSelector) {
            const num1Input = document.querySelector(`${selector1}`);
            const num2Input = document.querySelector(`${selector2}`);
            const output = document.querySelector(`${resultSelector}`);
            this.add = this.add.bind(this, num1Input, num2Input, output);
            this.subtract = this.subtract.bind(this, num1Input, num2Input, output);
        },
        add(num1, num2, result) {
            result.value = Number(num1.value) + Number(num2.value);
        },
        subtract(num1, num2, result) {
            result.value = Number(num1.value) - Number(num2.value);
        }
    }
 
    return calculatorObj;
}
 
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




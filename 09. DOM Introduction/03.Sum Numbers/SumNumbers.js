function calc() {
    // TODO: sum = num1 + num2
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let total = document.getElementById('sum');
    total.value = Number(num1) + Number(num2);
}
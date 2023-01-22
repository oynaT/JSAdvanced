function circleArea(input){
// A = P*R**
   let arg = typeof(input);
    if(arg === 'number'){
        let result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${arg}.`)
    }   
}
circleArea(5);

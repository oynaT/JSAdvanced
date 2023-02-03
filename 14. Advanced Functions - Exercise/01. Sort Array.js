function sortArray(data, type){
	return type === 'asc' 
	? data.sort((a, b) => a - b)
	: data.sort((a, b) => b - a); 
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))



function sortArray2(input, command) {

    const obj = {
        asc,
        desc
    }

    return obj[command](input)

    function asc(input) {
        return input.sort((a, b) => a - b)
    }

    function desc(input) {
        return input.sort((a, b) => b - a)
    }


}
console.log(sortArray2([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray2([14, 7, 17, 6, 8], 'desc'))
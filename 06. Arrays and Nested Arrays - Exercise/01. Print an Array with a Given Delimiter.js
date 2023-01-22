function printanArrayWithAGivenDelimiter(input, delimeter){
    let result = input.join(`${delimeter}`);
    console.log(result);        
}
printanArrayWithAGivenDelimiter([
'One',
'Two',
'Three',
'Four',
'Five'],
'-');
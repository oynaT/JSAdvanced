function sortAnArrrayBy2Criteria(array){
    array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(array.join('\n'));
}
sortAnArrrayBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);
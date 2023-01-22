function printEveryNthElementFromAnArray(input, number) {
   let result = [];
   for (let index = 0; index < input.length; index += number) {
      result.push(input[index]);
   }
   return result;
}

function printEveryNthElementFromAnArray(input, step) {
   return input.filter((element, index) => index % step == 0);
}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
// printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2);
// printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);
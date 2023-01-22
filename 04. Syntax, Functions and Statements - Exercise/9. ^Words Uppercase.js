
function wordsUppercase(input) {
    let reg = /\w+/g;
    let found = input.match(reg);
    console.log(found.join(', ').toUpperCase());
}
wordsUppercase('Hi, how are you?');
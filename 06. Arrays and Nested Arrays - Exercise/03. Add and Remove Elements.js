function addAndRemoveElements(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 'add') {
            result.push(index + 1);
        } else {
            result.pop();
        }
    }
    if (result == 0) { //or !result.lenght
        console.log(`Empty`);
    } else {
        console.log(result.join('\n'));
    }
}
addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add']);
addAndRemoveElements([
    'remove',
    'remove',
    'remove']);
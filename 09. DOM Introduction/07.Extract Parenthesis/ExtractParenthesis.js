function extract(elementId) {
    let param = document.getElementById(elementId).textContent;
    let pattern = /\((?<name>(\s*\w+)*)\)/g;
    let result = [];

    let match = pattern.exec(param);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(param);
    }
    return result.join('; ');
    //document.getElementById('output').textContent = result.join('; ');
}
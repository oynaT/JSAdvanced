function editElement(text, match, replace) {
    let content = text.textContent;
    let matcher = new RegExp(match, 'g');
    let edited = content.replace(matcher, replace);
    text.textContent = edited;
}
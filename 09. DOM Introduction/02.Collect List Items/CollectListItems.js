function extractText() {
    let el = document.getElementById('items');
    let text = el.textContent;
    let textArea = document.getElementById('result');
    textArea.value = text;
}
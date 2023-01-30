function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));

    for (const input of inputs) {
        input.addEventListener('blur', () => {
            input.parentElement.classList = 'blurred';
        })
        input.addEventListener('focus', () => {
            input.parentElement.classList = 'focused';
        })
    }
}
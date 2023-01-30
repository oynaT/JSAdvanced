function attachGradientEvents() {
    const line = document.getElementById('gradient');

    line.addEventListener('mousemove', (event) => {
        const x = event.offsetX;
        const percent = Math.floor(x / 300 * 100);
        document.getElementById('result').textContent = percent +'%';
    })
}
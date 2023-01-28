function solve() {
    const firstOptions = document.createElement("option");
    const secondOptions = document.createElement("option");
    firstOptions.value = "binary";
    secondOptions.value = "hexadecimal";
    firstOptions.innerHTML = "Binary";
    secondOptions.innerHTML = "Hexadecimal";

    const menuToEl = document.getElementById('selectMenuTo');
    menuToEl.appendChild(firstOptions);
    menuToEl.appendChild(secondOptions);

    const button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", function () {
        const numInput = document.getElementById('input');
        const outputRes = document.getElementById('result');

        if (menuToEl.value === 'binary') {
            outputRes.value = Number(numInput.value).toString(2);
        } else if (menuToEl.value === 'hexadecimal') {
            outputRes.value = Number(numInput.value).toString(16).toUpperCase();
        }
    })
}
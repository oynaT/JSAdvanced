function solve() {
  let input = document.getElementById('text').value;
  let convetion = document.getElementById('naming-convention').value;
  let output = document.getElementById('result');

  const toPascalCase = (text) =>
    text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("");

  const toCamelCase = (text) => {
    text = toPascalCase(text);
    return text[0].toLowerCase() + text.slice(1);
  }

  if (convetion === 'Pascal Case') {
    output.textContent = toPascalCase(input);
  } else if (convetion === 'Camel Case') {
    output.textContent = toCamelCase(input);
  } else {
    output.textContent = 'Error!';
  }
}
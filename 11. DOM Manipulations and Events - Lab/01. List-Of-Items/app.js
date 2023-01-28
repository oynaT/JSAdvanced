function addItem() {
    const input = document.getElementById("newItemText").value;
    const li = document.createElement('li');
    li.textContent = input
    const toList = document.getElementById("items");
    toList.appendChild(li);
} 
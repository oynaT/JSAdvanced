function addItem() {
    const input = document.getElementById("newItemText"); //взимаме инпута с инфото
    const li = document.createElement('li'); //създаваме li таг елемент
    const btn = document.createElement('a'); //създаваме а таг елемент
    btn.href = '#'; //добавяме на а тага href
    btn.textContent = '[Delete]'; //добавяме текст на a href линка

    btn.addEventListener('click', () => li.remove()); // създаваме евент на бутона при клик да истрива li eлемента

    li.textContent = input.value; //на създадето LI добавяме валюто от инпута и като текст
    const toList = document.getElementById("items"); //взели сме ul таг елемента по клас
    toList.appendChild(li); //добавяме ли елемента с тест в ul-а
    li.appendChild(btn);// добавяме бутона в li tag-a
    input.value = "";//зачисваме добавената стойност от инпут полето
}
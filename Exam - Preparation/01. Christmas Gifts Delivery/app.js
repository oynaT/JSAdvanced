function solution() {
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift)

    function addGift() {
        const name = input.value;
        input.value = '';
        const element = createDOMelement('li', name, 'gift');
        const sendBtn = createDOMelement('button', 'Send', 'sendButton');
        const discardBtn = createDOMelement('button', 'Discard', 'discardButton');
        element.appendChild(sendBtn);
        element.appendChild(discardBtn);
        gifts.appendChild(element);

        giftsSort();
        //подваме параметри name, element защото ги имам тук декларирани
        sendBtn.addEventListener('click', () => sendGift(name, element));       //() => подаваме анонимна фукция,
        discardBtn.addEventListener('click', () => discarGift(name, element)); // защото при извикване на параметрите в sendGift функцията ще получи и евент,
        // а ние не искаме дурго освен параметрите
    }

    function sendGift(name, gift) {
        //remove element from original list
        gift.remove();
        //creat new list item
        const element = createDOMelement('li', name, 'gift');
        //add element to new list
        sent.appendChild(element);
    }
    function discarGift(name, gift) {
        //remove element from original list
        gift.remove();
        //creat new list item
        const element = createDOMelement('li', name, 'gift');
        //add element to new list
        discarded.appendChild(element);
    }

    function giftsSort() {
        Array.from(gifts.children) // така достъпваме в li елемента името тоест чаилда 
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            //с childNodes[0] взимам първият елемент от масива само името на подаръка
            .forEach(gif => gifts.appendChild(gif));
    }

    function createDOMelement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;
        if (className) {
            result.classList = className
        }
        return result
    }
}
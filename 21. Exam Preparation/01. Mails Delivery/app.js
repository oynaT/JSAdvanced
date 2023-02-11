function solve() {
    const recipientNameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const addToList = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const mailsList = document.getElementById('list');
    const sendList = document.querySelector('.sent-list');
    const deleteList = document.querySelector('.delete-list');

    addToList.addEventListener('click', addEmail);
    resetBtn.addEventListener('click', resetInput);

    function addEmail(event) {
        event.preventDefault();
        const name = recipientNameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (name == "" || title == "" || message == "") {
            return;
        }
        const element = document.createElement('li');

        element.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`;

        const sendBtn = element.querySelector('#send');
        sendBtn.addEventListener('click', sendMail);

        const deleteBtn = element.querySelector('#delete');
        deleteBtn.addEventListener('click', deleteMail);

        // append to first list
        mailsList.appendChild(element);
        reset();

        function sendMail() {
            const sendEl = document.createElement('li');
            sendEl.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;

            sendEl.querySelector('.delete').addEventListener('click', () => {
                const delList = document.createElement('li');
                delList.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`;
                deleteList.appendChild(delList);
                sendEl.remove();
            });
            sendList.appendChild(sendEl);
            element.remove();
        }

        function deleteMail() {
            const delList = document.createElement('li');
            delList.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`;
            deleteList.appendChild(delList);
            element.remove();
        }
    }

    function resetInput(event) {
        event.preventDefault();
        reset();
    }

    function reset() {
        recipientNameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
}
solve()
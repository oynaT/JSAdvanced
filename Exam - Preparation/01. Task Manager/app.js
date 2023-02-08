function solve() {
    const sections = document.querySelectorAll('section');
    const openDiv = sections.item(1).querySelectorAll('div').item(1);
    const inProgressDiv = sections.item(2).querySelectorAll('div').item(1);
    const completeDiv = sections.item(3).querySelectorAll('div').item(1);

    const inputTask = document.getElementById('task');
    const inputDescription = document.getElementById('description');
    const inputDate = document.getElementById('date');

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        const taskName = inputTask.value;
        const taskDesc = inputDescription.value;
        const taskDate = inputDate.value;

        if (taskName && taskDesc && taskDate !== '') {
            const article = createDOMelement('article');
            const h3 = createDOMelement('h3', taskName);
            const pDescr = createDOMelement('p', `Description: ${taskDesc}`);
            const pDate = createDOMelement('p', `Due Date: ${taskDate}`);
            const divFlex = createDOMelement('div', '', 'flex');
            const startBtn = createDOMelement('button', 'Start', 'green');
            const finishBtn = createDOMelement('button', 'Finish', 'orange');
            const deleteBtn = createDOMelement('button', 'Delete', 'red');

            divFlex.appendChild(startBtn);
            divFlex.appendChild(deleteBtn);

            article.appendChild(h3);
            article.appendChild(pDescr);
            article.appendChild(pDate);
            article.appendChild(divFlex);
            openDiv.appendChild(article);

            inputTask.value = "";
            inputDescription.value = "";
            inputDate.value = "";

            startBtn.addEventListener('click', () => {
                inProgressDiv.appendChild(article);
                startBtn.remove();
                divFlex.appendChild(finishBtn);
            });

            finishBtn.addEventListener('click', () => {
                finishBtn.remove();
                deleteBtn.remove();
                completeDiv.appendChild(article);
            });

            deleteBtn.addEventListener('click', () => {
                article.remove()
            });
        }
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
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




function solve2() {
    const inputTask = document.querySelector("#task");
    const inputDesc = document.querySelector("#description");
    const inputDate = document.querySelector("#date");
    const [inputSection, openSection, progressSection, completeSection] =
      document.querySelectorAll("section");
   
    const addBtn = document.querySelector("#add");
    addBtn.addEventListener("click", addToDo);
    function addToDo(event) {
      event.preventDefault();
      if (
        inputDate.value.trim() === "" ||
        inputDesc.value.trim() === "" ||
        inputTask.value.trim() === ""
      ) {
        return;
      }
      const article = document.createElement("article");
      const h3 = document.createElement("h3");
      h3.textContent = inputTask.value;
      const pDesc = document.createElement("p");
      pDesc.textContent = `Description: ${inputDesc.value}`;
      const pDate = document.createElement("p");
      pDate.textContent = `Due Date: ${inputDate.value}`;
      const divBtns = document.createElement("div");
      divBtns.classList.add("flex");
      const startBtn = document.createElement("button");
      startBtn.classList.add("green");
      startBtn.textContent = "Start";
      startBtn.addEventListener("click", startArticle);
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("red");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteArticle);
      divBtns.appendChild(startBtn);
      divBtns.appendChild(deleteBtn);
      article.appendChild(h3);
      article.appendChild(pDesc);
      article.appendChild(pDate);
      article.appendChild(divBtns);
      openSection.lastElementChild.appendChild(article);
      inputDate.value = "";
      inputDesc.value = "";
      inputTask.value = "";
      function deleteArticle() {
        article.remove();
      }
   
      function startArticle() {
        startBtn.remove();
        const finishBtn = document.createElement("button");
        finishBtn.classList.add("orange");
        finishBtn.textContent = "Finish";
        finishBtn.addEventListener("click", finishArticle);
        divBtns.appendChild(finishBtn);
        progressSection.lastElementChild.appendChild(article);
      }
   
      function finishArticle() {
        divBtns.remove();
        completeSection.lastElementChild.appendChild(article);
      }
    }
  }
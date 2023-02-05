window.addEventListener('load', solve);

function solve() {

    const input = {
        repairType: document.getElementById('type-product'),
        description: document.getElementById('description'),
        name: document.getElementById('client-name'),
        phone: document.getElementById('client-phone')
    };
    const lists = {
        received: document.getElementById('received-orders'),
        compleated: document.getElementById('completed-orders')
    };

    document.querySelector('#right form button').addEventListener('click', sendForm);
    

    function sendForm(event) {
        event.preventDefault();
        document.querySelector('.clear-btn').addEventListener('click', clear);
        // read input fields
        const repairType = input.repairType.value;
        const description = input.description.value;
        const name = input.name.value;
        const phone = input.phone.value;

        // validate input
        if (description == '' || name == '' || phone == '') {
            return;
        }

        // create div item 
        const div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `
          <h2>Product type for repair: ${repairType}</h2>
          <h3>Client information: ${name}, ${phone}</h3>
          <h4>Description of the problem: ${description}</h4>
      
      <button class="start-btn">Start repair</button>
      <button class="finish-btn">Finish repair</button>`;

        // * add functionality to buttons
        const startBtn = div.querySelector('.start-btn');
        const finishBtn = div.querySelector('.finish-btn');
        startBtn.addEventListener('click', start);
        finishBtn.addEventListener('click', finish);
        finishBtn.disabled = true;
        
         // append to first div
        lists.received.appendChild(div);

        // clear input fields in form
        input.repairType.value = '';
        input.description.value = '';
        input.name.value = '';
        input.phone.value = '';

        function start() {
            startBtn.disabled = true; 
            finishBtn.disabled = false;
        }

        function finish() {
            // move list item from first list to second list
            lists.compleated.appendChild(div);
            // remove action buttons
            startBtn.remove();
            finishBtn.remove();
        }

        function clear() {
            // set second list HTML to empty string
            div.remove();
        }   
    }  
}





function solve2() {
    let description = document.querySelector("#description");
    let clientName = document.querySelector("#client-name");
    let phone = document.querySelector("#client-phone");
    let repairType = document.querySelector("#type-product");
    let box = document.getElementById("received-orders");
    let completed = document.getElementById("completed-orders");

    let btn = document.querySelector("form button");
    btn.addEventListener("click", onClickSubmit);

    function onClickSubmit(ev) {
        ev.preventDefault();
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let phoneValue = phone.value;

        description.value = "";
        clientName.value = "";
        phone.value = "";

        if (descriptionValue != "" && clientNameValue != "" && phoneValue != "") {
            let newField = document.createElement("div");
            newField.className = "container";
            box.appendChild(newField);

            let typeField = createElements(
                "h2",
                {},
                `Product type for repair: ${repairType.value}`
            );
            let clientInfo = createElements(
                "h3",
                {},
                `Client information: ${clientNameValue}, ${phoneValue}`
            );
            let descriptionField = createElements(
                "h4",
                {},
                `Description of the problem: ${descriptionValue}`
            );
            let startBtn = createElements(
                "button",
                { className: "start-btn" },
                "Start repair"
            );
            let finishBtn = createElements(
                "button",
                { className: "finish-btn", disabled: true },
                "Finish repair"
            );

            function createElements(element, attr, content) {
                let newElement = document.createElement(element);
                newElement.textContent = content;
                for (let a in attr) {
                    newElement[a] = attr[a];
                }

                newField.appendChild(newElement);

                return newElement;
            }

            startBtn.addEventListener("click", onClickStart);

            function onClickStart(e) {
                startBtn.disabled = true;
                finishBtn.disabled = false;

                finishBtn.addEventListener("click", onClickFinish);

                function onClickFinish(event) {
                    let newDiv = document.createElement("div");
                    newDiv.className = "container";
                    completed.appendChild(newDiv);

                    newDiv.appendChild(typeField);
                    newDiv.appendChild(clientInfo);
                    newDiv.appendChild(descriptionField);

                    newField.remove();

                    let clearBtn = document.querySelector(".clear-btn");
                    clearBtn.addEventListener("click", clear);

                    function clear(ev2) {
                        newDiv.remove();
                    }
                }
            }
        }
    }
}

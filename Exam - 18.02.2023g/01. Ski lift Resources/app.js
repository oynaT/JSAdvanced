window.addEventListener('load', solve);

function solve() {
    let fistNameInput = document.getElementById('first-name');
    let LastNameInput = document.getElementById('last-name');
    let peopleCountInput = document.getElementById('people-count');
    let formDateInput = document.getElementById(`from-date`);
    let daysCountInput = document.getElementById(`days-count`);
    let nextStepBtn = document.getElementById(`next-btn`);
    nextStepBtn.addEventListener('click', nextStep);

    let ticketPreview = document.querySelector('.ticket-info-list');
    let confirmTicket = document.querySelector('.confirm-ticket');

    let mainContent = document.querySelector('#main');
    let bodyContent = document.querySelector('#body');
    
    function nextStep(event) {
        event.preventDefault();

        // read input fields
        const fitstName = fistNameInput.value;
        const lastName = LastNameInput.value;
        const peopleCount = peopleCountInput.value;
        const formDate = formDateInput.value;
        const daysCount = daysCountInput.value;

        // validate input
        if (fitstName == '' || lastName == '' || peopleCount == '' || formDate == '' || daysCount == '') {
            return;
        }
        // create div item 
        const li = document.createElement('li');
        li.className = 'ticket';
        li.innerHTML = `<article>
        <h3>Name: ${fitstName} ${lastName}</h3>
        <p>From date: ${formDate}</p>
        <p>For ${daysCount} days</>
        <p>For ${peopleCount} people</p>
        </article>
        <button class="edit-btn">Edit</button>                         
        <button class="continue-btn">Continue</button>`;

        //add functionality to buttons
        const editBtn = li.querySelector('.edit-btn');
        const continueBtn = li.querySelector('.continue-btn');
        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continueNext);
        nextStepBtn.disabled = true;

        // append to first div
        ticketPreview.appendChild(li);

        // clear input fields in form
        fistNameInput.value = '';;
        LastNameInput.value = '';
        peopleCountInput.value = '';;
        formDateInput.value = '';;
        daysCountInput.value = '';;

        function edit() {
            // populate input fields with values
            fistNameInput.value = fitstName;
            LastNameInput.value = lastName;
            peopleCountInput.value = peopleCount;
            formDateInput.value = formDate;
            daysCountInput.value = daysCount;
            nextStepBtn.disabled = false;
            // remove list item from list
            li.remove();
        }

        function continueNext() {
            // create div item 
            const confirmLi = document.createElement('li');
            confirmLi.className = 'ticket-content';
            confirmLi.innerHTML = `<article>
            <h3>Name: ${fitstName} ${lastName}</h3>
            <p>From date: ${formDate}</p>
            <p>For ${daysCount} days</>
            <p>For ${peopleCount} people</p>
            </article>
            <button class="confirm-btn">Confirm</button>                         
            <button class="cancel-btn">Cancel</button>`;

            //add NEXTS BUTTONS functionality to buttons
            const confirmBtn = confirmLi.querySelector('.confirm-btn');
            const cancelBtn = confirmLi.querySelector('.cancel-btn');
            confirmBtn.addEventListener('click', cancel);
            cancelBtn.addEventListener('click', confirm);


            confirmTicket.appendChild(confirmLi);
            li.remove();

            function cancel() {
                nextStepBtn.disabled = false;
                confirmLi.remove();
            }

            function confirm() {
                
                let h1 = document.createElement('h1');
                h1.className = 'thank-you';
                h1.textContent = 'Thank you, have a nice day!';
                const backBtn = document.createElement('button');
                backBtn.textContent = 'Back';
                backBtn.attributes.className = 'back-btn'
                backBtn.addEventListener('click', back);

                bodyContent.appendChild(h1);
                bodyContent.appendChild(backBtn);

               mainContent.innerHTML = '';
            }
        }
    }
}




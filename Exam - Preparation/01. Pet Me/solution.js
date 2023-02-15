function solve() {
    //get reference to elements
    const fileds = document.querySelectorAll("#container input");
    const addBtn = document.querySelector("#container button");
    const petList = document.querySelector("#adoption ul");
    const adoptedList = document.querySelector("#adopted ul");

    const input = {
        name: fileds[0],
        age: fileds[1],
        kind: fileds[2],
        owner: fileds[3],
    }
    //configure event listener
    addBtn.addEventListener('click', addPet);

    function addPet(event) {
        event.preventDefault();
        // read input fields
        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();
        // validate input   
        if (name == '' || input.age.value == '' || Number.isNaN(age) || kind == '' || owner == '') {
            return;
        }

        // create list item 
        const liPet = document.createElement('li');
        liPet.innerHTML = `<p><strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong></p><span>Owner: ${owner}</span><button>Contact with owner</button>`;

        const contactBtn = liPet.querySelector('button');
        contactBtn.addEventListener('click', contact);
       
         // append to first list
         petList.appendChild(liPet);
        // input.name.value = '';
        // input.age.value = '';
        // input.kind.value = '';
        // input.owner.value = '';

        Array.from(fileds).forEach(f => f.value = '');

        function contact() {
            // create list item 
            const liConf = document.createElement('div');

            liConf.innerHTML = `<input placeholder="Enter your names">
            <button>Yes! I take it!</button>`;

            const confirmBtn = liConf.querySelector('button');
            const inputConf = liConf.querySelector('input');

            confirmBtn.addEventListener('click', adopt.bind(null, inputConf, liPet));

            contactBtn.remove();
            liPet.appendChild(liConf);
        }
    }

    function adopt(input, liPet) {
        const newOwner = input.value.trim();
        if (newOwner == '') {
            return;
        }
        
        const checkBtn = document.createElement('button');
        checkBtn.textContent = 'Checked';
        checkBtn.addEventListener('click', check.bind(null, liPet));

        liPet.querySelector('div').remove();
        liPet.appendChild(checkBtn);

        liPet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(liPet);
    }

    function check(liPet) {
        liPet.remove();
    }
}


function solve2() {
    // TODO ...
    const form = document.getElementById('container');
    const petsList = document.querySelector('#adoption > ul');
    const adoptedList = document.querySelector('#adopted > ul');
 
    let [name, age, kind, owner, addBtn] = Array.from(form.children);
    addBtn.addEventListener('click', addPet);
 
    function addPet(e) {
        e.preventDefault();
        if (!(name.value && Number(age.value) && kind.value && owner.value)) {
            return;
        }        
 
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`
        let sOwner = document.createElement('span');
        sOwner.textContent = `Owner: ${owner.value}`;
        let contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';
 
        li.appendChild(p);
        li.appendChild(sOwner);
        li.appendChild(contactBtn);
        petsList.appendChild(li);
 
        contactBtn.addEventListener('click', makeContact);
    }
 
    function makeContact(e) {
        const parent = e.target.parentElement;
        e.target.remove();
 
        const takeBtn = el('button');
        takeBtn.textContent = 'Yes! I take it!';
 
        const div = el('div');
        const inputEl = el('input', '', { placeholder: 'Enter your names' });
 
        div.appendChild(inputEl);
        div.appendChild(takeBtn);
 
        parent.appendChild(div);
 
        takeBtn.addEventListener('click', (e) => {
            if (!inputEl.value) { return; }
 
            e.target.textContent = 'Checked';
            adoptedList.appendChild(e.target.parentElement.parentElement);
 
            const span = e.target.parentElement.parentElement.querySelector('span');
            span.textContent = `New Owner: ${inputEl.value}`;
 
            const checkBtn = el('button', 'Checked');
            e.target.parentElement.parentElement.appendChild(checkBtn);
            e.target.parentElement.remove();
 
            checkBtn.addEventListener('click', (ev) => {
                ev.target.parentElement.remove();
            });
        });
    }
 
    function el(type, content, attributes) {
        let result = document.createElement(type);
 
        if (content) {
            result.textContent = content;
        }
 
        if (attributes) {
            Object.assign(result, attributes);
        }
 
        return result;
    }
}
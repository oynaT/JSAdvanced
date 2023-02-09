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
        if (name == '' || input.age.value.trim() == '' || Number.isNaN(age) || kind == '' || owner == '') {
            return;
        }
        
        // create list item 
        const liPet = document.createElement('li');
        liPet.innerHTML = `<p>
            <strong>${name}</strong>
            Is a 
            <strong>${age}</strong>
            year old
            <strong>${kind}</strong>
            </p>
          <span>Owner: ${owner}</span>
          <button>Contact with owner</button>`;

        const contactBtn = liPet.querySelector('button');
        contactBtn.addEventListener('click', contact);
        // append to first list
        petList.appendChild(liPet);

        input.name.value = '';
        input.age.value = '';
        input.kind.value = '';
        input.owner.value = '';

        function contact() {
            // create list item 
            const liConf = document.createElement('div');
            liConf.innerHTML = `          
          <input placeholder = "Enter your names">
          <button>Yes! I take it!</button>`;
    
          const confirmBtn = liConf.querySelector('button');
          const inputConf = liConf.querySelector('input');

          confirmBtn.addEventListener('click', adopt.bind(null, inputConf ,liPet));
          contactBtn.remove();
          liPet.appendChild(liConf);
        }
    }
    function adopt(input, liPet){
        const newOwner = input.value.trim();
        if(newOwner == ""){
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

    function check(liPet){
        liPet.remove();
    }
}

    //     <p>
        //     <strong>${name}</strong>
        //     Is a 
        //     <strong>${age}</strong>
        //     year old
        //     <strong>${kind}</strong>
        //     </p>
        //   <span>Owner: ${owner}</span>
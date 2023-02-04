window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const block = document.getElementById('block');

  const contentPreview = document.getElementById('infoPreview')

  const contentInput = Array.from(document.querySelectorAll('#form input'));
  const contentLabel = Array.from(document.querySelectorAll('#form label'));
  contentInput.pop();

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (contentInput[1].value && contentLabel[1].value !== '') {

      for (let index = 0; index < contentInput.length; index++) {

        const liElement = document.createElement('li');
        liElement.textContent = `${contentLabel[index].textContent} ${contentInput[index].value}`;
        contentPreview.appendChild(liElement);
      }
      for (const input of contentInput) {
        input.value = '';
      }
      event.target.disabled = true;
      continueBtn.disabled = false;
      editBtn.disabled = false;
    }
  });

  editBtn.addEventListener('click', (event) => {
    const listContent = Array.from(contentPreview.childNodes);
    for (let index = 0; index < contentInput.length; index++) {
      contentInput[index].value = listContent[index].textContent.split(': ')[1];
      listContent[index].remove();
    }
    submitBtn.disabled = false;
    continueBtn.disabled = true;
    editBtn.disabled = true;
  });

  continueBtn.addEventListener('click', (event) => {
    block.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
  });

}


//solution 2 no for loops
function solution2() {
  let nameField = document.querySelector('#fname');
  let mailField = document.querySelector('#email');
  let phoneField = document.querySelector('#phone');
  let adressField = document.querySelector('#address');
  let postalField = document.querySelector('#code');

  let submitButton = document.querySelector('#submitBTN');

  let previewBox = document.querySelector("#infoPreview");

  //let actions = document.querySelector('.actions');
  let block = document.querySelector('#block');


  submitButton.addEventListener('click', (event) => {
      if (!nameField.value || !mailField.value) {
          return;
      }

      let name = nameField.value;
      let mail = mailField.value;
      let phone = phoneField.value;
      let address = adressField.value;
      let postal = postalField.value;

      let nameLI = document.createElement('li');
      nameLI.textContent = `Full Name: ${name}`;

      let mailLI = document.createElement('li');
      mailLI.textContent = `Email: ${mail}`;

      let phoneLI = document.createElement('li');
      phoneLI.textContent = `Phone Number: ${phone}`;

      let addressLI = document.createElement('li');
      addressLI.textContent = `Address: ${address}`;

      let postalLI = document.createElement('li');
      postalLI.textContent = `Postal Code: ${postal}`;

      previewBox.appendChild(nameLI)
      previewBox.appendChild(mailLI);
      previewBox.appendChild(phoneLI);
      previewBox.appendChild(addressLI);
      previewBox.appendChild(postalLI);

      nameField.value = '';
      mailField.value = '';
      phoneField.value = '';
      adressField.value = '';
      postalField.value = '';
      event.target.disabled = true; //disables submit button

      let editButton = document.querySelector('#editBTN');
      let continueButton = document.querySelector('#continueBTN');

      editButton.disabled = false;
      continueButton.disabled = false;

      editButton.addEventListener('click', (event) => {
          submitButton.disabled = false;
          editButton.disabled = true;
          continueButton.disabled = true;

          previewBox.removeChild(nameLI)
          previewBox.removeChild(mailLI);
          previewBox.removeChild(phoneLI);
          previewBox.removeChild(addressLI);
          previewBox.removeChild(postalLI);

          nameField.value = name;
          mailField.value = mail;
          phoneField.value = phone;
          adressField.value = address;
          postalField.value = postal;
      });

      continueButton.addEventListener('click', (event) => {
          block.innerHTML = '';
          let h3 = document.createElement('h3');
          h3.textContent = `Thank you for your reservation!`;
          block.appendChild(h3);
      });
  });
}
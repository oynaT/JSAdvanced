function solve() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");
    const tbody = document.getElementById("tbody");
    const addSalary = document.getElementById("sum");
   
    document.getElementById("add-worker").addEventListener("click", (e) => {
      e.preventDefault();
      if (
        fname.value &&
        lname.value &&
        email.value &&
        birth.value &&
        position.value &&
        salary.value
      ) {
        addEmployee(
          e,
          fname.value,
          lname.value,
          email.value,
          birth.value,
          position.value,
          salary.value
        );
        clearInputFields();
      }
    });
   
    function addEmployee(e, fname, lname, email, birth, position, salary) {
      e.preventDefault();
      const tr = createElement("tr");
      createElement("td", `${fname}`, tr);
      createElement("td", `${lname}`, tr);
      createElement("td", `${email}`, tr);
      createElement("td", `${birth}`, tr);
      createElement("td", `${position}`, tr);
      createElement("td", `${salary}`, tr);
      const td = createElement("td", "", tr);
      let fireBtn = createElement("button", "Fired", td);
      fireBtn.setAttribute("class", "fired");
      let editBtn = createElement("button", "Edit", td);
      editBtn.setAttribute("class", "edit");
      tbody.appendChild(tr);
   
      const currentSalary = Number(addSalary.textContent);
      const addedSalary = Number(salary);
      addSalary.textContent = (currentSalary + addedSalary).toFixed(2);
      editBtn.addEventListener("click", (e) =>
        editWorker(e, fname, lname, email, birth, position, salary)
      );
      fireBtn.addEventListener('click', (e) => fireEmployee(e, salary))
    }
   
    function targetNode (e, salary) {
      e.preventDefault();
      e.target.parentNode.parentNode.remove();
      reduceCurrentSalarySum(salary)
    }
    
    function fireEmployee(e, salary) {
      targetNode(e, salary)
    }
   
    function editWorker(
      e,
      firstName,
      lastName,
      emailAdddress,
      birthDate,
      currentPosition,
      currentSalary
    ) {
      targetNode(e, currentSalary)
      fname.value = firstName;
      lname.value = lastName;
      email.value = emailAdddress;
      birth.value = birthDate;
      position.value = currentPosition;
      salary.value = currentSalary;
   
    }
   
    function reduceCurrentSalarySum(salary) {
   
      const sumSalary = Number(addSalary.textContent);
      addSalary.textContent = Math.abs((Number(salary)- sumSalary)).toFixed(2);
    }
   
    function createElement(type, content, parent) {
      const element = document.createElement(type);
      element.textContent = content;
      if (parent) {
        parent.appendChild(element);
      }
      return element;
    }
   
    function clearInputFields() {
      fname.value = "";
      lname.value = "";
      email.value = "";
      birth.value = "";
      position.value = "";
      salary.value = "";
    }
  }
  solve();



  
// SOLUTION 2
  function solve2() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birthDate = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', hire)
 
    const tbody = document.getElementById('tbody');
    const sumSalary = document.getElementById('sum');
 
 
    function hire(e) {
        e.preventDefault();
        if (!firstName.value || !lastName.value || !email.value || !birthDate.value || !position.value || !salary.value) {
            return
        }
        const fName = firstName.value;
        const lName = lastName.value;
        const emailInput = email.value;
        const birthDateInput = birthDate.value;
        const positionInput = position.value;
        const salaryInput = salary.value;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${fName}</td>
        <td>${lName}</td>
        <td>${emailInput}</td>
        <td>${birthDateInput}</td>
        <td>${positionInput}</td>
        <td>${salaryInput}</td>
        <td><button class ='fired'>Fired</button> <button class ='edit'>Edit</button></td>
        `
        tr.querySelector('.fired').addEventListener('click', fired)
        tr.querySelector('.edit').addEventListener('click', edit)
        tbody.appendChild(tr);
        sumSalary.textContent = (Number(sumSalary.textContent) + Number(salaryInput)).toFixed(2);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birthDate.value = '';
        position.value = '';
        salary.value = '';
 
        function fired() {
            sumSalary.textContent = (Number(sumSalary.textContent) - Number(salaryInput)).toFixed(2);
 
            tr.remove();
        }
        function edit() {
            sumSalary.textContent = (Number(sumSalary.textContent) - Number(salaryInput)).toFixed(2);
            firstName.value = fName;
            lastName.value = lName;
            email.value = emailInput;
            birthDate.value = birthDateInput;
            position.value = positionInput;
            salary.value = salaryInput;
            tr.remove();
        }
    }
}
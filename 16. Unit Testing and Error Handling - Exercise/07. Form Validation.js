function validate() {
    let patternUsername = new RegExp(/^[A-Za-z0-9]{3,20}$/, 'g');
    let patternPassword = new RegExp(/^\w{5,15}$/, 'g');
    let patternEmail = new RegExp(/^[^@.]+@[^@]*\.[^@]*$/, 'g');
 
    let hiddenDiv = document.getElementById('valid');
 
    let companyInfoFieldSet = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
 
    let validators = [patternUsername, patternEmail, patternPassword, patternPassword];
 
    let inputs = Array.from(document.querySelectorAll('form fieldset:nth-child(1) div input'));
    let checkBox = inputs.pop();
    let password = inputs[2];
    let confirmPassword = inputs[3];
 
    let buttonSubmit = document.getElementById('submit');
 
    checkBox.addEventListener('change', (event) => {
        if(event.target.checked) {
            companyInfoFieldSet.style.display = 'block';
        }else {
            companyInfoFieldSet.style.display = 'none';
        }
    })
 
 
 
 
    buttonSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        let valid = true;
        for(let i = 0; i < validators.length; i++) {
            let input = inputs[i];
            let validator = validators[i];
 
            if((input.value).match(validator) === null) {
                valid = false;
                input.style.cssText = 'border-color: red;';
            }else {
                input.style.cssText = 'border: none;';
            }
        }
 
        let result = confirmPasswordCheck(password, confirmPassword);
        if(!result) {
            valid = false;
        }
 
 
        if(checkBox.checked) {
            if(companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.cssText = 'border: none;';
            }else {
                valid = false
                companyNumber.style.cssText = 'border-color: red;';
            }
        }
 
        if(valid) {
            hiddenDiv.style.display = 'block';
        }else {
            hiddenDiv.style.display = 'none';
        }
    })
    function confirmPasswordCheck(pass, confirmPass) {
        if(pass.value === confirmPass.value) {
            // pass.style.cssText = 'border: none;';
            return true
        }else {
            pass.style.cssText = 'border-color: red;';
            confirmPass.style.cssText = 'border-color: red;';
            return false;
        }
    }
}
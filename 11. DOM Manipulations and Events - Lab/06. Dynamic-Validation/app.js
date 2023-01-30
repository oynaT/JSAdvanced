function validate() {
    const mailInput = document.getElementById('email');
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

    mailInput.addEventListener('change', function(){
        if (!mailInput.value.toLowerCase().match(pattern)) {
            mailInput.className = 'error';
        }else{
            mailInput.className = '';
        }
    });
}
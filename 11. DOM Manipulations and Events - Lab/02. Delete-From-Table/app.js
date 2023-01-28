function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value;
    const list = Array.from(document.querySelectorAll('#customers tbody tr'));

    let deleted = false;
    for(let el of list){
        const current = el.children[1];
        if(current.textContent == input){
            el.remove();
            deleted = true;
        }
     };
     document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}
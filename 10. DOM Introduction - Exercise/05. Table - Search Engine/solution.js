function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const input = document.querySelector('#searchField');

   function onClick() {
      const list = Array.from(document.querySelectorAll('tbody tr'));
      list.forEach((el) => {
         if(el.textContent.toLowerCase().includes(input.value.toLowerCase().trim())){
            el.classList.add('select');
         } else {
         el.classList.remove('select');
         }
       });
   input.value = ""; //Зачитваме инфото в инпут полето.
}
}
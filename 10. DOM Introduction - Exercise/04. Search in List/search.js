function search() {
  const list = Array.from(document.querySelectorAll('#towns li'));
  const output = document.querySelector('#result') ;
  const searchIn = document.querySelector('#searchText');
  let counter = 0;

   list.forEach((el) => {
      if(el.textContent.includes(searchIn.value)){
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         counter++;
      }else{
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      }
   });
   output.textContent = `${counter} matches found`;
}

function solve() {
   let outputArea = document.querySelector('textarea');
   let priceTotal = 0;
   let listOfUniqueOrders = [];

   Array.from(document.querySelectorAll('.add-product')).forEach((button) =>
      button.addEventListener('click', onClick)
   );
   function onClick(event) {
      //console.log(event.target.parentElement.parentElement);
      const parent = event.target.parentElement.parentElement;
      let productName = parent.querySelector(`div.product-details > div`).textContent;
      let productPrice = parent.querySelector(`div.product-line-price`).textContent;
      if (!listOfUniqueOrders.includes(productName)) {
         listOfUniqueOrders.push(productName);
      }
      let result = `Added ${productName} for ${productPrice} to the cart.\n`;
      priceTotal += Number(productPrice);
      outputArea.value += result;
   }

   let buttonCheckout = document.querySelector('.checkout');
   buttonCheckout.addEventListener('click', function () {
      let finalResult = `You bought ${listOfUniqueOrders.join(', ')} for ${priceTotal.toFixed(2)}.`;
      outputArea.value += finalResult;
      disableButtons();
   });

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button.add-product'));
      buttons.forEach(button => button.disabled = true);
   }
}

















function solve2() {
   let textArea = document.querySelector('body > div > textarea');
   let totalPrice = 0;
   let listOfUniqueThings = [];
   let addBtn = document.getElementsByClassName('add-product');

   let arrayAddBtn = Array.from(addBtn);
   for (let i = 0; i < arrayAddBtn.length; i++) {
      arrayAddBtn[i].addEventListener('click', function one() {
         let name = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
         let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
         if (!listOfUniqueThings.includes(name)) {
            listOfUniqueThings.push(name);
         }
         let result = `Added ${name} for ${price} to the cart.\n`;
         totalPrice += Number(price);
         textArea.value += result;
      });
   }

   let checkOut = document.querySelector('body > div > button');
   checkOut.addEventListener('click', function final() {
      let finalSting = `You bought ${listOfUniqueThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
      textArea.value += finalSting;
      disableButtons();
   });

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }
}
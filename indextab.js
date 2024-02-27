document.addEventListener('DOMContentLoaded',function() {
   
const addToCartButtons = document.querySelectorAll('.add-to-cart');
   
const cart = document.getElementById('cart');


    addToCartButtons.forEach(button
{ 
        button:addEventListener('click',function() {
           
const imageSrc =
this.getAttribute('data-image');
           
const imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            cart.appendChild(imageElement);
        })
    });
});
 
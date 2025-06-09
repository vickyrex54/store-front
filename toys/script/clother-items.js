import { addToCart,calculateCartQuantity} from "../data/clothes-checkout.js";

import {  products } from "../data/clothes.js";




  let itemsHTML = ''; 

products.forEach((product)=>{
  
    itemsHTML +=
    `
  <div class="shoes">
      <div><img  src="${product.image}" class= "img"></div>
      <h1>  ${product.name} </h1>
       <p> $ ${product.priceCents/100}</p>
       <button  class = "js-cartItem"
       data-product-id = "${product.id}"
       >
       BUY</button>
        </div>


`
})

function updateCartQuantity (){
  
    const cartQuantity = calculateCartQuantity(); 

   document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
   
};






console.log(itemsHTML)

document.querySelector('.js-clothes-js').innerHTML = itemsHTML;

document.querySelectorAll ('.js-cartItem') // so with this code we can select all the button in the html 
.forEach((button)=>{   // then we use the foreach loop to loop the button, so anytime the button is clicked 
  // add a product . 
button.addEventListener('click',()=>{
 //const id = button.dataset.cartId;  // data set has to be written in camel  case to be accesed. 
  // porpuse of data attribute is that we can attached any information to an element . 
//dataset give us all the data attribute that are attached to the element .
const productId = button.dataset.productId
addToCart(productId)
updateCartQuantity();
console.log(cart)
//updateCartQuantity()
 //console.log(itemId);
})

})

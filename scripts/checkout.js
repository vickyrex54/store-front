import { cart, removeFromCart , calculateCartQuantity} from "../data/checkout-data.js";
import {  getProduct} from "../data/store-item.js";
import { total } from "./total.js";



 let cartQuantity = '';

cart.forEach( (cartItem) =>{
      // we this to search for full products
    const productId = cartItem.productId; 
    // since we have given cart a new value of cartItem in the foreach  then i can access the object productId 
    // in the cart object.
         
     
    const matchingProduct = getProduct(productId); 





 
 cartQuantity +=  `
<div  class="summary js-cart-item-container-${matchingProduct.id}">
            
              <img class="product-image"
                src="${matchingProduct.image}">
           

              <div class="cart-item">
                ${matchingProduct.name}
                </div>
                <div class="cart-price">
                  $${matchingProduct.priceCents/100}

                  <span> 
                   quantity: (<span  class = "quantity-label

                   js-quantity-label-${matchingProduct.id}
                   "> ${cartItem.quantity})</span>
                  </span>
                  </div>

                  <button 
                  class = "js-delete-link"  
                  data-product-id = "${matchingProduct.id}" 
                  > delete</button>
                 
            </div>

`

})



 
 


document.querySelector('.js-cart-summary').innerHTML = cartQuantity;

document.querySelectorAll('.js-delete-link').forEach((link)=>{

link.addEventListener('click', ()=>{
  const productId = link.dataset.productId; 
 
 removeFromCart(productId);
 //console.log (cart);


const container =  document.querySelector( // help get the element we want to remove 
`.js-cart-item-container-${productId}`
  
 );
 container.remove(); 
total(); 
 

})
})



console.log('clicked')

 import {cart} from "../data/checkout-data.js"
import { getProduct } from "../data/store-item.js";

 export function total (){
let total = 0; 
cart.forEach((cartItem)=>{
   const product  = getProduct(cartItem.productId) 
   
   total += product.priceCents*cartItem.quantity
  //total +=  product.priceCents*cartItem.quantity;
})

console.log(total)


const TOTAL = `
<h1>TOTAL = $${total/100}</h1>
<button id= "order-button">PLACE ORDER</button>

`;

 

document.querySelector('.js-total-summary').innerHTML = TOTAL; 


const placeorder = document.getElementById('order-button');
placeorder.addEventListener('click', ()=>{
  let message = 'GOOD DAY PLS I WOULD LIKE TO BUY  : \n';
  cart.forEach((cartItem)=> {
    const product = getProduct(cartItem.productId);
    message += `${product.name} - $${product.priceCents/100}- Quantity: ${cartItem.quantity} -
    total: $${(product.priceCents * cartItem.quantity)/100}
    
    \n`;
    console.log(message)
  })
  
  const whatsappURL = `https://api.whatsapp.com/send?phone=+2348149435269&text=${encodeURIComponent(message)}`;


  window.open(whatsappURL, '_blank');
})







 }

 total ();  


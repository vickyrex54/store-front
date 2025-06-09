import {item} from "../data/clothes-checkout.js"
import { getProduct } from "../data/clothes.js";

 export function total (){
let total = 0; 



item.forEach((cartItem)=>{
   const product  = getProduct(cartItem.productId)

   total+= product.priceCents*cartItem.quantity
 // total +=  product.priceCents*cartItem.quantity;
})

console.log(total)


const TOTAL = `
<h1>TOTAL = $${total/100}</h1>

`;

 

document.querySelector('.js-total-summary').innerHTML = TOTAL; 
 }

 total (); 


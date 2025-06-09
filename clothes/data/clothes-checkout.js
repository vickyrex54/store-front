export let item = JSON.parse(localStorage.getItem('item'));

if (!item) {
  item = [{
   productId:"16" 
}]
}

console.log(item)

function saveToStorage() {
  localStorage.setItem('item', JSON.stringify(item));
}

export function addToCart(productId) {
  let matchingItem;

  item.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    item.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
    
  }

  saveToStorage();
}



        export function calculateCartQuantity(){
          let cartQuantity = 0;
   item.forEach((carthItem)=>{
    cartQuantity += carthItem.quantity
  
  })
   return cartQuantity ; 
 
};

export function removeFromCart(productId) {
  const newCart = [];

  item.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  item = newCart;

  saveToStorage();
}





export function updateQuantity(productId, newQuantity){
     let matchingItem; 

     item.forEach((cartItem)=> {
         if (productId === cartItem.productId){
          matchingItem = cartItem; 
         }

     })

   matchingItem.quantity = newQuantity; 

   saveToStorage(); 

}


/* export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
} */
export function getProduct(productId){
        
    let matchingProduct; 

    // merges the result to see if thier the productid is the same in the different file 
    // then if its same then 

    products.forEach((product)=>{      // checking if product.id  from the poruct.js file 
    // is equal to productId in the carth.js file 
        if (product.id === productId)// so since porduct.id === productId and this productId = cartItem.
        // productId 
         matchingProduct = product; 

    });

    return matchingProduct; 

   }
 
 



export  const products = [
    {
 id: "1",
 image: "images.jpeg",
 name: "jordans",
 priceCents: 20099

},



 {
 id: "2",
 image: "redshoes 2.png",
 name: "red air balance",
 priceCents: 40099

},


 {
 id: "3",
 image: "shoes.jpg",
 name: "camo-color nike",
 priceCents: 50099

}





 ,{
 id: "4",
 image: "23596605_NjIwLTYyMC1jNThjZDgwOTQ5.webp",
 name: "nike(football)",
 priceCents: 70099

}



,{
 id: "5",
 image: "IMG-20250602-WA0014.jpg",
 name: "addidas(5)",
 priceCents: 90099

}




,{
 id: "6",
 image: "IMG-20250602-WA0011.jpg",
 name: "blue dance shoes",
 priceCents: 30099

},




,{
 id: "7",
 image: "IMG-20250602-WA0010.jpg",
 name: "black shoes",
 priceCents: 60099

},




,{
 id: "8",
 image: "IMG-20250602-WA0013.jpg",
 name: "black shoes",
 priceCents: 1000099

},





]
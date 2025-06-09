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
 id: "9",
 image: "1 (1).jpg",
 name: "black school bag",
 priceCents: 20099

},



 {
 id: "10",
 image: "1 (2).jpg",
 name: "hikking bag",
 priceCents: 40099

},


 {
 id: "11",
 image: "1.jpg",
 name: "hand bag",
 priceCents: 50099

}





 ,{
 id: "12",
 image: "41lbDPG0S3L._AC_SY1000_.jpg",
 name: "star ship bag ",
 priceCents: 70099

}



,{
 id: "13",
 image: "61H2guAPGuL._AC_UY1000_.jpg",
 name: "off-white, yellow bag",
 priceCents: 90099

}




,{
 id: "15",
 image: "61nY1dX22fL._AC_SL1080_.jpg",
 name: "blue bag ",
 priceCents: 30099

},




,{
 id: "16",
 image: "61UDx9jF0mL._AC_SL1315_.jpg",
 name: "bee black bag",
 priceCents: 60099

},




,{
 id: "17",
 image: "school-bags-for-high-school-boys-11553968268xlnvzrbubx.jpg",
 name: "white chargiing bag",
 priceCents: 1000099

},





]
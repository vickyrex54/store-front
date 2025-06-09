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
 image: "00ad0907c8d90980d1ee12807182754f.webp",
 name: "women ankara quality assured",
 priceCents: 20099

},



 {
 id: "10",
 image: "00d86c77-74ba-4dc7-9d2b-c1c9a44bcc3e.jpeg",
 name: "women ankara quality assured ",
 priceCents: 40099

},


 {
 id: "11",
 image: "4f88a48d-abe0-4c8f-854c-cc3eae95c711.jpeg",
 name: "women ankara quality assured",
 priceCents: 50099

}





 ,{
 id: "12",
 image: "nike-m-nsw-he-wr-jkt-hd-179484-ar2191-133-960.webp",
 name: "nike sports gear  ",
 priceCents: 70099

}



,{
 id: "13",
 image: "nike13-windrunner.jpg",
 name: "nike mens sport gear",
 priceCents: 90099

}




,{
 id: "15",
 image: "nybg-1-data (1).jpg",
 name: "white long gown",
 priceCents: 30099

},




,{
 id: "16",
 image: "sportswear-tech-fleece-windrunner-hoodie-4BdVWb.png",
 name: "means white sports gear ",
 priceCents: 60099

},




,{
 id: "17",
 image: "FA Luxury.jpeg",
 name: "women ankara quality assured",
 priceCents: 1000099

},





]
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
 image: "1lb_508_small-reds-350x500.png",
 name: "brown camellie beans",
 priceCents: 20099

},



 {
 id: "10",
 image: "61-zcm13wrl-sl1000--500x500.jpg",
 name: "coke",
 priceCents: 40099

},


 {
 id: "11",
 image: "1702870759303.jpg",
 name: "big bull rice 1-bag",
 priceCents: 50099

}





 ,{
 id: "12",
 image: "16327343151a5af9ec57418bcffc2e3aad6b29f331.jpg",
 name: "one-pack spaghetti ",
 priceCents: 70099

}



,{
 id: "13",
 image: "ppack101-_1.png",
 name: "one-pack-caprison",
 priceCents: 90099

}




,{
 id: "15",
 image: "Blweewwwed.png",
 name: "one pack noodles ",
 priceCents: 30099

},




,{
 id: "16",
 image: "p61.jpg",
 name: "dano milk",
 priceCents: 60099

},




,{
 id: "17",
 image: "GarriIjebu_Grade1_10kgBag.jpg",
 name: "GARRI ONE BAG",
 priceCents: 1000099

},


,{
 id: "18",
 image: "arla-dano-skimmed-uht-1l-africa.png",
 name: "CATOON MILK",
 priceCents: 1000099

},




,{
 id: "18",
 image: "s-l1200.jpg",
 name: "BEANS-ONEPACK",
 priceCents: 1000099

},





,{
 id: "19",
 image: "three-crowns-image-3-Copy-2-930x609.png",
 name: "THREE CROWN MILK",
 priceCents: 1000099

},



,{
 id: "20",
 image: "Fanta-pack.png",
 name: "ONE-PACK OF FANTA-DRINK",
 priceCents: 1000099

},





,{
 id: "20",
 image: "Dano.jpg",
 name: "DANO POWDERED MILK",
 priceCents: 1000099

},







,{
 id: "20",
 image: "sachet-hollandia.webp",
 name: "HOLLANDIA ",
 priceCents: 1000099

},









,{
 id: "20",
 image: "Indomie-Onion-Chicken-Flavour-hungry.jpg",
 name: "ONION FLAVOURED NOODLES",
 priceCents: 1000099

},





]
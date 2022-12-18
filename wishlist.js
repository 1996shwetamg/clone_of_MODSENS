let cont=document.getElementById("wishlist-container");
let data=JSON.parse(localStorage.getItem("wishlist"))||[];
show(data)

  function show(data){
  cont.innerHTML=null;
 
  data.forEach((element,index)=>{
 

 let card=document.createElement("div");

  let image=document.createElement("img");
  image.setAttribute("src",element.image); 

  let brand=document.createElement("h2");
  brand.innerText=element.title;

  let price=document.createElement("h3");
  price.innerText="$"+element.price;

  let category=document.createElement("p");
  category.innerText=element.category;
  
  let buy=document.createElement("button")
  buy.innerText="BUY NOW";

    buy.addEventListener("click",()=>{
    
window.location.href="payment.html";
  })
  

  cont.append(card);
  card.append(image,brand,price,category,buy)
  
  })

 
}
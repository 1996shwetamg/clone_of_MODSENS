let cont=document.getElementById("cart-container");
let total=document.getElementById("cart-total")
let data=JSON.parse(localStorage.getItem("cart"))||[];
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
  
  let increment=document.createElement("button")
  increment.innerText="+"

  let quantity=document.createElement("span")
  quantity.innerText=element.quantity;
  
  let decrement=document.createElement("button")
  decrement.innerText="-"

  let remove=document.createElement("button")
  remove.innerText="Remove";

    remove.addEventListener("click",()=>{
    data.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(data));
    show(data);


  })
  
  increment.addEventListener("click",()=>{
    quantity.innerText++;
 price.innerText=element.price*quantity.innerText;
sum=sum+element.price;
total.innerText=sum;
  })
  decrement.addEventListener("click",()=>{
    
   let prev=element.price;
    quantity.innerText--;
    price.innerText=price.innerText-prev;
    sum=sum-element.price;
    total.innerText=sum;
  })

  

  cont.append(card);
  card.append(image,brand,price,category,increment,quantity,decrement,remove)
  
  })

  let sum=0
  for(i=0;i<data.length;i++){
    product=data[i].price*data[i].quantity;
    sum+=product;

  }
  console.log(sum);
  total.innerText=sum;
 
}
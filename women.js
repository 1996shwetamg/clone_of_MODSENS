
    // Write all necessery JS here 
    let cont=document.getElementById("product-container")
  let filterselect=document.getElementById("filter1");
let fetcheddata=[];

  filterselect.addEventListener("change",()=>{
   let filtered=fetcheddata.filter((ele)=>{
    if(ele.category===filterselect.value){
      return true;
    }else{return false}
   })
   show(filtered);
  })


  fetch("https://fakestoreapi.com/products")

  .then((res)=>{

    return res.json();
  })
  .then((actualdata)=>{
    fetcheddata=actualdata;
  show(actualdata)
  console.log(actualdata);
 
  })
  .catch((error)=>{
    console.log(error);
  })


  function show(data){
    cont.innerHTML=null;
  data.forEach((element)=>{
 

 let card=document.createElement("div");

  let image=document.createElement("img");
  image.setAttribute("src",element.image); 

  let brand=document.createElement("h2");
  brand.innerText=element.title;

  let price=document.createElement("h3");
  price.innerText="$"+element.price;

//   let description=document.createElement("p");
//  description.innerText=element.description;

  let category=document.createElement("p");
  category.innerText=element.category;

  let rating=document.createElement("p")
 rating.innerText=element.rating.rate;

  let addtocart=document.createElement("button");
  addtocart.innerText="Add To Cart";

  addtocart.addEventListener("click",()=>{
let cartdata=JSON.parse(localStorage.getItem("cart"))||[];
isallready=false;
for(i=0;i<cartdata.length;i++){
  if(cartdata[i].id===element.id){
    isallready=true;
    break;
  };
} 

if(isallready===true){
alert("Product Already in Cart")
}else{
  cartdata.push({...element,quantity:1});
  localStorage.setItem("cart",JSON.stringify(cartdata));
  alert("Product Added To Cart")
}

  })

  card.append(image,brand,price,category,rating,addtocart);
  cont.append(card);
  })
}

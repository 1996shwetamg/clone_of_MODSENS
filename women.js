
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


 let wish=document.createElement("div");
 let img=document.createElement("img");
  img.setAttribute("src","https://img.icons8.com/ios/2x/loading-heart.png"); 

  let image=document.createElement("img");
  image.setAttribute("src",element.image); 

  let brand=document.createElement("h3");

  brand.innerText=element.title;

  let price=document.createElement("h3");
  price.innerText="$"+element.price;

  let category=document.createElement("p");
  category.innerText=element.category;

  let rating=document.createElement("p")
 rating.innerText=element.rating.rate;

  let addtocart=document.createElement("button");
  addtocart.innerText="Add To Cart";


  img.addEventListener("click",()=>{
    img.src="https://img.icons8.com/emoji/2x/heart-suit.png";
    let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
    isalready=false;
    for(j=0;j<wishlist.length;j++){
      if(wishlist[j].id===element.id){
        isalready=true;
        break;
      };
    }
    if(isalready===true){
      alert("Product Already in wishlist");
    }else{
    wishlist.push(element);
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
    alert("Product Added To Wishlist");
    }
  });


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

  });
  wish.append(img);
  card.append(wish,image,brand,price,category,rating,addtocart);
  cont.append(card);
  })
}



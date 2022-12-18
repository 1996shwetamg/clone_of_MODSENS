let myform=document.getElementById("form");
let submit=document.getElementById("submit");
let data=JSON.parse(localStorage.getItem("userdata"))||[]
myform.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj={
        email:myform.email.value,
        password:myform.password.value
    }
    
    data.push(obj);
    localStorage.setItem("userdata",JSON.stringify(data));
})

submit.addEventListener("click",()=>{
    window.location.href="signin.html"
})
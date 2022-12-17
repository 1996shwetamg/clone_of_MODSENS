let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    alert("Redirecting to home page...");

    setTimeout(function(){
        window.location.href="index.html"
    },2000);
})
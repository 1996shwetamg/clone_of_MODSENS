

let myform1=document.getElementById("form1");

let lsdata=JSON.parse(localStorage.getItem("userdata"))||[];

myform1.addEventListener("submit",(event)=>{
event.preventDefault();
  let obj={
  mail:myform1.email.value,
  Password:myform1.password.value
}
let data=[]
data.push(obj);
data.forEach((e)=>{
  

lsdata.forEach((element)=>{
if(element.email  === e.mail && element.password === e.Password)
{

 window.location.href="index.html";
}
else
alert("Wrong Credentials");
});


});

});
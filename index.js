// .check property =  property that determines the checked state of an HTML checkbox or radio button element 
 
const myCheckbox = document.getElementById("myCheckbox")
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const paypalBtn = document.getElementById("paypalBtn")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")
const mySubmit = document.getElementById("mySubmit")

mySubmit.onclick=function(){
if(myCheckbox.checked){
    subResult.textContent=  ` you are subscribed`;

}
else{

    subResult.textContent = ` youa are not subscribed`
}
}



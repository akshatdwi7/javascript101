const box = document.getElementById("box")


box.addEventListener("click",event=>{
    event.target.style.backgroundColor="tomato"
    event.target.textContent = "ouch 😭"

})
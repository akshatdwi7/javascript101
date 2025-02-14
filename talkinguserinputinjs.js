let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value 
    document.getElementById("myh1").textContent =   `HEllow new user:${username}`
   

}   // this is the way to take user input via a box and display it on the webpage
const username = "";

const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? ` Guest` : username; // if username is empty, display "guest" else display the username

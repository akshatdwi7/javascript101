// DOM = Documnet Object MOdel  -  It is a programming interface for HTML and XML documents. It represents the structure of the document as a tree of nodes.
//
console.dir(document);

const username = "Akshat";

const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `guest` : username; // if username is empty, display "guest" else display the username
// this will change the text content of the welcome-msg element by adding the username if it is not empty, else it will display "guest"
// .check property =  property that determines the checked state of an HTML checkbox or radio button element

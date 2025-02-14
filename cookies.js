// // cookies= a small text file remember user information about the user saved in name value pairs 

// console.log(navigator.cookieEnabled)
// // cookies= a small text file remember user information about the user saved in name value pairs 


// document.cookie="FirstName=BRO; expires=Sun, 1 -Jan-2030 00:00:00 GMT; path=/"

// document.cookie="lastName=CODe; expires=Sun, 1 -Jan-2030 00:00:00 GMT; path=/"
// console.log(document.cookie)

function setCookie(name,value,daystolive)
{
const date =new Date();
date.setTime(date.getTime()+ daystolive * 24 * 60 * 60 * 1000);


}
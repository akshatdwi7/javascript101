//Method chaining is a process of calling one method after one another in one continius line of code
// Method chaining is used to reduce the number of lines of code

let username = window.prompt("Enter your username")

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
console.log(username)



// Here we are calling multiple methods on the same object in one line of code

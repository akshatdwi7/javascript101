let loggedIn = false;
let username;
let password; 

while(!loggedIn){
    username =window.prompt("Enter your username: ")
    password = window.prompt("Enter your password: ")
    if(username==="akshat" && password==="akshat21")
        
    {
        loggedIn = true;
     console.log("you are logged- in Bitch!")
    }
    else{
        console.log("Invalid username or password")
    }
}


// call back = when a function is passed as an argumnet to another function 
// use to handle asynchronous operations : 
/*     1. reading a file 
        2. network request 
        3. Interating with database */
    
        hello(goodbye);
        

        function hello(callback){
            console.log("hello");
            callback();
        }

        function goodbye(){
            console.log("goodbye");
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

// leave=(hellno)=>{
//     console.log("I am leaving")
//     hellno();
// }
// Brocode=()=>{
//     console.log("Brocode is running")
// }

// NotBrocode=(code)=>{
//  console.log("Not Brocode is running")
// code();
// }

// Brocode(leave)
// // NotBrocode(Brocode) // if I add () i will call the function right away 

// nohello(hello)
// function hello(callback){
// console.log(" hey")
// callback();
// }
// function nohello(){
//     console.log("no hello")
// }
//  // this is a call back function
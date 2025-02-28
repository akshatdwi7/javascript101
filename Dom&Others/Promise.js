/*   Promises = An Object that manages the asynchronous operations 
 Wrap a project Object around{asynchronous code }
 "I promise to return a value"
    PENDING-> RESOLVED OR REJECTED 
    
    new Promise((resolve,reject)=>{asynchronous code}) 



    1.Walk the dog 
    2. Clean the kitchen 
    3. Take out the trash 

    */

function takeOutTrash(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
const trashout= true;
            if(trashout){
                resolve("You took out the trash yay! ")
            }
            else{
                reject("you didn't took the trash out ")
            }
           
        },3000)
    })
}
function walkTheDog(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalk= true;
            if(dogwalk){
                resolve(" Wow!, you toook the dog out ")
            }
            else{
                reject("you didn't walked the dog ")
            }
           
        },3000)
    })
}
function cleanTheKitchen(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const clean = true
            if(clean){
                resolve(" You cleaned the Kitchen ")
            } else{
                reject("you didn't cleaned the kitchen")
            }
         
           
        },3000)
    })
}

walkTheDog().then(value=>{console.log(value); return cleanTheKitchen()})
            .then(value=>{console.log(value);return takeOutTrash()})
            .then(value=>{console.log(value);console.log("YYayy you are done with all the Chores")})
            .catch(error=>{console.log("ERROR!")})
         
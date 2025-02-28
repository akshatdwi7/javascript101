/*
/*  async/await = async makes a function return a Promise
                  await makes an async function wait for a Promise

    Async/await helps us write asynchronous code that looks and behaves more like synchronous code.
    It provides a more clean and readable way to write promises.

    async function always returns a promise
    await can only be used inside an async function
    await makes JavaScript wait until the promise settles and returns its result
*/

// Example using the previous chores tasks



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

async function doChores() {
    try {
        const walkResult = await walkTheDog();
        console.log(walkResult);
        
        const kitchenResult = await cleanTheKitchen();
        console.log(kitchenResult);
        
        const trashResult = await takeOutTrash();
        console.log(trashResult);
        
        console.log("All chores are done!");
    }
    catch(error) {
        console.log("ERROR: " + error);
    }
}
doChores()



// Benefits of async/await:
// 1. Cleaner syntax compared to .then() chains
// 2. Better error handling with try/catch
// 3. Easier debugging
// 4. More readable and maintainable code



const sum=(callback,x,y)=>{
     let result =  x+y;
     callback(result);
}

const displayconsoleresult=(result)=>{
 console.log(`sum is ${result}`);
}

const displayonscreen=(result)=>{
document.getElementById("h1").textContent= result; 

}
sum(displayconsoleresult,8435,5)
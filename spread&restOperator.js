// Spread is an Opertor = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)
// Rest  is a parameter = ... allows an iterable such as an array or string to be collected into a singl element (packs the elements)
 let numbers= [ 1,4,434,453,53,2,23]
 let max = Math.max(...numbers) 
 let min = Math.min(...numbers)
 console.log(`Maximum is ${max}`)
 console.log(`Minimum is ${min}`)
//  console.log(numbers)

f3=()=>{
    let names =[ 'John', 'Jane', 'Jack', 'Jill']
    let Ben = "Ben10"
    console.log(...names)
    let flow = [...Ben].join("+")
    console.log(flow) //.join function joins the strings togetherwith given input 
}

wecanjoinarray=()=>{
    let names = ['John', 'Jane', 'Jack', 'Jill']
    let sirnames= ['Smith', 'Johnson', 'Williams', 'Brown']
    // let fullnames = names.map((name, index)) => `${name} ${sirnames}`
    let usernameButsperate = [...names ,...sirnames]
    console.log(usernameButsperate)
    // console.log(fullnames)
}
wecanjoinarray()


// REST PARAMETERS FROM HERE 

restpara=(...foods)=>{ // in this line we are joining the foods in a single array by using rest parameters 
console.log(...foods) // in this line we are printing the foods in the console by using spread operaotr 
}
const food1 = "pizza"
const food2 = "burger"      
const food3 = "fries"
const food4 = "soda"
const food5 = "icecream"

restpara(food1, food2,food3,food4,food5)
// q- create a program to sum all the numbers in an array 

sumarray=(...y)=>{
    let total = 0;
   for(sum of y){
   total+= sum 

   }
   return total; 

}

const n = sumarray(43,4,89)
console.log(    ` your total is $${n}`)



// f(or average of the array 

avg=(...intergers)=>{
   let sum=0;
  
   for( let one of intergers){
    sum+= one

   }
   return sum/intergers.length;
}

let intergers = avg(23,43,43,435,86,5)
console.log(`your average is $${intergers}`)


const strings=(...titles)=>{
return titles.join(" ") // in this line we are joining the titles in a single string by using join method
}

let titles = strings("hello", "world", "python", "javascript")
console.log(titles+" is a programming language")

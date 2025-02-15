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

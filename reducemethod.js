// . reduce() = reduce the element of an array to the single value 

let numbers = [ 38,49,84,42,3,52]

sum=(accumulator, element)=>{
return accumulator + element

}
let total= numbers.reduce(sum)
console.log(`Total money will be $${total.toFixed(2)}`) // output  14360 when we use to fixed funtion it meana to return to that decimal values 
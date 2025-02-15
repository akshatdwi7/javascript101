
// Method	Description
// push(item)	Adds item(s) to the end of an array
// pop()	Removes the last item
// shift()	Removes the first item
// unshift(item)	Adds item(s) to the beginning
// splice(start, deleteCount, item1, item2, …)	Adds/removes items at a specific index
// sort()	Sorts the array alphabetically (by default)
// reverse()	Reverses the array order
// fill(value, start, end)	Fills elements with a specific value

let fruits = ["apple", "banana", "cherry"];
 const f2 =()=>{
for(let i=0; i<fruits.length; i++){
console.log(fruits[i])
}}

//if you want to print it in reverse order 
const f1=()=>{
for(let i = fruits.length-1; i>=0; i--){
    console.log(fruits[i])
}}
 // prints in reverse order

// Enhanced version of For loop to print the array directly in js is 
const EnhancedVersion=()=>{
for(let fruit of fruits){ // this is called for of loop 
    console.log(fruit)
}}

EnhancedVersion();

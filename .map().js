// //.map() method is used to create a new array with the results of applying the provided function on every element in this 
// // array.

// let numbers = [ 1, 2, 3, 4, 5];

// let s = numbers.map(power)
// console.log(s)
// power=(element)=>{
//  return Math.pow(element,2)
// }


// let numbers = [1, 2, 3, 4, 5];

// let s = numbers.map(power); // Calling power() before definition works
// console.log(s); 
// function power(element) {
//   return Math.pow(element, 2);
// }


// Output: [1, 4, 9, 16, 25]
// Q use the function to create a program which will split the data and print accordingly; 

const date = [ " 2024-02-21", " 2024-02-15"]

fixdate=(element)=>{
 const parts =element.split("-")
return `${parts[2]}/ ${parts[1]}/${parts[0]}`
 
}
const formattedates= date.map(fixdate)
console.log(formattedates)
// Function declaration = define a resuable block of code that performs a specific task
// Function expression = a way to define function as values or variables

function hello(hello2) {
  console.log("Hello"); // function declaration
}

const hello2 = function () {
  console.log("Hello"); // function expression
};

// IN js it is legal to pass entire function as an argumnet to another function

setTimeout(function () {
  console.log("this is crazay!");
}, 1000); // these are in ms i.e miliseconds

// Q- write a function as a expression and make the cube of the following.

let numbers = [1, 2, 3, 4, 5];

const cube = numbers.map((element) => Math.pow(element, 3));
console.log(cube);

const evenNUms = cube.filter((element) => {
  return element % 2 === 0;
});
console.log(evenNUms);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total); // this will print the sum of all the cubes of the numbers in the array

/* 
conclusioon = 
1. callbacks in asynchronous
2. Higer-Order functions
3. Closures
4. Event Listners 
*/

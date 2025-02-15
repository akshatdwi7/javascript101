A single-line arrow function in JavaScript is written without {} and return when returning a single expression. Here's the syntax:

const functionName = (parameters) => expression;
Examples:
✅ Without Parameters

const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!
✅ With One Parameter (No Parentheses Needed)

const square = x => x * x;
console.log(square(5)); // Output: 25
✅ With Multiple Parameters

const add = (a, b) => a + b;
console.log(add(3, 7)); // Output: 10
🔥 Comparison with Regular Function
Regular Function:

function multiply(a, b) {
    return a * b;
}
Single-line Arrow Function Equivalent:

const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20
Let me know if you need more examples! 🚀








You said:

function f1(){

    let x = 90; 
    x++;
    console.log(x);
}

in arrow function
ChatGPT said:
Here's how you can convert your f1 function into an arrow function:

✅ Arrow Function Version
const f1 = () => {
    let x = 90;
    x++;
    console.log(x);
};

f1(); // Output: 91
Key Changes:
function f1() → const f1 = () => {} (Converted to arrow function)
The function body remains inside {} since it has multiple statements.
🔥 One-Liner (If Needed)
Since the function has multiple lines, it can't be written as a one-liner unless you remove x++ like this:

const f1 = () => console.log(90 + 1);
f1(); // Output: 91
Let me know if you need more modifications! 🚀








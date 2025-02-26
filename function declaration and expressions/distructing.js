// destrctuiring = extracting values from array and objects, and assigning
// them to varibales in convient way
/*  
 []= for array destruct 
 {}= for object destrcut 
*/

let a, b;
a = 4;
b = 90;
[a, b] = [b, a];
console.log(a, b);

const colors = ["blue", "red", "green", "yellow"];
const [...newworld] = colors;
console.log(newworld);

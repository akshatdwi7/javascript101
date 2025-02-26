/*
Sort()= method to sort the element in array in the place 
Sorted elemnets are in the lexicoraphic order, not alphabet.
Lexicoraphic means =(alphabets + numbers + symbols ) as strings 
*/

const people = [
  { name: "Aksaht", age: 21, gpa: 9.2 },
  { name: "Bro", age: 31, gpa: 2.9 },
  { name: "sarah", age: 28, gpa: 7.8 },
];

// people.sort((a, b) => a.age - b.age); // for arranging numbers
// console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name)); // for arranging alphabets
console.log(people);

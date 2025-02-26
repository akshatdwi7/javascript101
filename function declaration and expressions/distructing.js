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
const [...newworld] = colors; //using rest parameters here
console.log(newworld);

//with the objects

const p1 = {
  name: "bro",
  age: 34,
  hobbie: "coding",
  job: true,
};
const p2 = {
  name: "noBro",
  age: 21,
  hobbie: "football",
};

const { name, age, hobbie, job = "false" } = p2;
console.log(name);
console.log(job);

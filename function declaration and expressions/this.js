//.this = refrences to the objects where this is used
// the object depends upon the immediate contact with the object
// person.name =this.name
// this doesn't work with arrow functions

let person = {
  name: "John",
  age: 30,
  city: "New York",
  hobbie: "Coding",
  bro: function () {
    console.log(`this is the object test ${this.hobbie}`);
  },
  place: function () {
    console.log(
      `this is the object test ${this.city} and also the name ${this.name}`
    );
  }, // this is the object test Coding
};
person.bro();
person.place();

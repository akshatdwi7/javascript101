// Constructors= special methods for defining properties and methods of objects

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

let car1 = new Car("Toyota", "Camry", 2015, "Blue");
let car2 = new Car("Honda", "Civic", 2018, "Red");
let car3 = new Car("Ford", "Mustang", 2020, "Black");

console.log(car3);

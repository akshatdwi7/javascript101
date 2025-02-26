// Nested OBjects =  objects inside other objects . Allows you to represet more complex
// data strucures child objects is enclosed by parent objects

// person{adress{},contactINfo{}}
// ShoppingKart{keyboard{},mpuse{},monitor{}}

const person = {
  fullName: "aksaht",
  age: 30,
  isStudent: true,
  hobbies: ["football", "w", "rizzleing"],
  Adress: {
    city: "lknw",
    state: "notcalifornia",
    country: "notusa",
  },
};
for (const property in person.Adress) {
  console.log(person.Adress[property]);
}

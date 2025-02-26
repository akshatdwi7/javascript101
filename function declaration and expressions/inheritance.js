// inhertince =  when a parent class inherit the properties and methods of another class

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
class Dog extends Animal {
  name = "Dog";
  bark() {
    console.log("Woof! Woof!");
  } // this is a method of the dog class
}
class Cat extends Animal {
  name = "cat";
  meow() {
    console.log("Meow! Meow!");
  }
}

const dog = new Dog();
dog.eat();

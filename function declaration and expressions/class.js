// class = (ES6) feature provides a much simpler and cleaner way to create objects and deal with inheritance.
// compared to traditional constructor functions.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  display() {
    console.log(` ${this.name} costs $${this.price}`);
  }
}
const product1 = new Product("Iphone", 1000);
const product2 = new Product("Samsung", 800);
const product3 = new Product("Google", 900);
product1.display();
product2.display();
product3.display();

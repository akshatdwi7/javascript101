// static =  keywords that defines the properites and methods of a class that are associated with the class itself
// rather than objects created from the class ( class owns anything static)

//Q  create a program to count the users in the database

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  getUserCount() {
    console.log(`There are ${User.userCount} users in the database`);
  }
}
const user1 = new User("John");
const user2 = new User("Jane");
const user3 = new User("Mary");
user1.getUserCount();

console.log(user1.username);
console.log(User.userCount);
console.log(user2.username);
console.log(User.userCount);

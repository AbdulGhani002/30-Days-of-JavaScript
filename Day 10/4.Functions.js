// function User(name, age) {
//   return { name: name, age: age };
// }
// const user = new User("Abdul Ghani", 16);
// console.log(user);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log(this.name);
  }
}

const user1 = new User("Abdul Ghaniii", 16);
const user2 = new User("Abdul Ghaniii", 17);
console.log(user1);
console.log(user2.name);
user1.printName();

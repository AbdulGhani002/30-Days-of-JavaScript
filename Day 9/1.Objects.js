const person = {
  personName: "Abdul Ghani",
  personAge: 16,
  personHobby: "Programming",
  sayHi: () => console.log(`Hi ${person.personName}`),
};
// console.log(person);
// console.log(person.personName);
// console.log(person.personAge);
// console.log(person.personHobby);
// console.log(console);
// console.log(person.sayHi());
// person.sayHi();

const func = {
  name: "NoName",
  class: "No Class",
  // Function in Objects
  // while written function in an object we should not wtite function keyword.
  // Arrow functions are not recommended to use in objects while outside objects we should mostly use
  // arrow functions.

  sayHi3() {
    console.log("Hello");
  },
};
// func.sayHi3();

let car = {
  company: "Toyota",
  model: "1991",
  condition: "Good",
  isUsed: true,
  makeNoise() {
    console.log("Vroom");
  },
};
// console.log(car);
// console.log(car["company"]);
// console.log(car.company);
// console.log(car.model);
// console.log(car.condition);
// console.log(car.isUsed);
// console.log(car.makeNoise());
// car.makeNoise();
// const property = "model";
// console.log(car[property]);

let intro = {
  name: "Abdul Ghani",
  age: 16,
  hobby: "Progrmming",
  fovouriteLanguages: ["Javascript", "Python", "Java"],
  address: {
    street: "colony",
    city: "Multan",
  },
};
// console.log(intro);
// console.log(intro.name);
// console.log(intro.age);
// console.log(intro.fovouriteLanguages);
// console.log(intro.fovouriteLanguages[0]);
// console.log(intro.fovouriteLanguages[1]);
// console.log(intro.address);
// console.log(intro.address.street);
// console.log(intro.address.city);

let book = {
  title: "The wave of Warriors",
  author: {
    name: "Me",
    age: 34,
  },
};
// console.log(book);
// console.log(book.title);

// book.title = "The Wave of Shadows";
// console.log(book.title);

// book.author.name = "New Name";
// console.log(book.author.name);

let hobbies = [1, 2];
hobbies[1] = 3;
console.log(hobbies);

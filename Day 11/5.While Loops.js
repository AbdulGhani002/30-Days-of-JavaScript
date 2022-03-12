// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// while (true) {
//   console.log("True");
// }

// while (false) {
//   console.log("True");
// }

// let a = 0;
// while (a <= 10) {
//   console.log(a);
//   a++;
// }

const person = {
  name: "Abdul Ghani",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
};
let currentPerson = person;
// while (currentPerson.friend != null) {
//   console.log(currentPerson.name);
//   currentPerson = currentPerson.friend;
// }

// while (currentPerson != null) {
//   console.log(currentPerson.name);
//   currentPerson = currentPerson.friend;
// }

while (currentPerson != null) {
  if (currentPerson.name === "Joe") {
    break;
  }
  console.log(currentPerson.name);
  currentPerson = currentPerson.friend;
}

// while (currentPerson != null) {
//   if (currentPerson.name === "Joe") {
// It forms an infinite Loop
//     continue;
//   }
//   console.log(currentPerson.name);
//   currentPerson = currentPerson.friend;
// }

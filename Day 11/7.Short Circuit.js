// console.log(true || false);
function printTrue() {
  console.log("True");
  return true;
}
function printFalse() {
  console.log("False");
  return false;
}
// printTrue() || printFalse();
// printFalse() || printTrue();
// printTrue() && printFalse();
// printFalse() && printTrue();

function printName(name) {
  //   if (name == null) {
  //     name = "Default";
  //   }
  // Alternative Method
  name = name || "Default";
  // Alternative
  //   console.log(name);
  console.log(name || "Default");
}
// printName();
// printName("Abdul Ghani");

const person = {
  name: "Abdul Ghani",
  address: {
    street: "Main Street",
  },
};
console.log(person.address.street);
console.log(person.address.colony);
// if (person != null && person.address.colony != null) {
//   console.log(person);
// }
//Alternaive
console.log(person && person.address && person.address.street);

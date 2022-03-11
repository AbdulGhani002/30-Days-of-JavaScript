// function print(variable) {
//   return function func(variable2) {
//     console.log(variable);
//     console.log(variable2);
//   };
// }
// let a = print(1);
// a(2);

// function myName(names) {
//   return function myNameFunc(names1) {
//     console.log(names);
//     console.log(names1);
//   };
// }
// let myFunc = myName("Abdul Ghani");
// myFunc("Hello");

// Closures in Arrow Functions

let a = (name) => (name1) => {
  console.log(name);
  console.log(name1);
};
let b = a("Abdul Ghani");
b("Hi");

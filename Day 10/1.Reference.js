// References cannot work in numbers

// let a = 10;
// let b = 20;
// let c = a;
// c++;
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
// console.log(`c = ${c}`);

// Arrays References
// let myArray = [1, 2, 3];
// let d = myArray;
// console.log(`myArray = ${myArray}`);
// console.log(`d = ${d}`);
// d.push(4, 5);
// console.log(`myArray = ${myArray}`);
// console.log(`d = ${d}`);

// Object Methods
// let person = {
//   name: "Abdul Ghani",
//   age: 16,
//   hobby: "Programming",
// };
// let person2 = person;
// console.log(`Person 1 = ${JSON.stringify(person)}`);
// console.log(`Person 2 = ${JSON.stringify(person2)}`);
// person2.hobby = "Coding";
// person2.address = "No Addess";
// console.log(`Person 1 = ${JSON.stringify(person)}`);
// console.log(`Person 2 = ${JSON.stringify(person2)}`);

// Arrays

const arr = [1, 2]; // 0x01
const arr2 = [1, 2]; // 0x02
// Both are not equal because both have different memory addresses
// console.log(arr === arr2);
// arr.push(3);
// console.log(arr === arr);

//Objects
const obj = {
  name: "My Name",
};
obj.age = 17;

// console.log(obj);
// Error
// obj = {
//   name: "Hi",
// };
// console.log(obj);

//Functions

const n = [1, 2];
const ElementToAdd = 3;

function add(b, newarr) {
  b.push(newarr);
}
add(n, ElementToAdd);
// console.log(n);

//Strings
let str = "Hello ";
let str2 = str;
str2 += "Hi";
console.log(`str = ${str}`);
console.log(`str2 = ${str2}`);

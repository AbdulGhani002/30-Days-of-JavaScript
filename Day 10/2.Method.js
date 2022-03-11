const a = [1, 2, 3, 4, 5];
// a.forEach((number, index) => {
//   console.log(`${number}  on ${index}`);
// });

const b = [2, 4, 6, 8, 10];
// const newA = a.map((number) => {
//   return number * 2;
// });
// console.log(a);
// console.log(newA);

// newA = a.filter((number) => {
//   return true;
// });
// newA = a.filter((number) => {
//   return false;
// });
// newA = a.filter((number) => {
//   return number <= 3;
// });
// console.log(newA);

// console.log(a);
// n = a.find((number) => {
//   return number > 2;
// });
// n = a.some((number) => {
//   return number > 2;
// });
// n = a.some((number) => {
//   return number > 100;
// });
// n = a.every((number) => {
//   return number > 100;
// });
// n = a.every((number) => {
//   return number > 0;
// });
// n = a.reduce((sum, number) => {
//   return sum + number;
// }, 0);
// console.log(n);

// const items = [
//   { price: 10 },
//   { price: 20 },
//   { price: 30 },
//   { price: 40 },
//   { price: 50 },
// ];
// let total = items.reduce((sum, num) => {
//   return sum + num.price;
// }, 0);
// console.log(total);

let inc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(inc.includes(9));
console.log(inc.includes(19));

// Calling a function inside of itself is called recursion
// function printHi() {
//   console.log("Hi");
//   printHi();
// }
// printHi();
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log(sum);

// function printNumber(number) {
//   if (number > 10) {
//     return;
//   }
//   console.log(number);
//   printNumber(number + 1);
// }
// printNumber(1);

function sumNumberBelow(number) {
  if (number <= 0) {
    return 0;
  }

  return (
    number + // number is 2
    sumNumberBelow(number - 1) // number - 1 is 2 - 1 = 1
  );
}
console.log(sumNumberBelow(2));

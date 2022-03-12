// for (let i = 0; i < 10000; i++) {
//   const element = document.createElement("h1");
//   element.textContent = `Heading ${i + 1}`;
//   document.body.append(element);
// }

// for (let a = 0; a < 10; a++) {
//   console.log(`Code Here ${a}`);
//   if (a > 6) {
//     break;
//   }
//   console.log(`End ${a}`);
// }

for (let a = 0; a < 10; a++) {
  console.log(`Code Here ${a}`);
  if (a > 6) {
    continue;
  }
  console.log(`End ${a}`);
}

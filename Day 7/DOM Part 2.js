const tableTag = document.body.children[1];
// console.log(tableTag.tBodies);
// console.log(tableTag.tBodies[0].rows);
// console.log(tableTag.tBodies[0].rows[0].cells);
// console.log(tableTag.tBodies[0].rows[0].cells[0].textContent);
// console.log(tableTag.tHead);
// console.log(tableTag.tHead.rows);
// console.log(tableTag.tHead.rows[0].cells[0]);
// console.log(tableTag.tHead.rows[0].cells[0].textContent);




// Similarly tFoot can be used





tableTag.tHead.rows[0].cells[0].style.backgroundColor = "blue"
console.log(tableTag.tHead.rows[0].cells[0].style.backgroundColor);
console.log(tableTag.tHead.rows[0].cells[1].style = `border: 10px solid purple`);
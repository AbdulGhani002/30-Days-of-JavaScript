/*
querySelector is used to seelect an element(tag).
*/


let div = document.querySelector('div');
console.log(div.textContent);
console.log(div.innerText);
console.log(div.innerHTML);
div.remove();
document.body.style.background = "red";
document.body.style.color = "white";
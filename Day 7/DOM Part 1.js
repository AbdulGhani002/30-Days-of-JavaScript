// document is object which stores complete information
// console.log(document);
// console.log(typeof document);

// document.all returns all html tags
// document is not an array it is an object
// console.log(document.all);
// console.log(document.forms);

// console.log(document.links);
// console.log(document.links[0].href);

// console.log(document.images);
// console.log(document.scripts);

//  documentElement is used to acces HTML file (root element)
// console.log(document.documentElement);

// head is used to access head elements
// console.log(document.head);

// body is used to acces body element
// console.log(document.body);

// childNodes shows all tags and it represents extra spaces as text
// console.log(document.head.childNodes);
// console.log(document.body.childNodes);

// childrens is used to represents html tags withut text
// console.log(document.head.children);
// console.log(document.body.children);

// firstChild and lastChild are also used
// console.log(document.head.firstChild);
// console.log(document.head.lastChild);

// firstElementChild and lastElementChild are recommended to used
// console.log(document.head.firstElementChild);
// console.log(document.head.lastElementChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// for (myElement of document.body.children) {
//   console.log(myElement);
// }

// for (myElement of document.head.children) {
//   console.log(myElement);
// }

// const childernOfBody = Array.from(document.body.children);
// console.log(childernOfBody);

// let a = document.all;
// Array.from(a).forEach((elements) => {
//   console.log(elements);
// });

// Siblings

// console.log(document.body.children[0]);
// console.log(document.body.children[0].nextSibling);
// console.log(document.body.children[0].nextElementSibling);
// console.log(document.body.children[1].previousElementSibling);
// console.log(document.body.children[1].previousElementSibling.textContent);

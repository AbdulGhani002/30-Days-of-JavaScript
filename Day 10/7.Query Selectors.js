const dataAttributeElement = document.querySelector("[data-test]");
const divsWithClasses = document.querySelectorAll(".div-class");
const input = document.querySelector("body>input[type = 'text']");
console.log(dataAttributeElement);
divsWithClasses.forEach((div) => (div.style.color = "red"));
dataAttributeElement.style.color = "green";
console.log(input);

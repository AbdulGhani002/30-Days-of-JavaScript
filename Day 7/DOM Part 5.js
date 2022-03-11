// console.log(document.getElementById("console").id);
// console.log(document.getElementById("console").getAttribute("data"));
// console.log(document.getElementById("console").setAttribute("order" , "pending"));
// console.log(document.getElementById("console").getAttribute("order"));
// console.log(document.getElementById("console").hasAttribute("order"));
// console.log(document.getElementById("console").removeAttribute("order"));
// console.log(document.getElementById("console").hasAttribute("order"));
// console.log(document.getElementById("console").attributes);

const newDiv = document.createElement("div");
const newText = document.createTextNode("Hello");
newDiv.appendChild(newText);
// document.body.append(newDiv);

// document.body.prepend(newDiv);

// document.body.before(newDiv);

document.body.after(newDiv);

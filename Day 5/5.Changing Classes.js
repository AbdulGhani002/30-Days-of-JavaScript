let class1;
class1 = document.getElementById("btn");
class1.addEventListener("click", () => {
    /*
    Changing class
    */
   document.getElementById("btn").className = "myclass";
  document.getElementById("btn").style.color = "white";
  document.getElementById("btn").style.backgroundColor = "red";
  document.body.style.backgroundColor = "black";
  document.getElementById("my-div").style.color = "white";
  document.getElementById("my-div").style.transition =
    "all 0.5s ease-in-out 1s";
  document.getElementById("my-heading").style.color = "white";
  document.getElementById("my-heading").style.transition =
    "all 0.5s ease-in-out 1s";
});
let class2;
class2 = document.getElementById("btn1");
class2.addEventListener("click", () => {
  class2.style.backgroundColor = `white`;
  class2.style.Color = `black`;
  document.getElementById("btn").style.backgroundColor = "white";
  document.getElementById("btn").style.color = "black";
  document.body.style.background = `white`;
  document.getElementById("my-div").style.color = "black";
  document.getElementById("my-heading").style.color = "black";
  document.getElementById("my-heading").style.transition =
    "all 0.5s ease-in-out 1s";
  document.getElementById("my-div").style.transition =
    "all 0.5s ease-in-out 1s";
});
let class3 = document.getElementById("btn2");
let div = document.getElementById("my-div");
let heading = document.getElementById("my-heading");
class3.addEventListener("click", () => {
  if (div.style.display != "none" && heading.style.display != "none") {
    div.style.display = "none";
    heading.style.display = "none";
  } else {
    div.style.display = "block";
    heading.style.display = "block";
  }
});

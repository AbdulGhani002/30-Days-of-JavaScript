const btn = document.body.querySelector("button");
const input = document.body.querySelector("[data-input-text]");
const form = document.body.querySelector("[data-form]");
const link = document.body.querySelector("[prevented]");
function printClicked() {
  console.log("Clicked");
}
btn.addEventListener("click", printClicked);

// btn.addEventListener("click", () => {
//   console.log("Clicked2");
// });

btn.addEventListener("click", (e) => {
  console.log(e);
});

// removing first event listener
btn.removeEventListener("click", printClicked);

// input.addEventListener("change", () => {
//   console.log("changed");
// });

// input.addEventListener("input", () => {
//   console.log("changed");
// });

input.addEventListener("input", (e) => {
  console.log(e.target.value === "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form is submitted");
});
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link is clicked");
});

window.addEventListener("resize", () => console.log("resized"));

console.log(this === window);

// This in two types of functions
const arrow = btn.addEventListener("mouseover", () => {
  console.log(this);
});
const func = btn.addEventListener("mouseover", function () {
  console.log(this);
});

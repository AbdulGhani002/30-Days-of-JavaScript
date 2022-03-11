// const test = document.querySelector("[data-test]");
// console.log(test.dataset);
// console.log(test.dataset.test);
// console.log(test.dataset.testTwo);
// test.dataset.testTwo = "5555";
// console.log(test.dataset.testTwo);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentClicks = parseInt(button.dataset.clicks);
    button.dataset.clicks = currentClicks + 1;
  });
});

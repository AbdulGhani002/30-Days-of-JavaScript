const colors = ["green", "red", "rgba(123,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
    ///Get random Number
    const randomNumber = getRandomNumbers();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumbers() {
    return Math.floor(Math.random() * colors.length);
}
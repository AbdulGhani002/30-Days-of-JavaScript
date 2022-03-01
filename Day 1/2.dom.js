console.time("myTime");
const newFunction = () => {
    for (let i = 0; i < 10000; i++) {
        document.body.insertAdjacentHTML(`beforeend`, `<h3>Hello #${i + 1}</h3>`);
    };
};
newFunction();
console.timeEnd("myTime");
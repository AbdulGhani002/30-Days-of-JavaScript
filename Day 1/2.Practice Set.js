for (let i = 0; i < 1000; i++) {
    document.body.insertAdjacentHTML( `beforeend` ,`<h1>Heading ${i + 1}</h1>`);
};
let i = `Hello I am a string`;
console.log(typeof i);
i.trim(" ");
console.log(i);
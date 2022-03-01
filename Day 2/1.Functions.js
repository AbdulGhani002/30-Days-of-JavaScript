console.log("I am Abdul Ghani");
let name = "Abdul Ghani";
console.log(`Happy Birthday ${name}.May you live a long life.`);
function greeetings(name) {
    let msg =  console.log(`Happy Birthday ${name}.May you live a long life.`);
    return msg;
};
greeetings("AbdulGhani");
greeetings(name);
let val = greeetings("Abdullah");
console.log(val);

let mass = function greeetings(name) {
    let msg =  console.log(`Happy Birthday ${name}.May you live a long life.`);
    return msg;
};
let myVal =  greeetings("Ali");
console.log(myVal);


let myObj = {
    name:"Abdul Ghani",
    games:function () {
        return "GTA";
    }
}
console.log(myObj.games());
/*
Check if input variable is a number or not
 */
let num = prompt("Please Enter an Input");

const ans = (num) =>{
    if (isNaN(num)) {
        console.log(`${num} is not a Number`);
    } else {
        console.log(`${num} is a number`);
    }
};

ans(num);
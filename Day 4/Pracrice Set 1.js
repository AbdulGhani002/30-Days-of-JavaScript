/*
Check if a number is odd or even in JavaScript
*/
let num = prompt("Please Enter a Number");


/*
Checking if number is even or not
*/
const answer = (num) =>{
    if (num % 2 == 0) {
        console.log(`${num} is an Even Number`);
    } else {
        console.log(`${num} is an Odd Number`);
    }
};

/*
Calling the function
*/
answer(num);
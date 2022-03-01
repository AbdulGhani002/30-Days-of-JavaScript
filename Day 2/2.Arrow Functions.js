console.log("I am Abdul Ghani");

function newFunction() {
    console.log("This is a function");
}
newFunction();

const intro = ()=>console.log("I am an Arrow Function");
intro();
// const greet = ()=>{
//     return "Hello Buddy";
// }


/* If arrow function is one lined then we can use it without curly brackets.
 We can print a value written in function without writing (return).
*/
const greet = ()=>"Hello Buddy";

console.log(greet());
// const mor = (names2)=>"Goob Morning " + names2;

/*
Small brackets are used when we are psaaing multiple arguments.
But when we are passing single argument we can pass this without small brackets.
*/
const mor = names2 =>"Goob Morning " + names2;
console.log(mor("Abdul Ghani"));

const mor1 = (names3 , end) =>"Goob Morning " + names3 + ". I have to go. " + end;
console.log(mor1("Abdul Ghani" , "Good Bye."));
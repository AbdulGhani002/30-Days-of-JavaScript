/*
Find the largest of two number
*/

let num1 = prompt("Please Enter First Value");
let num2 = prompt("Please Enter Second Value");

const ans = (num1 , num2) =>{
    if (isNaN(num1 &&num2 ) == false) {
        
        if (num1 > num2) {
            console.log("First Number is Larger than second one.");
        } else if(num1 == num2){
            console.log("Both Numbers Are equal.");
        }
        else if(num1 < num2){
            console.log("Second Number is Larger than One.");
        }
    }
    else{
        console.log("Please Enter Valid Input");
    }
};
ans(num1 , num2);
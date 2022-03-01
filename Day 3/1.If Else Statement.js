console.log("I am Abdul Ghani");
/*
Simple IF Else Statement:
const age = 29;
if (age >= 18) {
    console.log("You are Eligible to apply for this job.");
} else {
    console.log("You are not Eligible to apply for this job.");
}
*/


/*
Prompt is used for input that is given by the user.
*/
// prompt(value in string , default value to be shown in input box of prompt)
const age = prompt("Please Enter Your age :" , "Please Enter a valid age");
if (age >= 25) {
    console.log("You are eligible for this job.")
} else {
    console.log("You are not eligible for this job.")
};

/*
Alert throws an amert message.
*/
alert("PLease see console for our response");



let per = 50;
if (per >= 80) {
    console.log("You are Selected on merit");
}
else if (per >= 70 && per < 80) {
    console.log("You are passed with 1st division");
}
else if (per >= 60 && per < 70) {
    console.log("You are passed with 2nd division");
}
else if (per >= 50 && per < 60) {
    console.log("You are passed with 3rd division");
}
else if (per > 50 && per >= 0) {
    console.log("You are Fail");
}
else{
    console.log("Oops , We are facing a problem");
}
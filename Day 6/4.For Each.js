// let myArray = [10 , 20 , 49, "Abdul Ghani" , "Programmer"];
// myArray.forEach((elements)=>{
//     console.log(elements);
// });



// myArray.forEach(function (values) {
//     console.log(values);
// });

/*
For Each Syntax

arrayName.forEach( function(name of any element){
    console.log(name of element given in function)
} )

or

arrayName.forEach( (name of any element) =>{
    console.log(name of element given in function);
};
*/


let arr = [10 , 20 , 30 ,90];
// arr.forEach((names)=>{
//     console.log(names * 2);
// });

// Alternative Method
// arr.forEach(names => {
//     console.log(names * 2);
// });



arr.forEach((names, i , arr) => {
    console.log(names , i , arr);
});

//(i) stands for index number
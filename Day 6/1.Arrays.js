// let array1 = [1, 20, 50, 40];
// let array2 = ["Abdul Ghani", "Ali", "John"];
// let arrayMixed = [1, 20, "Hello"];
// console.log(array1);
// console.log(array2);
// console.log(arrayMixed);

/*
Array Methods
1. concat() =>	Joins two or more arrays, and returns a copy of the joined arrays
2. copyWithin() =>	Copies array elements within the array, to and from specified positions
3. entries() =>	Returns a key/value pair Array Iteration Object
4. every() =>	Checks if every element in an array pass a test
5. fill() =>	Fill the elements in an array with a static value
6. filter() =>	Creates a new array with every element in an array that pass a test
7. find() =>	Returns the value of the first element in an array that pass a test
8. findIndex() =>	Returns the index of the first element in an array that pass a test
9. forEach() =>	Calls a function for each array element
10. from() =>	Creates an array from an object
11. includes() =>	Check if an array contains the specified element
12. indexOf() =>	Search the array for an element and returns its position
13. isArray() =>	Checks whether an object is an array
14. join() 	=>Joins all elements of an array into a string
15. keys() =>	Returns a Array Iteration Object, containing the keys of the original array
16. lastIndexOf() =>	Search the array for an element, starting at the end, and returns its position
17. map() =>	Creates a new array with the result of calling a function for each array element
18. pop() =>	Removes the last element of an array, and returns that element
19. push()=> 	Adds new elements to the end of an array, and returns the new length
20. reduce() =>	Reduce the values of an array to a single value (going left-to-right)
21. reduceRight() =>	Reduce the values of an array to a single value (going right-to-left)
22. reverse() =>	Reverses the order of the elements in an array
23. shift() =>	Removes the first element of an array, and returns that element
24. slice() =>	Selects a part of an array, and returns the new array
25. some() =>	Checks if any of the elements in an array pass a test
25. sort() =>	Sorts the elements of an array
27. splice() =>	Adds/Removes elements from an array
28. toString() =>	Converts an array to a string, and returns the result
29. unshift() =>	Adds new elements to the beginning of an array, and returns the new length
30. valueOf() =>	Returns the primitive value of an array
*/
// let newArray = new Array(1, 20, "AG");
// console.log(newArray);
// console.log(newArray.length);
// console.log(Array.isArray(arrayMixed));
// console.log(newArray[1]);
// console.log(newArray[0]);
// console.log(newArray[2]);
// arrayMixed[2] = "Hi";
// console.log(arrayMixed);



let marks = [24 , 45 , 39 , 19 , 26];
let total = [10 , 2000 , 1000 , 500]
console.log(marks.concat(25 , 28));
console.log(marks.concat(total));
// const copying = marks.copyWithin(24 , 0 , 5);
// console.log(copying);
console.log(marks.includes(45));
// console.log(marks.find(45 , 1));
console.log(marks.indexOf(45));
marks.push(34);
marks.unshift(34);
marks.pop();
marks.shift();
marks.splice(1 , 2);
marks.reverse();
marks.slice(0 , 2);
// let str = "";
// marks.join(str);
// console.log(str);

marks.sort();
marks.valueOf();
console.log(marks);
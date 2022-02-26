// Strings
let a = "Abdul Ghani";
/*
Strings can be written in ("" , '' , ``)
*/
let b = "Programmer";
let c = `16`;
console.log(a);
console.log(b);
console.log(c);
console.log(a + b + c);
console.log("Data Type of a is " + typeof a);
console.log("Data Type of b is " + typeof c);
console.log("Data Type of c is " + typeof b);

//Numbers
let i = 10;
console.log(i);
console.log("Data Tyoe of i is " + typeof i);

//Booleans

let m = true;
console.log(m);
console.log("Data type of m is " + typeof m);
let o = false;
console.log(o);
console.log("Data type of m is " + typeof o);

//String Methods
let myStr = "Hello I am Abdul Ghani. ";
let myStr1 = "I am a Programmer ";
let myStr2 = "I wrote my first code when I was 15 years old. ";
let myStr3 = "Now I am 16 years old. ";
let myStr4 = "I have learnt HTML , CSS and Now I am Learning JavaScript.";
let introduction = "";

/*
String Methods are as follows:
1. string.length;
2. slice(start, end) => Extracts a part of a string and returns a new string
3. substring(start, end)
4. substr(start, length)
5. charAt() => Returns the character at a specified index (position)
6. charCodeAt() => Returns the Unicode of the character at a specified index
7. concat() => Returns two or more joined strings
8. endsWith() => Returns if a string ends with a specified value
9. fromCharCode() =>	Returns Unicode values as characters
10. includes() =>	Returns if a string contains a specified value
11. indexOf() =>	Returns the index (position) of the first occurrence of a value in a string
12. lastIndexOf() =>	Returns the index (position) of the last occurrence of a value in a string
13. localeCompare() =>	Compares two strings in the current locale
14. match() =>	Searches a string for a value, or a regular expression, and returns the matches
15. repeat() =>	Returns a new string with a number of copies of a string
16. replace() =>	Searches a string for a value, or a regular expression, 
and returns a string where the values are replaced
17. search() =>	Searches a string for a value, or regular expression, 
and returns the index (position) of the match
18. slice() =>	Extracts a part of a string and returns a new string
19. split() =>	Splits a string into an array of substrings
20. startsWith() =>	Checks whether a string begins with specified characters
21. substr() =>	Extracts a number of characters from a string, from a start index (position)
22. substring() =>	Extracts characters from a string, between two specified indices (positions)
23. toLocaleLowerCase() =>	Returns a string converted to lowercase letters, using the host's locale
24. toLocaleUpperCase() =>	Returns a string converted to uppercase letters, using the host's locale
25. toLowerCase() =>	Returns a string converted to lowercase letters
26. toString()=> 	Returns a string or a string object as a string
27. toUpperCase() =>	Returns a string converted to uppercase letters
28. trim() =>	Returns a string with removed whitespaces
29. valueOf() =>	Returns the primitive value of a string or a string object
*/
let intro = introduction.concat(myStr, myStr1, myStr2, myStr3, myStr4);
console.log(intro);
console.log(intro.length);
console.log(intro.toLowerCase());
console.log(intro.toUpperCase());
console.log(intro);
console.log(intro[2]);
console.log(intro.indexOf("am"));
console.log(intro.lastIndexOf("am"));
console.log(myStr4.endsWith("JavaScript."));
console.log(intro.includes(","));
/*
substring() gives whole string if iths value is given in negative but slice returns last letters of string
if its value is negative
*/
console.log(intro.substring(10, 100));
console.log(intro.slice(1, 10));
console.log(intro.split(" "));
console.log(intro.replace("JavaScript.", "Java Script."));
console.log(intro.trim());
console.log(intro.substr(10 , 170));
console.log(intro.charAt(10));
console.log(intro.charCodeAt(10));
// console.log(intro.fromCharCode(10 , 165));
console.log(intro.match("Hello"));
console.log(intro.matchAll("is"));
console.log(intro.repeat(10));
console.log(intro.search("A"));
console.log(intro.startsWith("A"));
console.log(intro.toString(myStr));
console.log(intro.valueOf(myStr3));
// console.log(intro.localeCompare(myStr2 , myStr1));

/*
JavaScript Number Methods
*/

/*
Number Methods of JS are as follows:
1. isFinite() =>	Checks whether a value is a finite number
2. isInteger() =>	Checks whether a value is an integer
3. isNaN() =>	Checks whether a value is Number.NaN
4. isSafeInteger() =>	Checks whether a value is a safe integer
5. toExponential(x) =>	Converts a number into an exponential notation
6. toFixed(x) =>	Formats a number with x numbers of digits after the decimal point
7. toLocaleString() =>	Converts a number into a string, based on the locale settings
8. toPrecision(x) =>	Formats a number to x length
9. toString() =>	Converts a number to a string
10. valueOf() =>	Returns the primitive value of a number
*/

/*
JavaScript Boolean Methods
*/

/*
Boolean Methids of JAvaScript are as follows:
1. toString() =>	Converts a boolean value to a string, and returns the result
2. valueOf() =>	Returns the primitive value of a boolean
3. toSource() => Returns a string containing the source of the Boolean object;
 you can use this string to create an equivalent object.
*/

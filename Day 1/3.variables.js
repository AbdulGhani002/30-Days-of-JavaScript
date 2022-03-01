// Variables in JS
//var , let , const
var a = `I am a programmer`;
var a = `I am a "var" variable`;
console.log(a);
/*
Var can be redeclared and it can be overwritten.
Var have global scope
*/
let i = `I am a Programmer`;
i = `I am a "let" variable`;
console.log(i);
/*
Let can be redeclared but it can not be overwritten.
Let has block level Scope.It doesnot have a global scope.
*/
const x = `I am "const" variable`;
console.log(x);
/*
Const can neither be redeclared nor be overwritten.
Cont has block level scope. It doesnot has a global scope
*/


/*
Rules for declaring javasctipt variables.
1. Variable names cannnot be assignes as numbers
2. Can start with letters, numbers , _ , $
3. Variable names are case Sensitive
4. Names of varibales can be written in camelCase
5. (_ , $) are not recommended to use as variable names as they are used in OOPs
6. Var is not recommended to use
7. Const is initialized and declared in only one step.e.g. const a = 1;(true)
const c; c  = 10;(false)
*/
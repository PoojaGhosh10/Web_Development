//to print in console: 
console.log("Hello World");
//comments:Part of code which is not executed.
// To write a comment we use"//".
/*To write multiline comment */

//1. Variabes:container for a data.

//provide a meaningful name to the variables.
fullName="Pooja Ghosh";
//=operator is an assignment operator.
console.log(fullName);
console.log(typeof fullName);//to check the type of the variable stored 
y=undefined;//does not know what is stored
x=null;//knows what is stored but holds no value currently.
price=58.08;
isFollow=true;
console.log(isFollow);
//javascript is a dynamically typed language .no need to tell the type of data during its declaration.
//can store values of different data type in the same variable name.

//conventions for variables:
//case-sensitive-name and Name are different but donot use simliar name with different case. can create confusion later.
//$,_, letters, digits; no decorators are allowed
//cannot start with digits
//it has reserved words which cannot be used as variables names.
//try writing the names in camel case conventions.(other cases are kebab, pascal, snake cases...do not use in js.)


//though the above declaration of variables donot produce any error but use keywords (let, const, var) before the name of variables.
let fullname="Pooja";
//var:can be re-declared and updated
//global scope:can be used in the program anywhere.
var age=20;
var age=40;//later creates confusion in bigger codes...avoid using

//let :variables cannot be re-declared but can be updated.use this the most
//block scope:can be used only in a block 
let myNum=20.3;
myNum=40.3;
console.log(fullname);
console.log(age);
console.log(myNum);
//const: variables can be redeclared or updated. A block scope variable.
const age2= 24;//const variables should always be initialised or else produces error.
//age=45 produces error.
console.log(age2);
//undefined
console.log(myNum);
let a;
console.log(a);//produces undefined.
a=10;
console.log(a);//produces undefined.

//Data Types in Javascript:
//7-primitives: Number, undefined , string, null, BigInt, Symbol, 1-Non-Primitives: Object(arrays, functions)
//can check using typeof Operator.
//object:collection of values of primitive values
//stored in the form of key-value pairs in a collection.
const student={//even though const is used changing the attributes can be performed.because the whole object is not changed.
    fullName:"Pooja Ghosh",
    age:20,
    isPass:true
}
student.age+=1;
console.log(student);
console.log(student['age']);//double quote or single quote must be included.
//or
console.log(student.age);
//Product details
const pen={
    product:"ballpen",//typeof pen["product"]: string
    ratings:4,
    price: 720,
    offer:0.05
}
console.log(product);//typeof product:object



//To comment out all together select ctrl + / to comment out
//operators and conditional statements.
//operators: to perform some operations on data.
//Arithmetic operators: +,-,/,*, %,**,++,-- .
// let a=4;
// let b=3;
// console.log("a+b=",a+b);
// console.log("a^b=",a**b);
// a++;b--;//unary operator
// console.log("a++",a);

//Assignment operators:=,=+, -=, silarly for all.
//Comparison operators: ==,!=, (Equal to &type === and Notqual to &type !==), <,<=,>,>=
// let a = 5;
// let b = "5"
// console.log(a == b); //it will give true because internally string is changed to number
// console.log("a===b", a === b);// it is a stricter version---will give false.
//logical operators :&&, ||, !(not)
//Bitwise: &,|,~

//Ternary Operators ? :
//a(condition)? b(result1): color(result2)
// let age=20;
// let result= age>=18? console.log(true): console.log(false);

//conditional statements: to implement some conditions in the code.
//if-else:
// let mode = "Light-mode";
// let color;
// if (mode === "Light-mode") {
//     color = "white";
//     console.log(color);
// }
// else {
//     mode = "Dark-mode"
//     color = "black";
//     console.log(color);
// }
//if, if-else, if-else if-else.

//switch:
// switch(expr){
// case A:...break;
// CASE B: ...BREAK;
//default:   ;
// }

//Use of prompt -to store value from user
let fullName=prompt("Hello");
console.log(fullName);
//take a user-input and check multiple of 5 or not.
let num=prompt("Enter the number");
if(num%5===0){
    console.log("MULTIPLE OF 5.");
}
else{
    console.log("NOT A MULTIPLE OF 5.");
}

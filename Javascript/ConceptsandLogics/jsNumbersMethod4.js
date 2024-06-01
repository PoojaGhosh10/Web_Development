//Numbers.
//float and number will be true if samee value is ProgressEvent.
//converts boolean to number
console.log(Number(true));

const myNum=42;
const myFloat=42.01;
const myString="42.123abc";

//Number Methods
//The Number.isInteger()method determines whether the passed value is an Integer.//return true or false.
//console.log(Number.isInteger(myFloat));
//he Number.parseFloat()method return a floating pointr number. If a number cannot be parsed from the argument, it returns NaN(Not a Number).
console.log(Number.parseFloat(myString));//only return the numbers .
//same for parseInt();
//tofixed methods can be used to limit the floating point value after decimal point.
console.log(myFloat.toFixed(1));
//chaining method
console.log(Number.parseFloat(myString).toFixed(2));
//Number.isNaN();
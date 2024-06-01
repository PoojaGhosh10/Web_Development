//A JavaScript function is a block of code designed to perform a particular task.

//A JavaScript function is executed when "something" invokes it (calls it).

//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// The code to be executed, by the function, is placed inside curly brackets: {}

// The () operator invokes (calls) the function:
//Function parameters are listed inside the parentheses () in the function definition
function myFunc(num1, num2){
    return num1+num2;//returns only one value.
}
//caller
console.log(myFunc(3,4));//Function arguments are the values received by the function when it is invoked.

//The code inside the function will execute when "something" invokes (calls) the function:
// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)


//anonymous or arrow function and the way to call.
let result= (num1, num2)=>{
    return num1*num2;
}
console.log(result(4,5));
// Accessing a function without () returns the function and not the function result:
// let value = toCelsius;
// console.log(value);
hello = () => {
    return "Hello World!";
  }
  console.log(hello());
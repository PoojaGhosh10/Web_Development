//arrays in javascript
// An array is a special variable, which can hold more than one value:
// const cars = ["Saab", "Volvo", "BMW"];


//creation:
const arr=["Pooja", "Anushka","Prachi"];//a declaration can span multiple lines.
// An array declared with const must be initialized when it is declared.
// Arrays declared with var can be initialized at any time.

//access:
// console.log(arr[0]);
//for loop
//The array property: arr.length;
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
//for-of loop: preferred way
// for(let name of arr){
//     console.log(name);
// }

//forEach Method in Arrays:
// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// arr.forEach(function myFunc(val){
//     console.log(val);
// });
// //arrow function
// arr.forEach((val)=>{
//     console.log(val);
// });
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)
// //the whole syntax: 
// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }

//The array map() method
//traverse the whole array and return the new array.
// const result= arr.map((val) =>{
//     return val;
// });
// console.log(result);

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }

//The array filter() method:
//it filters the given array according to the conditions and produces a new array according to it.
// const arrNum=[1,2,3,4,5,6,7,8,9,10];
// const result=arrNum.filter(myFunc);
// function myFunc(items){
//     return items%2===0;
// }
// console.log(result);

//The array reduced() method
// const arrNum=[1,2,3,4,5,6,7,8,9,10];
// const result2=arrNum.reduce((finalVal, currVal)=>{
//     return finalVal+currVal;
// });
// console.log(result2);

//other Array methods:
//push, pop, unshift, concat, slice, splice
// const arrNum=[1,2,3,4,5,6,7,8,9,10];
// arrNum.push(11);
// console.log(arrNum);
// arrNum.pop();
// console.log(arrNum);
// arrNum.unshift(0);
// console.log(arrNum);
// const arrNum2=[13,12];
// const newArr=arrNum.concat(arrNum2);
// console.log(newArr);

//slice:returns a piece of array
// const arrNum=[1,2,3,4,5,6,7,8,9,10];
// const sliceArr=arrNum.slice(3,7);
// console.log(sliceArr);

//splice :can replace, delete, add.
// const arrNum=[1,2,3,4,5,6,7,8,9,10];
// arrNum.splice(2,3,4,5,6);
// console.log(arrNum);
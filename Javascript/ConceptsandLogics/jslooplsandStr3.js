//loops and strings
//loops: they are used to execute a piece of code again and again.
//music listening in loop
//for loop :initialize once termination condition   updation
// for(let i=0;i< 5; i++){
//     console.log("Hello World");//executed 5 times.
// }
//loop ended here.

//calculate sum of first n numbers.
// let sum=0; let num=5;
// for(let i=1;i<=num;i++){//i is a block scope.
//     sum+=i;
// }
// console.log(sum);
//infinite loop should be avoided by providing termination conddition which at a point turns out to be false.
//while loop and do-while loop 

//for-of loop and for-in to iterate through special data-types and objects
// let strVal="Pooja";
// let size=0;
// for(let val of strVal){//iterator has each characters.
//     console.log(val);
//     size++;
// }
// console.log(size);
// //for-in loop for objects
// let student={
//     fullName:"Pooja Ghosh",
//     age:20,
//     isPass:true
// };
// for(let key in student){
//     console.log("key value =",student[key]);
// }

//generate a random number and make the user keep guessing.
// let gameNum=34;
// let userNum=prompt("Enter a number.");
// while(gameNum!=userNum){
//     if(gameNum<userNum){
//         alert("Failed! Try entering a smaller number");
//     }
//     else if(gameNum>userNum){
//         alert("Failed! Try entering a bigger number");
    
//     }
//     userNum=prompt("Try again to guess the correct number!");
// }
// alert("Succesful");

//string
//let str1="Pooja" //or 'Pooja


//in-built properties.
//let len=str1.length;
//console.log(len);
//console.log(str1[0]);//to access the characters in a string using index starting from 0.


//Template Literals:a way to have embedded expressions in strings.
//it is written using back ticks
//${expression}it first calculates the value and then StorageEvent.
//let sentence=`This is a special string`;
//console.log(typeof sentence);

// let obj={
//     item:"pen",
//     price:10,
// };

// console.log("The cost of " ,obj.item, "is", obj.price); value is highlighted because of its type is number
//using tempate literals:
// let output=`the cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);//here it is changed to string.

//escape character:
//console.log("Pooja\nShruti");//escape character length will be 1 not 2.

//String methods: built-in functions to perform some tasks.
//let str1="Pooja";
//str1.toUpperCase();
//str1.toUpperCase();//the method does not make any kind of changes to original string.//store it in a new string
//strings are immutable(cannot be changed).
//console.log(str1);
//str1.trim();//to remove white spaces from starting and ending position.
//str1.slice(start,end);start is inclusive and end is non-inclusive
//ending not given then return till the end. it nothing passed then the whole String.
//str1.concat(str2);//join two strings-string1 and string 2
//str.replace(searchVal, newVal);//hellow-> yellow
//str.charAt(0) pass thee index you want to search the character
//str1[0]='S';//will not replace rather use replace methods.
//str1.indexOf("mat");//return the index of first occurence of the string.
//str1.lastIndexOf("mat");//last occurence of the string
//str1.split("e");//will split the string wherever it encounters the delimiter.
//if passed empty then the whole string breaks into a Character.

//Practise: Prompt the user to enter their full name.Generate a username for them based on the input:@fullnameNameLength

// let fullName=prompt("Enter the user name:");
// let len=fullName.length;
// let userName=`@${fullName}${len}`;
// console.log(userName);

const { clear } = require('console');
const fs=require('fs')
// fs.mkdirSync("justCheck");
// run it to create and then comment it out
// if the file does not exist then it will create and write it . if same command written again .It will be overridden.so try using appendFile.
// fs.writeFileSync("bio.txt", "My name is Pooja");
// fs.appendFileSync("bio.txt","Hii");

//  const data=fs.readFileSync("bio.txt");
// console.log(data);
// {/* <Buffer 4d 79 20 6e 61 6d 65 20 69 73 20 50 6f 6f 6a 61 48 
// 69 69> */} it produces the buffer result not the original string.
// To get the original string use toString METHODS.
// const org_data= data.toString();
// console.log(org_data);
// // My name is PoojaHii-Output

// // another way is by using utf8:
// const see_data=fs.readFileSync("bio.txt", "utf8");
// console.log(see_data);


// //rename the file to mybio.txt
// fs.renameSync("bio.txt", "myBio.txt");

// to delete the file
// fs.unlinkSync("myBio.txt");
// 

fs.rmdirSync("justCheck");

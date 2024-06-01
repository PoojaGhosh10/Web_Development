// to work with file and directory path
const path=require("path");
console.log(path.dirname("C:/Users/lenovo/OneDrive/Desktop/Nodejs/FileSystem/pathModules/pathex.js"));


//name of the extension
// console.log(path.extname("C:/Users/lenovo/OneDrive/Desktop/Nodejs/FileSystem/pathModules/pathex.js"));

// //name of the file
// console.log(path.basename("C:/Users/lenovo/OneDrive/Desktop/Nodejs/FileSystem/pathModules/pathex.js"));


//store it to display as an object
const myPath=path.parse("C:/Users/lenovo/OneDrive/Desktop/Nodejs/FileSystem/pathModules/pathex.js");
console.log(myPath.root);//can use ext, path, etc


//useful in validation


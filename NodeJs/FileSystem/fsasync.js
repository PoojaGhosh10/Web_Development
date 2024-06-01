const fs= require("fs");
//to acheive asynchronous way
// fs.writeFile("read.txt", "Today is an awesome day",//callback
// (err)=>{
//     console.log("files is created.");
//     console.log(err);
// });
//why is callback needed?
// once the work is completed then what to do next. 

//to append the file
// fs.appendFile("read.txt", "How was your day?", (err)=>{
//     console.log("Task completed")
// });
//err is passed to check if there is some error or not.

//to read file
fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data);
});
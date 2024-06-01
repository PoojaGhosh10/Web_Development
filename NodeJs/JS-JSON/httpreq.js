// const http= require("http");
// const fs=require("fs");

// const server= http.createServer((req,res)=>{
//     // res.end("Hello from the server side.");
//     //to make only one time call
//     // fs.readFile("C:/Users/lenovo/OneDrive/Desktop/Nodejs/HttpHandle/useapi.js","utf-8",(err, data)=>{
//     //     console.log(data);
//     //     const objData= JSON.parse(data);
// //using url requests

//     console.log(req.url);

// if(req.url=="/"){
//     res.end("This is from a server side ");

// }

// else if(req.url=="/about"){
//     res.end("Hello from about us");
// }
// else if(req.url=="/userapi"){
//     // fs.readFile("C:/Users/lenovo/OneDrive/Desktop/Nodejs/HttpHandle/useapi.js","utf-8",(err, data)=>{
//     //     console.log(data);
//     //     const objData= JSON.parse(data);
//         res.end(objdData[0].name);
//     });
//     //res.end("Hello from the userapi sides.");


// //similar as many web pages 
// //to produce an error message message if page does not exist
// else{
//     //to make it actual error page
//     res.writeHead(404,{"Content-type": "text/html"});//the header stores these value
//     res.end("404 error paage doesn't exist");
// }

// });

// //to lsiten to the requests
// server.listen("5500","127.0.0.1",()=>{//port no. and local hosts
//     console.log("Listening to the port number 5500.");
// });



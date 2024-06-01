// const add=(a,b)=>{
//     return a+b;
// }
// const multiply=(a,b)=>{
//     return a*b;
// }
// const sub=(a,b)=>{
//     return b-a;
// }


// //to export the functions we have defined
// module.exports={add, multiply, sub}
//instead of this one other way to export is given below:
exports.add=(a,b)=>{
    return a+b;
}
exports.multiply=(a,b)=>{
    return a*b;
}
exports.sub=(a,b)=>{
    return b-a;
}


//to import it tto the app.js go there and check the command

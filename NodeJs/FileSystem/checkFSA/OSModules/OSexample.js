//information about Operating system using os modules which provide operating system related utility methodss and properties.It can be accessed using :


const os= require('os');
//architecture of OS
console.log(os.arch());//output x64


//to check the free memory
// const freemem=os.freemem();
// console.log(`${freemem/1024/1024/1024}`); //the result displayed is in bytes convert to gigabyte as per requirement

//total memory
const totalmem=os.totalmem();
console.log(`${totalmem/1024/1024/1024}`);
console.log(os.type());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());





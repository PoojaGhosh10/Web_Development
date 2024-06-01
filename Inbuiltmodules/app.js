const os=require('os');


//create own modules
//trying to import the module math.js
const math=require('./math')
//or
const{add, multiply, sub}= require('./math')
console.log(math.add(2,3))
//or
console.log(math.add(2,3))

//to  import module
const path= require('path')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())


//for directory name and file name path 
console.log(__dirname)
console.log(__filename)

//the pathname
console.log(path.dirname(__filename))
console.log(path.basename(__filename))//just the file name
console.log(path.extname(__filename))//the extension used in the file

console.log(path.parse(__filename))//get each individual value



//create own modules
//trying to import the module math.js

//Node js has some missing JS apis like fetch
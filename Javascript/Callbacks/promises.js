//promise is an object that links producing code and consuming code

let myPromise= new Promise((myRes, myRej)=>{
    var x=24;
    if(!(x>0))
    myRes("x is printed");
    else 
    myRej("x is rejected");
});


myPromise.then(function(value){
    console.log(value);
}, function(err){
    console.log(err);
});



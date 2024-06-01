async function myDisplay(){
    let myPromise=new Promise(function(resolve){
        setTimeout(function(){
            resolve("I love You!!");
        },5000);
    });
    document.getElementById("sample").innerHTML= await myPromise;
}
myDisplay();
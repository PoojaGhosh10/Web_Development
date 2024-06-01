//to fetch the api and print it in json format

/*fetch("https://data.covid19india.org/v4/min/data.min.json").then((value)=>{
    //console.log(value);
    return value.json();
}).then((actualdata)=>{
    console.log(actualdata)
}).catch((err)=>{
    console.log(err);
});*/

fetch("https://data.covid19india.org/v4/min/data.min.json").then((value)=>{
    //console.log(value);
    return value.json();
}).then((actualdata)=>{
    console.log(actualdata.AN.delta);//to get the particular object
    const myData=actualdata.AN.delta.tested;
    document.getElementById("demo").innerHTML= myData;//can also use backtick to form the sentence.
    //`the data is ${mydata.AN.delta} and produce a full senetnce`

}).catch((err)=>{
    console.log(err);
});

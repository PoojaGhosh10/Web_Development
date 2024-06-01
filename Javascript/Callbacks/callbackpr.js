const arr=[-2,-3,-1,4,5,6,9,8];

var checkPos= (x)=>{
    return x>0?true:false;
}

var storeVal=(arr,callback)=>{
    var newArr=[];
    k=0;
    for(const name of arr){
        if(callback(name)){
            newArr[k++]= name;
        }
    }
    return newArr;
}


const postN2=storeVal(arr, checkPos);
console.log(postN2);

const postN=storeVal(arr,(x)=>{
    return x>0?true:false;
});
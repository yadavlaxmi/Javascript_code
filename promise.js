let outfilment=(result)=>{
    console.log(result);
}
let onRejection=(error)=>{
    console.log(error)
}

const count=true;
let prom=new Promise(function(truly,falsy){
    if (count){
        truly("8 is greater then 7")
    }
    else{
        falsy("7 is not greater then 7")
    }
});

prom.then(outfilment);
prom.catch(onRejection);
function  prom(complete){
    return new Promise(function(resolve,reject){
        if(complete){
            resolve("I am successful")
        }
        else{
            reject("i am failed")
        }
      });
}
let outfilment=(result)=>{
    console.log(result);
}
let onRejection=(error) =>{
    console.log(error);
}
prom(true).then(outfilment)
prom(true).catch(onRejection)

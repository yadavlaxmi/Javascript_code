let readlineaSync=require("readline-sync");
var a=readlineaSync.questionInt("enter a number")
var b=readlineaSync.questionInt("enter a number")
var c=readlineaSync.questionInt("enter a number")
if(a+b+c==180){
    console.log("it is valid")
}
else{
    console.log("it is not valid")
}
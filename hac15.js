let readlineaSync=require("readline-sync");
var length=readlineaSync.questionInt("enter a number")
var breath=readlineaSync.questionInt("enter a number")
if(length==breath){
    console.log("it is square")
}
else{
    console.log("it is not square")
}
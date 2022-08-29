let readlineaSync=require("readline-sync");
var buy=readlineaSync.questionInt("enter a number")
var sell=readlineaSync.questionInt("enter a number")
if(buy<sell){
    console.log("profit")
}
else{
    console.log("loss")
}
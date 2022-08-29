let readlineaSync=require("readline-sync");
var user=readlineaSync.questionInt("enter a number")
if (user>0){
    console.log("positive")
}
else if (user<0){
    console.log("negative")
}
else if (user==0){
    console.log("zero")
}
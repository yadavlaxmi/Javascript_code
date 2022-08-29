let readlineaSync=require("readline-sync");
var user=readlineaSync.questionInt("enter a number")
if(user%2==0){
    console.log("even")
}
else{
    console.log("odd")
}
let readlineaSync=require("readline-sync");
var num=readlineaSync.questionInt("enter a number")
if(num%3==0 && num%7==0){
    console.log("navgurukul")
}
else if (num%3==0){
    console.log("nav")
}
else if (num%7==0){
    console.log("gurukul")
}
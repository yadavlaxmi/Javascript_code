let readlineaSync=require("readline-sync");
var user=readlineaSync.questionInt("enter a number")
if(user%400==0 && user%100!=0){
    console.log("year is leap year")
}
else{
    console.log("not leap year")
}
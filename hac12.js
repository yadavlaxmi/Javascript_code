let readlineaSync=require("readline-sync");
var month=readlineaSync.questionInt("enter a number")
if(month==2){
    console.log("28/29 days")
}
else if(month==4 || month==6 || month==9 || month==11){
    console.log("30 days")
}
else{
    console.log("31 days")
}
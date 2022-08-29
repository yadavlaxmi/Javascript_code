let readlineaSync=require("readline-sync");
var num=readlineaSync.questionInt("enter any char")
if(num<0){
    console.log(num*-1)
}
else{
    console.log(num)
}
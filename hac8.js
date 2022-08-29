let readlineaSync=require("readline-sync");
var user=readlineaSync.questionInt("enter any char")
if (user>=65 && user<=90 || user>=97 && user<=122){
    console.log("char is alphabet")
}
else{
    console.log("not alphabet")
}
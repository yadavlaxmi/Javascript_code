let readlineaSync=require("readline-sync");
var a=readlineaSync.questionInt("enter a number")
var b=readlineaSync.questionInt("enter a number")
var c=readlineaSync.questionInt("enter a number")

if (a>b && a<c || a<b && a>c){
    console.log("a 2nd minimum");
}
else if(b>a && b<c || b<a && b>c){
    console.log("b 2nd minimum");
}
else if (c>a && c<b || c<a && c>b){
    console.log("c 2nd minimum");
}
else{
    ("nothing")
}

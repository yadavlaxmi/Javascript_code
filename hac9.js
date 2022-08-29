let readlineaSync=require("readline-sync");
var ch=readlineaSync.question("enter any char")
if ( ch>="a" && ch<="z"){
    console.log("lowercase alphabet")
}
else if (ch>="A" && ch<="Z"){
    console.log("uppercase alphabet")
}
else{
    console.log("no alphabet")
}
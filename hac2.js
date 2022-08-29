var value = "delhi";
let readlineaSync=require("readline-sync")
var guess=readlineaSync.question("enter any city")

if (guess != value){
console.log("Aapka guess galat hai")
}

else{
console.log("Aapka guess sahi hai")
}



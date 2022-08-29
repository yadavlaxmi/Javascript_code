let readlineaSync=require("readline-sync");
var num1=readlineaSync.questionInt("enter a number")
var num2=readlineaSync.questionInt("enter a number")
var symble=readlineaSync.question("enter a symble")
if(symble=="+"){
    console.log(num1+num2)
}
else if(symble=="-"){
    console.log(num1-num2)
}
else if(symble=="*"){
    console.log(num1*num2)
}
else if(symble=="/"){
    console.log(num1/num2)
}
else{
    console.log("nothing")
}


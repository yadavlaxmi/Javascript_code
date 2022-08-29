var speed1=60;
let readlineaSync=require("readline-sync")
var speed=readlineaSync.questionInt("enter any speed")

if (speed <= 60){
console.log("Gaadi speed limit ke andar thi.")
}

else{
console.log("Gaadi speed limit ke bahar thi.")
}
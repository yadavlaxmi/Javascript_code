let a =require("readline-sync");
var number=a.questionInt("enter a number");
// console.log(number)
if (number<10){
console.log("num is less than 10");
}
else if(number>10 && number<20){
console.log("num is less than 20");
}
else{
console.log("greater than 20");
}
// var a="My name is kumar, and my friend’s name is Dhamu" 
// var subString="is"
// var i=0
// var c=0
// b=a.split()
// while(i<b.length){
//     if(b[i]==subString){
//         c++;
//     i++;
//     }
// }
// console.log(c)

//The substring is there 2 times in the main string.
var mainString="My name is somi, and my friend’s name is kp"
var list = mainString.split(" ")
var subString = "is"
var count = 0
for (var i = 0;i < list.length;i++){
    if (list[i] == subString){
        count ++
    }
         
}   
console.log("The substring is there ",count," times in the main string.");



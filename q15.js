function find_age(age){
    if(age>18){
        console.log("you are illegible for vote")
    }
    else{
        console.log("you are not illegible")
    }
}
var num=require("readline-sync")
var age=num.questionInt("enter any age")
find_age(age)
let n=require("readline-sync");

let choose_ascii=n.question("enter number: ");

var ascii_char=95+choose_ascii

for (var i=97;i<=ascii_char;i++){
    console.log(ascii_char[i],end="");
}
function check_numbers(num1,num2){
    for(var i=0;i<6;i++){
        if(num1[i]%2 ==0 && num2[i]%2==0){
            console.log("dono even hai");
        }
        else{
            console.log("dono even nhi hai")
        }
        
    }
}
check_numbers([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])

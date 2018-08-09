function addTwoNums(num1, num2){
    if(typeof num1 !== "number" && typeof num2 !== "number"){
        return "needs numbers"
    } else if (num1 % 2 !== 0 && num2 % 2 !== 0){
        return "please put even numbers" 
    } else {
        return num1 + num2
    }
}




module.exports = {
    addTwoNums: addTwoNums
}
// This is a function that returns an array containing 
// numbers 1 to 100, but replaces any number divisible by 3
// with "fizz", any number divisible by 5 with "buzz", and if 
// any numbers are divisible by both 3 & 5 it replaces it 
// with "fizzbuzz".
function returnArr(){
    var arr = []
    for(var i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        arr.push("fizzbuzz")
      } else if(i % 3 === 0){
        arr.push("fizz")
      } else if(i % 5 === 0){
        arr.push("buzz")
      } else {
        arr.push(i)
      }
    } return arr
  }
  
  returnArr()
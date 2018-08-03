// Array Filter Exercises

function fiveAndGreaterOnly(arr){
    var highNumsArray = arr.filter(function(num){
        if(num > 5){
          return num
        }
    })
    return highNumsArray
  }
  
  console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
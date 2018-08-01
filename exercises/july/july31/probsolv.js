// Write function to return largest number in an array
var arr = [3, 5, 2, 8, 1] // => 8

function largest(arr){
    var nextNum = 0
  
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > nextNum) {
            nextNum = arr[i]
        } 
    } return nextNum
}
  
largest(arr)

// Take array of strings with characters and return 
// each string that has a letter
var arr2 = ["#3", "$$$", "C%4!", "Hey!"]

function letterPresent(arr){
  var newArr = []

  for(var i = 0; i < arr2.length; i++){
    if(arr[i].match(/[a-z]/i)){
      newArr.push(arr2[i])
    }
  } return newArr
}

letterPresent(arr2)

// Write a function that takes num1 and num2 and return
// whether num1 is divisible by num2
function isDivisible(num1, num2){
  
    if(num1 % num2 === 0){
      return true
    } else {
      return false
    }
  }
  
  isDivisible(4, 2) // => true
  isDivisible(9, 3) // => true
  isDivisible(15, 4)// => false

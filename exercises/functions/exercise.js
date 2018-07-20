//First point
function twoNum(num1, num2){
    return num1 + num2
  }
  
  //Second point
  function threeNum(num1, num2, num3){
    return num1 + num2 + num3
  }
  
  //Third point
  function numOddOrEven(num1){
    if(num1 % 2 === 0){
      return "Even"
    } else {
      return "Odd"
    }
  }
  console.log(numOddOrEven(234))
  
 //Fourth point
function stringLength(string1){
    if(string1.length <= 20){
      return string1 + string1
    } else {
      return string1.length / 2
    }
  }
  
  console.log(stringLength("Robertooooooooooooooo"))
  

// Write a function that accespts three numbers as parameters,
// and returns the largest of those numbers.

// 1. Understand the problem
// 2. Pseudocode/make a game plan
// 3. Execute your plan
// 4. Look back over your code
function findTheBiggest(num1, num2, num3){
    if (num1 > num2 && num1 > num3){        // Compare 1 to 2 and 3
        return num1
    } else if (num2 > num1 && num2 > num3){ // Compare 2 to 1 and 3
        return num2
    } else {                                // Leftover
        return num3
    }
}

console.log(findTheBiggest(20, 5, 30)) // 30
console.log(findTheBiggest(21, 22, 3)) // 22
console.log(findTheBiggest(10, 100, 1000)) //1000

// This can also be written as:
function findTheBiggest(num1, num2, num3){
    return Math.max(num1, num2, num3)          // Shortcut!
}

function findTheBiggest(arr){
    var hongKong = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > hongKong){
            hongKong = arr[i]
        }
    }
    return hongKong
}

console.log(findTheBiggest([20, 5, 30])) // 30
console.log(findTheBiggest([21, 22, 3])) // 22
console.log(findTheBiggest([10, 100, 1000])) //1000
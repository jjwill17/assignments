// Array Reduce Exercise

// Turn an array of numbers into a total of all the numbers
var total = [1,2,3]

function totalFunc(arr){
  return arr.reduce(function(a, b){
    return a + b
  })
}

console.log(totalFunc(total))

// Turn an array of numbers into a long string of all those numbers
var stringConcat = [1,2,3]

function toStringFunc(arr){
  return arr.reduce(function(a, b){
    return a.toString() + b
  })
}

console.log(toStringFunc(stringConcat))

// Turn an array of voter objects into a count of how many people voted
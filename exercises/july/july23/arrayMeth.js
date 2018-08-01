// .push(variable) - adds to the end of the array
// .pop() - removes whatever the last indexed item is in an array.
// .shift() - removes the beginning indexed item
// .unshift(variable) - opposite of .shift()
// .splice() - .splice(startingPoint, amount, replacement1, replacement2, etc...)
// .slice() - creates a new array object - .slice(startingPoint, endingPoint)
// .indexOf() - finds only the first occurance of an indexed item in an array
// .lastIndexOf() - finds only the last occurance of an indexed item in an array
// .join() - joins indexes in an array
// .reverse() - reverses indexes in an array
// .concat() - joins contents from one array into the other if there are multiple arrays

var names = ["alvin", "paul", "lisa", "stan"]
var newNames = names.slice(0, 2)
console.log(newNames)

//Array Methods Assignment
var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

//First question
var newVeg = vegetables.pop()
//console.log("vegetables: ", vegetables);
//Second question
var newFruit = fruit.shift()
//console.log("fruit: ", fruit);
//Third
var index = fruit.indexOf("orange")
//console.log("index of orange: " + index);
//Fourth
fruit.push(index)
//console.log(fruit)
//Fifth
var veggieLength = vegetables.length
//console.log(veggieLength)
//Sixth
vegetables.push(veggieLength)
//console.log(vegetables)
//Seventh
var combine = fruit.concat(vegetables)
//console.log(combine)
//Eighth
var newArr = combine.splice(4, 2)
//console.log(combine)
//Ninth
var rev = combine.reverse()
//console.log(rev)
//Tenth
var finished = rev.toString()
//console.log(finished)


// Using both a string method (split()) and an array method (splice())
// to pull out the name 'Albert' from a string and put my name in its place

var str = "Hello my name is Albert"
var arr = str.split(" ")
console.log(arr)

function rename(arr){   
  arr.splice(4,1, "Justin")   
  return arr.join(" ")  // This will return the array back into a string
} 

rename(arr)
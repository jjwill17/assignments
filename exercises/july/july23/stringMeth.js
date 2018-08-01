//String Methods
function speak(){
    console.log("hello")
}

speak()

var myObj = {
    name: "John",
    age: 30,
    speak: function(){
        console.log("hi")
    }
}

myObj.speak()

//Using toUpperCase() string method
var str1 = "hello"
var str2 = "world"
console.log(str1.toUpperCase())

//concat string method joins strings together. This is the same as str1 + str2
var str1 = "hello "
var str2 = "world"
var newStr = str1.concat(str2)
console.log(newStr.toUpperCase())

//indexOf
var str1 = "hello friend"
var newStr = str1.indexOf("e") //Can also do ("e", 1) to get the specific indexed area??
console.log(newStr)

//slice pulls out a requested piece of a string
var str1 = "hello my friend"
var newStr = str1.slice(6,7) // this will look at index 6, but not past 6
console.log(newStr)

//split - splits up your parameter by the indicated character, while also taking out the character.
var str1 = "hello my friend"
var newStr = str1.split("i")
console.log(newStr)

//.toLowerCase
var str1 = "hellO my FrIend"
var newStr = str1.toLowerCase()
console.log(newStr)

//Assignment
//First function with string methods
function combineAndSlice(str1, str2, str3){
    var newStr = str1.slice(6).concat(str2, str3)
    console.log(newStr)
  }
  
  
  combineAndSlice("Hello", "my", "friend")

  //Second function with string methods
  function lowerCaseConcat(str1, str2, str3, str4, str5){
    var newStr = str1.concat(str2, str3, str4, str5).toLowerCase()
    console.log(newStr)
  }
  
  lowerCaseConcat("Hello ", "my ", "friend", ", today", " is fun.")

  //Third function with string methods
  function uppercase(str1, str2){
    var newStr = str1.concat(str2.toUpperCase())
    console.log(newStr)
  }
  
  uppercase("Hello ", "World")

  //Fourth function with string method
  function indexStuff(str1){
    var newStr = str1.indexOf("i")
    console.log(newStr)
  }
  
  indexStuff("ollyollieoxenfree")

  //Fifth function
  function doingSplit(str1, str2){
    var newStr = str1.concat(str2).split("e")
    console.log(newStr)
  }
  
  console.log(doingSplit("Hello", "World"))

  //Sixth function
  function whatIsSubstr(str1, str2){
    var newStr = str1.concat(str2).substr(0, 7)  //0 tells where to begin, and 7 is where to end
    console.log(newStr)
  }
  
  whatIsSubstr("Hello ", "World ")  //Will output "Hello W"

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
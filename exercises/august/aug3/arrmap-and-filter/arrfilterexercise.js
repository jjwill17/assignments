// Array Filter Exercises

// 1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
var fiveAndGreaterOnly = [3, 6, 8, 2]

function fiveAndGreaterOnlyFunc(arr){
  return arr.filter(function(num){
    if (num > 5){
      return num
    }
  })
}

fiveAndGreaterOnlyFunc(fiveAndGreaterOnly)

// 2. Given an array of numbers, return a new array that only includes the even numbers.
var numbers = [3, 6, 8, 2]

function evensOnly(arr){
  return arr.filter(function(num){
    if (num % 2 === 0){
      return num
    }
  })
}

evensOnly(numbers)

// 3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
var words = ["dog", "wolf", "by", "family", "eaten", "camping"]

function only5Char(arr){
  return arr.filter(function(word){
    if (word.length <= 5){
      return word
    }
  })
}

only5Char(words)

// 4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
var people = [{
    name: "Angelina Jolie",
    member: true
},
{
    name: "Eric Jones",
    member: false
},
{
    name: "Paris Hilton",
    member: true
},
{
    name: "Kayne West",
    member: false
},
{
    name: "Bob Ziroll",
    member: true
}]

function peopleWhoBelongToTheIlluminati(arr){
return arr.filter(function(person){
if (person.member !== true){
  return person
}
})
}

peopleWhoBelongToTheIlluminati(people)
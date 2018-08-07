// Array Sort Exercise

// Sort an array from smallest number to largest
var leastToGreat = [1, 3, 5, 2, 90, 20] 

function leastToGreatest(arr){
  return arr.sort(function(a, b){
    return a - b
  })
}

console.log(leastToGreatest(leastToGreat))

// Sort an array from largest number to smallest
var greatestToLeast = [1, 3, 5, 2, 90, 20]

function greatToLeast(arr){
  return arr.sort(function(a, b){
    return b - a
  })
}

console.log(greatToLeast(greatestToLeast))

// Sort an array from shortest string to longest
var lengthSort = ["dog", "wolf", "by", "family", "eaten"]

function sortLengthFunc(arr){
  return arr.sort(function(a, b){
    return a.length - b.length
  })
}

console.log(sortLengthFunc(lengthSort))

// Sort an array alphabetically
var alphab = ["dog", "wolf", "by", "family", "eaten"]

function sortAlphab(arr){
  return arr.sort(function(a, b){
    return b < a
  })
}

console.log(sortAlphab(alphab))

// Sort the objects in the array by age (I sorted them from oldest to youngest)
var byAge = [  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

function sortByAge(arr){
  return arr.sort(function(a, b){
    return b.age - a.age
  })
}

console.log(sortByAge(byAge))
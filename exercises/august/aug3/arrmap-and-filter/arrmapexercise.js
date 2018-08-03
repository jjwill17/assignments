// Make an array of numbers that are doubles of first array
function doubleNumbers(arr){
    var double = arr.map(function(num){
        return num * 2;
    })
    return double
}
  
doubleNumbers([2, 5, 100])

// Printing as a string
function stringItUp(arr){
    var stringIt = arr.map(function(num){
      return num.toString()
    })
    return stringIt
}

stringItUp([2, 5, 100])

// Capitalizing
function capitalizeNames(arr){
    return arr.map(function(ind){
    return ind.charAt(0).toUpperCase() + ind.slice(1).toLowerCase() 
    })
    
  }
  capitalizeNames(["john", "jacob", "JACob"])

  // Make an array of strings of the names
  var namesOnly = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
] 

function namesOnlyFunc(arr){
  return arr.map(function(names){
    return names.name
  })
}

namesOnlyFunc(namesOnly)

// If they are old enought to go to The Matrix
var makeStrings = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
] 

function namesOnlyFunc(arr){
  return arr.map(function(names){
    if(names.age > 17){
      return `${names.name} can go to The Matrix`
    } else {
      return `${names.name} is under age!!` 
    }
  })
}

namesOnlyFunc(makeStrings)

// Make an array of the names in <h1> and the ages in <h2>
var readyToPutInTheDOM = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
] 

function readyToPutInTheDOMFunc(arr){
  return arr.map(function(names){
      return `<h1>${names.name}</h1><h2>${names.age}</h2>`
  })
}

readyToPutInTheDOMFunc(readyToPutInTheDOM)
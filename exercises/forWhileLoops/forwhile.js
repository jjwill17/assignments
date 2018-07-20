// Even/Odd Looping assignment
for (var i = 0; i < 101; i++) {
    if(i % 2 === 0) {
      console.log("Even")
    } else {
      console.log("Odd")
    }
  }

//Loops and Arrays Practice
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]  

for (var i = 0; i < officeItems.length; i++) { 
  if(officeItems[i] === "computer") {
    console.log(officeItems[i])
  }
}

var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  
  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad.age >= 18) {
      console.log("old enough")
      } else {
        console.log("not old enought")
      }
    }    // Still need to figure this one out


// Loop Olympics assignment
for (var i = 0; i < 10; i++) {
  console.log(i)
}

for (var i = 9; i >= 0; i--) {
  console.log(i)
}

// Bronze Medal

var arr = []
for (var i = 0; i < 9; i++) {
  console.log(arr.push(i))
}

for (var i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (var i = 0; i < fruit.length; i+=2) {
  console.log(fruit[i])
}


// Silver Medal

var peopleArray = [  
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for (var i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name)
}


// Using the same array as above

var names = []
var occupation = []

for (var i = 0; i < peopleArray.length; i++) {
  peopleArray[i].name = names
  console.log(names.push)
}
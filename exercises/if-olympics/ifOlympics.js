if (5 > 3) {
    console.log("is greater than")
  }
  
  
  if ("cat" === 3) {
    console.log("is the length")
  } else {
    console.log("guess it's not")
  }
  
  
  if ("cat" === "dog") {
    console.log("Weird")
  } else {
    console.log("not the same")
}
  

//Bronze
  
var person = {
    name: "Bobby",
    age: 12
}
  
if (person.age >= 18 ) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log("Nope, you're not old enough")
}

if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log("Nope, your name doesn't begin with a B")
}

if (person.name[0] === "B" && person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log("Nope, your name doesn't begin with a B or you're not old enough")
}

  //Silver

if (1 === "1") {
    console.log("strict")
} else if (1 == "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 === 4 || 3 * 4 > 10 && 5 + 10 > 10) {
    console.log("yes")
  } else {
    console.log("nope")
} 

//Gold

if (typeof "dog" === "string") {
  console.log(true)
} else {
  console.log(false)
}

if (typeof true === "boolean") {
    console.log(true)
} else {
    console.log(false)
}
 
//This if else statement below was interesting. When you define
//the "defined" variable, it becomes false. When there is no
//declared variable, this statement becomes true.

if (typeof defined === "undefined") {
    console.log(true)
  } else {
    console.log(false)
  }


// Example of ternary
  myNumber = 42;

  if(myNumber === 42) {
    console.log("The answer to the universe")
  } else {
    console.log("Wrong number")
  }

// Statement above as a ternary
  myNumber === 42 
    ? console.log("The answer to the universe")
    :console.log("Wrong number")
  
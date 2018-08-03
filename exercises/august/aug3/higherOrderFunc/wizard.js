// Wizard Battle Practice

var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]
  
  // 1. Printing each wizard's name on the console
wizards.find(function(wizard){
   console.log(wizard.name)
})
  
  // 2. Adding a property to every index in array
wizards.forEach(function(wizard){
    wizard["isAlive"] = true
})
  console.log(wizards)

// 3. Make new array of all "neutral good" wizards
wizards.filter(function(wizard){
    if(wizard.alignment === "neutral good"){
      return wizard
    }
})

// 4. Find the index of a wizard that is "lawful good"
wizards.findIndex(function(wizard){
    if(wizard.alignment === "lawful good"){
      return wizard
    }
})

// 5. Return a boolean stating if all wizards are alive or not
wizards.every(function(wizard){
    if(wizard.isAlive){
      return true
    }
})

// 6. Return boolean that states if at least one wizard is "neutral good"
wizards.some(function(wizard){
    if(wizard.alignment === "neutral good"){
      return true
    }
})

// 7. Check every "alignment" for every wizard & kill those that
// are "neutral good". (Modify isAlive to "false" for each of them)
wizards.forEach(function(wizard){
    if(wizard.alignment === "neutral good"){
      wizard["isAlive"] = false
    }
})
console.log(wizards)

// 8. Return a Boolean that states whether or not all the wizards are alive.
wizards.every(function(wizard){
    if(wizard.isAlive === true){
      return true               // Will return false since not all are living
    }
})

// 9. Return a Boolean that states whether or not some of the wizards are alive.
wizards.some(function(wizard){
    if(wizard.isAlive === true){
      return true               // Will return true since not some are living
    }
})
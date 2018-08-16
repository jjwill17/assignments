// ES6 Practice

// Replace all vars with let and const
let name = 'John'
let age = 101
const pets = ["cat", "dog"]

let petObjects = []

for (let i = 0; i < pets.length; i++){
  let pet = {type: pets[i]}
  if (pets[i] === "cat"){
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}
console.log(petObjects)

// Re-write this .map() using an arrow function:
// const vegetables = carrots.map(function(carrot){
//     return {type: "carrot", name: carrot}
// })

const vegetables = carrots.map(carrot => {return {type: "carrot", name: carrot}})

// Re-write this .filter() using a fat arrow function:
// friends = people.filter(function(person){
//     return !!person.friendly
// })

friends = people.filter(person => !!person.friendly)

// re-write the following functions to be fat arrow functions:
// function doMathSum(a, b){
//   return a + b
// }

// var produceProduct = function(a, b){
//   return a * b
// }

const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b

// write a functions that takes a firstName, a lastName, an age and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

let firstName = "Jane"
let lastName = "Doe"
let age = 100

// ES5 function
function retString(firstName, lastName, age){
  return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
retString("Justin", "Willmore", 22)

// Converted to ES6
const retString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
console.log(retString("Justin", "Willmore", 22))

// Use the shorthand syntax to make the following code block take up one line:
// const dogs = animals.filter((animal)=>{
//   if (animal.type === "dog"){
//     return true
//   } else {
//     return false
//   }
// })

const dogs = animals.filter(animal => (animal.type === "dog") ? true : false )


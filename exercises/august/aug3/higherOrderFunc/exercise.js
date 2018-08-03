// High Order Functions exercise

var cars = [
    {
      make: "ford",
      model: "E150",
      year: 2005,
    },
    {
      make: "chevy",
      model: "camero",
      year: 2007,
    },
]

//Use .forEach() to replace the following for loop:
// for (var i = 0; i < cars.length; i++) {  
//   console.log(`${cars[i]} goes vroom`);
// }
cars.forEach(function(car){
    console.log(`${car.make} goes vroom`)
})

// Use .map() to replace the following for loop:
// var angryCars = [];
// for (var i = 0; i < cars.length; i++) {  
//   angryCars.push(cars[i].toUpperCase());
// }
var angryCars = []
cars.map(function(car){
  return angryCars = car.make.toUpperCase()
})

// Use .filter() to replace the following for loop:
// var newCars = [];
// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].year > 2005){
//     newCars.push(cars[i]);
//   }
// }
var newCars = []
cars.filter(function(car){
  if(car.year > 2005){
    return newCars = car
  }
})

// Use .find() to replace the following for loop:
// for (var i = 0; i < cars.length; i++) {  
//     if (cars[i].model === "E150"){
//       var coolVan = cars[i];
//       break;
//     }
// }
cars.find(function(car){
    if(car.model === "E150"){
      var coolVan = car.model
      return coolVan
    }
})

// Use .some() to replace the following for loop:
// for (var i = 0; i < cars.length; i++) {  
//     if (cars[i].model === "E150"){
//       console.log("It is true that there is one or more E150s");
//       break;
//     }
// } 
cars.some(function(car){
    if(car.model === "E150"){
      console.log("It is true that there is one or more E150s")
      return true
    }
})

// Use .every() to replace the following for loop.
// for (var i = 0; i < cars.length; i++) {  
//     if (cars[i].make != "E150"){
//       console.log("It is false that every car is an E150");
//       break;
//     }
// }
cars.every(function(car){
    if(car.make !== "E150"){
      console.log("It is false that every car is an E150")
      return true
    }
})

// Use .reduce() to replace the following for loop and carTotals definition.
// var numberOfFords = 0;  
// var numberOfChevys = 0;
// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].model === "ford"){
//     numberOfFords ++;
//   }
//   if (cars[i].model === "chevy"){
//     numberOfchevys ++;
//   }
// }
// var carTotals = { numberOfFords: numberOfFords, numberOfchevys: numberOfchevys }
var carTotals = 
{ 
  numberOfFords: 0, numberOfChevys: 0 
} 

cars.reduce(function(total,car){
  if(car.make === "ford"){
    carTotals.numberOfFords++
  } else {
    carTotals.numberOfChevys++;
  }
},'')
console.log(carTotals)
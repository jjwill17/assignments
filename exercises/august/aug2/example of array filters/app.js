// var people = [
//   { name: "nate" },
//   { name: "joe" },
//   { name: "schmoe" },
//   { name: "paul" }
// ]
  
// var filtered = people.filter(function(person){
//   if(person.name !== 'joe'){
//     return person
//   }
// })
  
// console.log(filtered)
  

function fiveAndGreaterOnly(arr){
  var highNumsArray = arr.filter(function(num){
      if(num > 5){
        return num
      }
  }) 
  return highNumsArray
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
  
  
  
  // Higher Order Array Method
  // myArr.forEach(function(num){
  //   console.log(num + 1)
  // })
  
  // For loop
  // for(var i = 0; i < myArr.length; i++){
  //   console.log(myArr[i] + 1)
  // }
  
  
  
  
  // Using a function passed into another function as an argument
  
  // function printToScreen( func ){
  //   func()
  // }
  
  // function sayHello(){
  //   console.log('hello')
  // }
  
  // printToScreen( sayHello )
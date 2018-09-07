// Write a function that takes an array as a parameter and 
// returns a new array with the contents randomly "shuffled".

// One solution:
function shuffle (arr) {
  const copyArr = [...arr];
  const newArr = [];
  while (copyArr.length > 0) {
    newArr.push(...copyArr.splice(Math.floor(Math.random() * copyArr.length), 1))
  }
  return newArr;
}


// Another solution:
function shuffle2(arr){
  const copyArr = [...arr]
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(...copyArr.splice(Math.floor(Math.random() * copyArr.length), 1))
  }
  return newArr
}


console.log(shuffle([1,2,3,4,5]))
console.log(shuffle2([1, 2, 3, 4, 5]))
// Given a multi-dimensional array containing only primitive data types 
// (strings, booleans, and numbers), write a function that returns whether 
// EACH element within each subarray belongs to the same data type.
function checkTypes(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(typeof arr[j] !== typeof arr[j+1]){
          if(typeof arr[j] !== typeof arr[j-2]){
            newArr.push(arr[j])
          }
        }
      }
    } 
    console.log(newArr)
    if (newArr.length > 0){
      return true
    } else {
      return false
    }
}
  
const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]];
console.log(checkTypes(multiD1))
  
const multiD2 = [[true,false,true],[false,false,true]]
console.log(checkTypes(multiD2))
  
const multiD3 = [[true,false,true],[false,false,true],[1,2,3]]
console.log(checkTypes(multiD3))
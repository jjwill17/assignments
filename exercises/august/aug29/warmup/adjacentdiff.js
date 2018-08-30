// Given an array of strings, find the 3 adjacent elements with the 
// longest combined length. Return them in the form of an array.

const adjacentDifference = arr => {
    let max = 0
    let maxArr = []
    // for loop to check to see i, i+1, and i+2's combined length
    for(let i = 0; i < arr.length - 2; i++){
      // compare that length against a max to see highest length
      let temp = arr[i].length + arr[i + 1].length + arr[i + 2].length
      if(temp > max){
        max = temp
        maxArr = [arr[i], arr[i + 1], arr[i + 2]]
      }
    }
    return maxArr
  }
  
  console.log(adjacentDifference(["this", "is", "an", "array"]))
  // ["is", "an", "array"]
  console.log(adjacentDifference(["dragon", "is", "an", "array"]))
  // ["dragon", "is", "an"]
  console.log(adjacentDifference(['two', 'one', "dragon", "is", "an", "array"]))
  // ["dragon", "is", "an"]
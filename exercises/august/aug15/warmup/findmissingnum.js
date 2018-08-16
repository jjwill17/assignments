function findMissingNum(arr){
    arr.sort(function(a, b){
      return a-b
    })
    for (let i = 0; i < arr.length; i++){
      if(arr[i+1] !== arr[i]+1){
        return arr[i]+1
      }
    }
}

console.log(findMissingNum([2, 1, 3, 5]))
//Output: 4
console.log(findMissingNum([12, 10, 9]))
//Output: 11
console.log(findMissingNum([-3, 0, -2, 3, 2, -1]))
//Output: 1
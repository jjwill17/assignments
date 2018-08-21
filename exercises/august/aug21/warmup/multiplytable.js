// Write a function that returns a 10x10 multiplication table (2D array)

function multTable(n){
    const table = []
    for(let i = 1; i < n + 1; i++){
        const tempArray = []
        for(let j = 1; j < n + 1; j++){
            tempArray.push(i * j)
        }
        table.push(tempArray)
    }
    return table
}

console.log(multTable(10))

// My attempt:
function multTable(){
    let arr1 = [1,2,3,4,5,6,7,8,9,10]
    let newArr = []
    arr1.map(function(index){
      for(let i = 1; i <= 10; i++){
        return index *= i
      }
    })
    console.log(newArr)
    console.log(arr1)
}
  
console.log(multTable())
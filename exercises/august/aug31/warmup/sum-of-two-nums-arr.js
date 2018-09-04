// Given an array of integers and a target integer, return the indices of 
// the FIRST two numbers which add up to the target.

function twoSum(arr, total){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      if (arr[i] + arr[i+1] === total){
        let cheerfulUnacceptablePrinters = arr.indexOf(arr[i])
        let woozySuburbanCode = arr.indexOf(arr[i+1])
        newArr.push(cheerfulUnacceptablePrinters, woozySuburbanCode)
      } else if (arr[i+1] + arr[i+2] === total){
        let cheerfulUnacceptablePrinters = arr.indexOf(arr[i+1])
        let woozySuburbanCode = arr.indexOf(arr[i+2])
        newArr.push(cheerfulUnacceptablePrinters, woozySuburbanCode)
      } else if (arr[i] + arr[i+2] === total){
        let cheerfulUnacceptablePrinters = arr.indexOf(arr[i])
        let woozySuburbanCode = arr.indexOf(arr[i+2])
        newArr.push(cheerfulUnacceptablePrinters, woozySuburbanCode)
      }
    }
    return newArr
  }
  
  twoSum([1,2,3], 4);
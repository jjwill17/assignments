
function addS(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            return "no numbers" 
        } else if (arr[i].lastIndexOf("s") !== arr[i].length - 1){
            newArr.push(`${arr[i]}s`)
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}
// Original function:
// function addS(arr){
//     return arr.map(function(animal){
//         return animal + "s"
//     })
// }

// This function can be also written as:
// function addS(arr){
//     return arr.map(animal => {return animal + "s"})
// }


// this always goes to the very bottom of your page
module.exports = {
    addS: addS
}





// ASSERT FUNCTION

// var assert = function(actual, expected){
//     try{
//     if(actual !== expected){
//         throw {
//             type: "Fail",
//             details: {actual: actual, expected: expected}
//         }
//     } else {
//         console.log("Success", {type: "Test Passed", details: {actual: actual, expected: expected}})
//     }
// }
// catch(err){
//     console.log(err)
// }
// }
// assert(true, true)

// function addTwoNums(num1, num2){
//     return num1 + num2
// }

// assert(addTwoNums(1, 2), 3) // => This will pass because 1 + 2 = 3, which is also the expected number
// assert(addTwoNums(333, 45), 380) // => This will fail because 333 + 45 is 378, not the expected 380
var chai = require("chai")
var myFunctions = require("./app.js")
var addS = myFunctions.addS
var assert = chai.assert
// console.dir(assert) to see assertion library

//    describe,    it    //
// assert.equal(actual, expected)       // Great for primitive expressions
// assert.deepEqual(actual, expected)   // More complex expressions, like arrays

describe("Create a function to take array and add an 's' to the end of every word", function(){
    it("should end with an 's'", function(){
        assert.deepEqual(addS(['dog', 'cat', 'aligator']), ['dogs', 'cats', 'aligators']) /*(actual, expected)*/
    })
    it("should not allow numbers into array", function(){
        assert.equal(addS(['dog', 0, 3]), 'no numbers')
    })
    it("should not add an 's' if word ends with one already", function(){
        assert.deepEqual(addS(['dogs', 'cats']), ['dogs', 'cats'])
    })
})


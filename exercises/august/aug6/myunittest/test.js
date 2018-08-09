var chai = require("chai")
var myFunctions = require("./app.js")
var addTwoNums = myFunctions.addTwoNums
var assert = chai.assert

describe("Create a function to add two numbers that are even", function(){
    it("should be numbers", function(){
        assert.equal(addTwoNums(2,5), 7)  
    })
    it("should contain two even numbers", function(){
        assert.equal(addTwoNums(7,9), "please put even numbers")
    })
})
var chai = require("chai")
var myData = require("./app.js")
var people = myData.people
var olderThan18 = myData.olderThan18
var over18 = myData.over18
var assert = chai.assert


describe("Create a function to return a list of everyone older than age 18.", function(){
    it("should return an array of people only older than 18", function(){
        assert.deepEqual(olderThan18(people), over18)
    })
})
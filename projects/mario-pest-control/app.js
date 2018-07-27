// Declare form variable
var myForm = document.getElementById("myForm")

// We need to pull input and generate a total
var goombaInput = myForm.individual
var goombaValue = goombaInput.value

var bobombInput = myForm.individual2
var bobombValue = bobombInput.value

var cheepInput = myForm.individual3
var cheepValue = cheepInput.value


// This is the button click eventListener
myForm.addEventListener("submit", function(event){
    event.preventDefault();
    // Now we need to put all the vars above into a function and add them up
    var sumOfVars = goombaValue + bobombValue + cheepValue
    document.getElementById("output").innerHTML = "Hello";
    console.log("This function works")
})

// My original function to create p tag and output total
// myForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // Now we need to put all the vars above into a function and add them up
//     var sumOfVars = goombaValue + bobombValue + cheepValue
//     var sumTotal = document.createElement("P")
//     myForm.appendChild(sumTotal)
//     console.log("This function works")
// })


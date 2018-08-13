// Still having a problem when page loads the first time.
// The value for sessionStorage.getItem("clicks") is NaN 
// and in order to get the userClicks function to fire properly, 
// I need to manually go into the sessionStorage value for
// 'clicks' and set it to '0' 

// Calling previous number of clicks from local storage
// and setting it to numOfClicks
var numOfClicks = sessionStorage.getItem("clicks")

// Variable to get the 'clicks' id from DOM
var display = document.getElementById("clicks")

// Function to record each click and store it in localStorage (probably needs an if/else statement with current problem)
var userClicks = document.addEventListener("click", function(){
        // set numOfClicks to a number
        var newNum = parseInt(numOfClicks, 10)
        // add number of times a user clicks to numOfClicks
        numOfClicks = newNum + 1
        // display in the DOM the number of clicks
        display.innerHTML = numOfClicks
        // added a background color to the output
        display.style.backgroundColor = "orange"
        // store the number of clicks to the sessionStorage value of numOfClicks
        sessionStorage.setItem("clicks", numOfClicks)
})

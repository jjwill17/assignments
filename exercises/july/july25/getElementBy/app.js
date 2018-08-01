var myUl = document.getElementById("my-list")

// Need to create the new element
var myLi = document.createElement("li")
myLi.textContent = "This is from my app.js file"

//Append that element to the ul
myUl.appendChild(myLi)

console.log(myUl)


var submitBtn = document.addEventListener("submit-btn")

// Add eventListener to elements
submitBtn.addEventListener("click", addUserInput)


function addUserInput(){
    var userInput = document.getElementById("user-input")

    // Get user value
    var userText = userInput.value

    // Create the element
    var newListItem = document.createElement("li")

    // Add user text to that element
    newListItem.textContent = userText

    
    // Append that element to the DOM
    var myUl = document.getElementById("my-list")
    myUl.appendChild(newListItem)

    userInput.value = ""

}
var submitBtn = document.getElementById('submit-btn')

// Adding event listeners to elements
submitBtn.addEventListener("click", addUserInput)


function addUserInput(){
    var userInput = document.getElementById('user-input')

    // Get user input value
    var userText = userInput.value

    // Create an element 
    var newListItem = document.createElement('li')  

    // Add the user text to that element
    newListItem.textContent = userText
        // .innerHtml = <li> This lets me write the element as well </li>

    // Append that element to the DOM
    var myUl = document.getElementById('my-list')
    myUl.appendChild(newListItem)

    userInput.value = ""
}




// Styling in JS //
    // newListItem.style.backgroundColor = "blue"
    // newListItem.classList.add('box')
    // newListItem.classList.add("my-sample-class")
    // classList.add
    // classList.remove
    // classList.toggle
    // <element>.setAttribute('class', 'classname')





















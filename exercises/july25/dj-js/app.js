
document.getElementById("box").addEventListener("mouseover", mouseOver);
function mouseOver(){
    document.getElementById("box").style.backgroundColor = "blue";
}

document.getElementById("box").addEventListener("mousedown", mouseDown);
function mouseDown(){
    document.getElementById("box").style.backgroundColor = "red";
}

document.getElementById("box").addEventListener("mouseup", mouseUp);
function mouseUp(){
    document.getElementById("box").style.backgroundColor = "yellow";
}

document.getElementById("box").addEventListener("dblclick", dblClick);
function dblClick(){
    document.getElementById("box").style.backgroundColor = "green";
}

docmument.getElementById("box").addEventListener("onscroll", onMouseScroll);
function onMouseScroll(){
    document.getElementById("box").style.backgroundColor = "orange";
}


/*document.getElementById("box").addEventListener(keyCode, myKeyFunc)
function myKeyFunc(){
    var colorMap = {
        "b": "blue",
        "r": "red",
        "y": "yellow",
        "g": "green"
    }
    var x = event.which;
    document.getElementById("demo").style.backgroundColor = "colorMap";
}
*/








// var submitBtn = document.addEventListener("submit-btn")
// // Add eventListener to elements
// submitBtn.addEventListener("click", addUserInput)


// // function addUserInput()
// function addUserInput(){
// var userInput = document.getElementById("user-input")

// // Get user value
// var userText = userInput.value

// // Create the element
// var newListItem = document.createElement("li")

// // Add user text to that element
// newListItem.textContent = userText

// // Append that element to the DOM
// var myUl = document.getElementById("my-list")
// myUl.appendChild(newListItem)

// userInput.value = ""
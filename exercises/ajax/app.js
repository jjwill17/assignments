// JS
    // document.
    // How to create HTML Elements
        // var h1 = document.createElement("h1")
        // var display = document.getElementById("list")
// How to append HTML Element
        // h1.textContent = "Hey I'm an h1"
        // display.appendChild(h1)

// C-R-U-D
        // Http:

        // Post:   Create
        // Get:    Read 
        // Put:    Update
        // Delete: Delete

// AJAX - Asynchronous Javascript and XML (Extensible Markup Language)
var xhr = new XMLHttpRequest()
    // console.dir(xhr)

xhr.onreadystatechange = function(){
    // Code to request stuff
    if(xhr.readyState == 4 && xhr.status == 200){
        // parsing is turning raw JASON data (string) into a JS object we can access
        var data = JSON.parse(xhr.responseText)
        displayData(data)
    }

}
        // Need 1 request type, url, and if it is asynchronous
xhr.open("GET", "https://swapi.co/api/people/1/", true)
xhr.send()

function displayData(data){
    var display = document.getElementById("list")
    display.innerHTML = `
                        <h1 class="box">${data.name}</h1>
                        <p> Eye Color: ${data.eye_color}</p>
                        `
                        display.style.backgroundColor = "yellow"
}


var buttonClick = document.getElementById("myButton")
buttonClick.addEventListener("click", function(e){
    e.preventDefault()
    var displayStuff = document.getElementsByName("location").innerHTML = "Hello";
    alert(displayStuff)
})



var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText)
        console.log(data)
        parsePokemon(data)
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()

function parsePokemon(data){
    var display = document.getElementById("info");
    var displayPoke = data.objects[0].pokemon
    for(var i = 0; i < displayPoke.length; i++){
        var newLI = document.createElement("li")
        var displayText = document.createTextNode(displayPoke[i].name)
        display.appendChild(newLI)
        newLI.appendChild(displayText)
   }
}

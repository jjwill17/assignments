
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

window.addEventListener("wheel", onMouseScroll);
function onMouseScroll(){
    document.getElementById("box").style.backgroundColor = "orange";
}

// This is where you can press keys b,r,y,g,o for those to change
// the colors of the box
var box = document.getElementById("box") // Need to make a variable to grab the element
// need to start the eventListener with a window
window.addEventListener("keydown", function (event){ 
    if (event.code === "KeyB"){
        box.style.backgroundColor = "blue"
    } else if (event.code === "KeyR"){
        box.style.backgroundColor = "red"
    } else if (event.code === "KeyY"){
        box.style.backgroundColor = "yellow"
    } else if (event.code === "KeyG"){
        box.style.backgroundColor = "green"
    } else if (event.code === "KeyO"){
        box.style.backgroundColor = "orange"
    }
})

// var colorMap = {
//     66 : "blue",
//     82 : "red",
//     89 : "yellow",
//     71 : "green"
//     79 : "orange"
// }

// document.getElementById("box").addEventListener("keydown", myKeyFunc)
// function myFunction(event) {
//     var x = event.which || event.keyCode;
//     document.getElementById("box").style.backgroundColor =  x;
// }

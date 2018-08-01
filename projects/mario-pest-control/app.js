// This is the button click eventListener
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // We need to pull input and generate a total
    var goombaInput = document.querySelector("input[name='individual']").value

    var bobombInput = document.querySelector("input[name='individual2']").value

    var cheepInput = document.querySelector("input[name='individual3']").value

    // Now we need to put all the vars above into another var and add them up
    var sumOfVars = (+goombaInput * 5) + (+bobombInput * 7) + (+cheepInput * 11)
    document.getElementById("output").innerHTML = sumOfVars + " Coins!";
})

/*
function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }
*/



// My original function to create p tag and output total
// myForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // Now we need to put all the vars above into a function and add them up
//     var sumOfVars = goombaValue + bobombValue + cheepValue
//     var sumTotal = document.createElement("P")
//     myForm.appendChild(sumTotal)
//     console.log("This function works")
// })
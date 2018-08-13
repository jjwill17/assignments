
// User needs to be able to get current list of todos
    //Need a function to grab the user text, then upon button click, will display objects from todo
var display = document.getElementById("displayIt")
var x = document.getElementById("userText").value
document.addEventListener("submit", function(){
    var toGet = axios.get('https://api.vschool.io/justin/todo/')
    display.innerHTML = toGet
    console.log("Hello World")
})


// axios.get('https://api.vschool.io/justin/todo/').then(function(response){
//     console.log(response)
// }).catch(function(err){
//     console.log(err)
// })
// User should be able to add stuff to todo as well
    // User needs to be able to give a price to a todo item
    // User should be able to give a description
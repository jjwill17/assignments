///////////////////////////////
// GETTING CURRENT TODO LIST //
///////////////////////////////
var display = document.getElementById("displayIt")
var inputText = document.getElementById("userText")
var getList = document.getElementById("getBtn")

//Need a function to grab the user text, then upon button click, will display objects from todo
getList.addEventListener("click", function(event){
    event.preventDefault()
    // User input will be put into api url
    axios.get(`https://api.vschool.io/${inputText.value}/todo/`).then(function(response){
        var todoList = response.data
        console.log(todoList)
        var text = ""
        // User Todo List will be displayed
        for(var i = 0; i < todoList.length; i++){
            console.log(`${todoList[i]._id}\nTitle: ${todoList[i].title}\nDescription: ${todoList[i].description}\nPrice: ${todoList[i].price}\n URL Image: ${todoList[i].url}`)
            text += `ID Number: ${todoList[i]._id}<br>Title: ${todoList[i].title}<br>Description: ${todoList[i].description}<br>Price: ${todoList[i].price}<br>URL Image:<br><img src='${todoList[i].imgUrl}'/><br><br>`
            display.innerHTML = text

        }
    })
})
// Test function below to get an image url to display on the page from axios read request:
// getList.addEventListener("click", function(event){
//     event.preventDefault()
//     // User input will be put into api url
//     axios.get(`https://api.vschool.io/${inputText.value}/todo/`).then(function(response){
//         var todoList = response.data
//         var text = ""
//         todoList.forEach(function(element){
//             var x = document.createElement("img")
//             x.setAttribute("src", element.imgUrl)
//             document.body.appendChild(x)
//         })    
//     })
// })


////////////////////////
// POSTING A NEW TODO //
////////////////////////
var addTodo = document.getElementById("userAdd")
var secondDisp = document.getElementById("addedTodo")
var button = document.getElementById("myBtn")
var inputTitle  = document.getElementById("title")
var inputPrice  = document.getElementById("price")
var inputDescr  = document.getElementById("description")

// User should be able to add stuff to todo as well
button.addEventListener("click", function(event){
    event.preventDefault()
    // Title is always required
    // User needs to be able to give a price to a todo item
    // User should be able to give a description
    var newTodo = {
        title: inputTitle.value,
        price: inputPrice.value,
        description: inputDescr.value,
        imgUrl: url.value
    }
    // Inputed text for new todo will send to api
    axios.post(`https://api.vschool.io/${addTodo.value}/todo/`, newTodo).then(function(response){
        console.log(response.data)
        // User's new todo will display on page when it is submitted
        var text = `New ToDo added:<br>Title: ${inputTitle.value}<br>Description: ${inputDescr.value}<br>Price: ${inputPrice.value}<br> URL Image: ${url.value}<br>`
        secondDisp.innerHTML = text
    }).catch(function(error){
        console.log(error)
    })
})

//////////////////////////
// DELETING A TODO LIST //
//////////////////////////
var deleteBtn = document.getElementById("delete")
var idNum = document.getElementById("idNum")

// User can delete any list item by copying the id number into the text field and clicking the button
deleteBtn.addEventListener("click", function(event){
    event.preventDefault()
    axios.delete(`https://api.vschool.io/${inputText.value}/todo/${idNum.value}`).then(function(response){
        // Alert will display when deletion is successful
        alert(`ToDo list number ${idNum.value} was successfully deleted`)
    })
})
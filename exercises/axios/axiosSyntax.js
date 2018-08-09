// Axios - JavaScript Library (node_module) that helps us make AJAX calls to APIs //

    // 1. An event (page load) 
    // 2. XMLHttpRequest object is created 
    // 3. The request object send the request to the server.  xhr.save()
    // 4. The server processes the request
    // 5. The server sends a response back to the web page
    // 6. The response is then read by javascript

// var axios = require('axios')

// Read - 
axios.get('https://swapi.co/api/people').then(function(response){
    console.log(response)
}).catch(function(err){
    console.log(err)
})


// Create - Posting new data (think signing up for the first time)
axios.post("https://swapi.co/api/people", newData).then(function(res){
    console.log(res)
})

// Delete
axios.delete(`https://swapi.co/api/people/${id}`).then(function(res){

})


// Put - updates existing item in database
axios.put(`https://swapi.co/api/people/${id}`, updatedData).then(function(res){

})
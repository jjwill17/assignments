// Catch Me If You Can //
// try, catch, throw, and finally //

// 1a
// function sum(x, y){
//     return x + y
// }

// 1b
// try {
//     function sum(x, y){
//         if(typeof x === "number" && typeof y === "number"){
//         return x + y
//         } else {
//             throw "Need to enter two numbers"
//         }
//     }
//         console.log(sum("1", 2))
// } catch(error){
//     console.log(error);
// } finally {
//     console.log("I'm gonna do what I want every time")
// }

// 2b
var user = {username: "sam", password: "123abc"};  
try {
    function login(username, password){  
        if(username === "sam" && password === "123abc"){
            return "login successful!"
        } else {
            throw "username and/or password incorrect"
        }
      }
      console.log(login("sam", "123abc"))
} catch(error){
    console.log(error)
}

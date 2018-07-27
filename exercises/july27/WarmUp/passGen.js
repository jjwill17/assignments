function generatePass(int){
    var pass = ""
    var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
    for(var i = 0; i < int; i++){
      pass += char.charAt(Math.floor(Math.random() * char.length))
    }
    return pass
  }
  // User needs to put in a number within the parentheses
  generatePass(8)
  
  
  // Simplest random password generator I found
  Math.random().toString(36).slice(2)
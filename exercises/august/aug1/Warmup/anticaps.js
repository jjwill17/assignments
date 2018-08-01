
// In a string, return lowercase letter to uppercase and vice versa
function antiCaps(str){
    var newStr = ""
    for(var i = 0; i < str.length; i++){
      var letter = str[i]
      if(letter === letter.toUpperCase()){
        newStr += letter.toLowerCase()
      } else {
        newStr += letter.toUpperCase()
      } 
    } return newStr 
  }
  
  antiCaps("Hello")
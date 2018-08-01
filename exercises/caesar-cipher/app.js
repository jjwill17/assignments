var ask = require("readline-sync")

// understand the question
    // break it down
//pseudo-code
    // pick one part from the break down
// follow-through (code)
    // we go back to step one
// look back (other possible solutions)

var phrase = ask.question("Enter a phrase you would like me to encrypt: ")
var shift = parseInt(ask.question("How many letters should the phrase shift: "))

function caesarCipher (str, shift){
    // declare empty string to build
    var encrypted = ""
    // declare a variable that holds the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz"

    // loop/iterate through the string
    for(var i = 0; i < str.length; i++){
        // check letter exists in the alphabet
        if(alphabet.indexOf(str[i]) !== -1){
            var currentIndex = alphabet.indexOf(str[i])
            // shift it the appropriate amount to the right
            encrypted += alphabet[(currentIndex + shift) % 26]
        } else {
            encrypted += str[i]
        }
    } return encrypted
}
console.log(caesarCipher(phrase, shift))
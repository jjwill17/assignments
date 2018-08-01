var ask = require("readline-sync")
console.log("Hello, my name is Terminal. Help me to get to know you!\n")

var name = ask.question("What is your name: ");
var age = ask.question("What is your age: ");
var favColor = ask.question("What is your favorite color: ");
var answerColor = " years old and your favorite color is "
var combine2 = age.concat(answerColor, favColor);
console.log("Cool, so your name is " + name.toUpperCase() + ". You are " + combine2 + ". Now let me ask you another question.\n")

var littleInfo = ask.question("Tell me some thing about yourself: ");
var infoRet = "So the info you gave me is " + littleInfo.length + " characters long.\nThis was the last half:\n" + infoLong(littleInfo) + "\n";
function infoLong(str){
    if (littleInfo.length > 20) {
        var retHalf = littleInfo.slice(littleInfo.length/2, littleInfo.length)
        return retHalf
    } else {
        return littleInfo
    }
}
console.log(infoRet)

var askNum = ask.question("Would you like me to start from somewhere else in your info?\n Choose a number in the range [0-" + littleInfo.length +"]:")
function retInd(askNum){
    var newLittleInfo = littleInfo.slice(askNum, littleInfo.length)
    console.log("Here ya go:\n" + newLittleInfo)
}

retInd(askNum)




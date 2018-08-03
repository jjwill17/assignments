var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = ''

while (option != 2){
  option = ask.keyInSelect(options, "What would you like to do today?: ");
  if (option === 0){
    console.log("You pick some flowers. You make a bouquet.");
  } else if (option === 1){
    console.log("You shoot guns.");
  } else if (option === 2){
    console.log("You fought a bear and got beat up!");
  } else if (option === -1){
    console.log("Please choose one of the options:");
  }
}


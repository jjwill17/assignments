var readlineSync = require("readline-sync")  // This is how we get the readline-sync node module in our JS.
var name = readlineSync.question("What is your name: ")
console.log("Your name is: " + name)

// To get the package.json:
// Terminal into the folder you want to create it in,
// then put in npm init -y
// then we need to install the "readline-sync" node module,
// this is done with terminal: npm install --save readline-sync
// or can be inputed as npm i -S package-name
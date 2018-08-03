// List of actions to create in console RPG game:
// character creation
// walking
// running from a fight
// fighting
// enemy creation
// attacking enemy
// enemy attacking player
// enemy dying (including dropping an item)
// character dying

var ask = require("readline-sync")
// Start off with greeting and asking player their name
var namePlayer = ask.question("Welcome chosen person. What ye be called? ")

var options = ["walk", "run", "go to the bathroom"]
var option = ""

var player = { 
    name: "me",
    health: 100
}

var inventory = {
    item1: "stuf",
    item2: ""
}

function walk(){
    // ask user to push "w" for walk. keycode for "w" is 119. "W" is 87.
    if(option === 0){
        var randomNum = Math.floor((Math.random() * 3) + 1)
        // if random number is 3
        if(randomNum === 3){
            //fight function goes here
            console.log("FIGHT!!!")
        // if random number is not 3
        } else {
            console.log("Hey, lucky you. You didn't run into a monster!")
        }  
    } else {
        console.log(`You have this stuff in your inventory: ${inventory}, your health is ${player.health}. Please push "w" to walk forward.`)
    }
}

function run(){
    var randomNum = Math.floor((Math.random() * 2) + 1)
    if(randomNum === 2){
        console.log("Hey... you got away. Good for you. Now continue walking.")
    } else {
        console.log("Oops, can't run right now.")
    }
}

function fight(){

}

function attackEnemy(){

}

function enemyAttack(){

}

function die(){

}

function enemyDie(){

}

function enemyCreation(){

}

while(player.health > 0){
    option = ask.keyInSelect(options, "What would you like to do?: ")
    if(option === 0){
        walk()
    } else if (option === 1){
        run()
    } else if (option === 2){
        console.log("You pooped your pants.")
    }
}
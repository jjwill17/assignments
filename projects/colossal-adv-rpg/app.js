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

var options = ["walk", "run", "go to the bathroom", "inventory"]
var fightOpt = ["fight", "run"]

var option = ""
var fightOption = ""

var player = { 
    name: namePlayer,
    health: 100
}

var enemy = [
    {
        name: "Monster",
        health: 100
    },
    {
        name: "Gus",
        health: 100
    },
    {
        name: "Fring",
        health: 100
    }
]

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
            fight()
        // if random number is not 3
        } else {
            console.log("Hey, lucky you. You didn't run into a monster!")
        }
    } else if (option === 3) {     // This part of the function isn't running correctly
        console.log(`${player.name} you have this stuff in your inventory: ${inventory}, your health is ${player.health}. Please push "w" to walk forward.`)
    }
}

function run(){
    var randomNum = Math.floor((Math.random() * 2) + 1)
    if(randomNum === 2){
        console.log("Hey... you got away. Good for you. Now continue walking.")
    } else {
        console.log("Oops, you stubbed you toe so I guess no running for you right now.")
    }
}

function fight(){
    fightOption = ask.keyInSelect(fightOpt, "Quick! Wanna fight or try and run?: ")
    enemyCreation()
    if(option === 1){
        run()
    } else {
        attackEnemy()
    }
    while (enemy.health > 0){
        enemyAttack()
        attackEnemy()
    }
}

function attackEnemy(){
    return enemy.health - 25
    // should create a variable inside of fight() that grabs monster health 
    // instead of manipulating the original. i.e. currBaddyHealth -= 25
}

function enemyAttack(){

}

function die(){

}

function enemyDie(){

}

function enemyCreation(){
    var randomNum = Math.floor((Math.random() * 3))
    var newEnemy
    if(randomNum === 0){
        var newEnemy = enemy[0]
    } else if (randomNum === 1){
        var newEnemy = enemy[1]
    } else {
        var newEnemy = enemy[2]
    }
    return newEnemy
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
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


///////////////
// Variables //
///////////////     ///////////////////////////////////////////////////////////////////////////////////////////

var ask = require("readline-sync")
// Start off with greeting and asking player their name
var namePlayer = ask.question("Welcome chosen person. You are about to embarque on a great adventure that will test your limits and patience(mostly your patience...) Now, what is your name?: ")

// var options = ["walk", "go to the bathroom", "inventory"]
var fightOpt = ["run", "fight"]
var attackOpt = ["Hit"]

var option = ""
var fightOption = ""
var attackOption = ""

var player = { 
    name: namePlayer,
    health: 100
}

var enemy = [
    {
        name: "Monster",
        health: 150
    },
    {
        name: "Beast",
        health: 120
    },
    {
        name: "Stan",
        health: 100
    }
]

var newEnemy = enemyCreation()

var inventory = {
    item: ""
}

//////////////////
// My Functions //
//////////////////  ////////////////////////////////////////////////////////////////////////////////////////////

function walk(){
    // ask user to push "w" for walk. keycode for "w" is 119. "W" is 87.
    if(option === "w"){
        var randomNum = Math.floor((Math.random() * 3) + 1)
        // if random number is 3
        if(randomNum === 3){
            //fight function goes here
            fight()
        // if random number is not 3
        } else {
            console.log("Hey, lucky you. You didn't run into a monster!\n")
        }
    }
}



function run(){
    var randomNum = Math.floor((Math.random() * 2) + 1)
    if(randomNum === 2){
        console.log("Hey... you got away. Good for you. Now continue walking.\n")
    } else {
        console.log("Oops, you stubbed you toe so I guess no running for you right now.\n")
        return false
    }
}



function fight(){
    fightOption = ask.keyInSelect(fightOpt, "Uh oh, an enemy approached! Wanna fight or try to run?: ")
    var running = run()
    if(fightOption === 0){
        if(running === false){
            console.log("Get ready to fight!")
            fight()
        }
    } else if(fightOption === 1){
        console.log("Get ready to fight!")
        while (newEnemy.health > 0 && player.health > 0){     
            attackEnemy()
            enemyAttack()
        }
        enemyDie()
    }
}




function attackEnemy(){
    // Ask user to press button for random attack
    var attackPower
    attackOption = ask.keyInSelect(attackOpt, "Quick, press 1 to do random attack! \n")
    if (attackOption === 0){
        var randomNum = Math.floor((Math.random() * 2) + 1)
        if(randomNum === 2){
            attackPower = 30
            console.log(`${newEnemy.name} has ${newEnemy.health}HP. You just slapped it across the face and took off 40HP!`)
        } else if (randomNum === 1){
            attackPower = 20
            console.log(`${newEnemy.name} has ${newEnemy.health}HP. You just punched it in the head and took off 25HP!`)
        } else {
            attackPower = 10
            console.log(`${newEnemy.name} has ${newEnemy.health}HP. You just did a flying kick and took off 10HP!`)
        }
    } else if(attackOption === -1){
        console.log("Sorry, can't leave now. And you also just wasted an opportunity to attack, stupid.\n")
        return false
    }
    // Then assign that value to the enemyHealth.health
    return newEnemy.health -= attackPower
}



function enemyAttack(){
    var randomNum = Math.floor((Math.random() * 3))
    if(randomNum === 3){
        player.health -= 45
        console.log(`Wow, he just threw a walrus at you and took away 45HP. You have ${player.health}HP remaining.`)
    } else if (randomNum === 2){
        player.health -= 15
        console.log(`He just kicked you in the shins and dealt 15HP of damage. You have ${player.health}HP remaining.`)
    } else {
        player.health -= 10
        console.log(`Fiddlesticks! He just smacked you upside the head and took away 10HP. You have ${player.health}HP remaining.`)
    }
}



function die(){
    if(player.health <= 0){
    console.log("Oh crap, you died in a ball of flames")
    }
}



function enemyDie(){
    console.log(`You defeated ${newEnemy.name}! You also get some health back and an item!`)
    inventory["item"] = "sword"
    return player.health += 15
    // Need to also have enemy drop item that will be added into inventory
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

//////////////////////////
// Main Game While Loop //
//////////////////////////      ////////////////////////////////////////////////////////////////////////////////
// Original while loop:
// while(player.health > 0){
//     option = ask.keyInSelect(options, "What would you like to do?: ")
//     if(option === 0){
//         walk()
//     } else if (option === 1){
//         console.log("You pooped your pants.")
//     } else if (option === 2){
//         console.log(`${player.name} you have this stuff in your inventory: ${inventory.item}, your health is ${player.health}. Please push "w" to walk forward.`)
//     }
// }
// die()

while(player.health > 0){
    option = ask.question("Push 'w' and then 'enter' to walk:\n Type 'print' then press 'enter' to see inventory: ")
    if(option === "w"){
        walk()
    } else if (option === "p"){
        console.log("You pooped your pants.")
    } else if (option === "print"){
        console.log(`${player.name} you have this stuff in your inventory: ${inventory.item}, your health is ${player.health}.\n`)
    }
}
die()
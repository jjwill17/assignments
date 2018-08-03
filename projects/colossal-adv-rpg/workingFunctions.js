// Sample walking function that does work:
var option = 0

function walk(option){
  if(option === 0){
    var randomNum = Math.floor((Math.random() * 3) + 1)
    if(randomNum === 3){
        console.log("Fight!")
      } else {
        console.log("Hey, lucky you. You didn't run into a monster")
        }  
    }
}

walk(option)



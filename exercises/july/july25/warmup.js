var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

/*
function printArr(arr){
  return arr.join(", ")
}

printArr(lyrics)    //This will print out the lyrics

var rev = lyrics.reverse();

function revArr(arr){
  return arr.join(", ")
}

revArr(rev)        //This will reverse the lyrics
*/

function everyOther(arr){       //This will reverse and show every other word
  for(var i = 0; i < arr.length; i+=2){
    console.log(arr[i]);
  }
}

everyOther(lyrics)

function printEveryOther(arr){      
    var newArr = []
    for(var i = 0; i < arr.length; i+=2){
        newArr.push(arr[i + 1])
        newArr.push(arr[i])
    }
    return newArr.join(" ")
}

console.log(printEveryOther(lyrics))
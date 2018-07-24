var str = "abcdef"
var arr = [a, b, c, d,]
var uppercaseArr = []

for (var i = 0; i < arr.length; i++) {
   var upperLetter = arr[i].toUpperCase()
   uppercaseArr.push(upperLetter)
}
console.log(uppercaseArr)

//Pushing into an array
var uppercaseArr = []

console.log(uppercaseArr)
uppercaseArr.push(1)
uppercaseArr.push(2, 3, 4)
console.log(uppercaseArr)


//Constructor Functions
function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.sound = "Vrooom"
    this.play = function(){
        return this.sound
    }
}

var truck = new Car("Chevy", "Silverado", "1990", "blue")
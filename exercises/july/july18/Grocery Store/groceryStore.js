var shopper = {
    placeToBuy: "Smiths ",
    numberOfFruits: 58,
    isOrange: false,
    groceryCart: ["apple", "orange", "banana"],

    theMethod: function() {
        return (this.placeToBuy + this.numberOfFruits);
    }
}

console.log(shopper.theMethod());
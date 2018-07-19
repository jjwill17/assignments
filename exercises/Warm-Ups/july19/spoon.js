//These are working examples of objects that I have created

var shopper = {
    placeToBuy: "Smiths ",
    numberOfFruits: 58,
    isOrange: false,
    groceryCart: ["apple", "orange", "banana"],

    theMethod: function() {
        return ("I'm planning to go to " + this.placeToBuy + "to get " + this.numberOfFruits + this.groceryCart[0])
    }
}
shopper.theMethod() 

var post = {
    color: "white",
    sizeInFeet: 13,
    isMetal: false,
    write: function() {
        return "This is a " + this.color
    }
}
post.write()

var computer = {
    price: "A lot",
    isWindows: false,
    screenSize: 13.3,
    write: function() {
        return "Is it a Windows?" + this.isWindows
    }

}
computer.write()

var hat = {
    color: "Gray",
    cost: 10,
    doILikeIt: true,
    write: function() {
        return "Do I like my hat?" + hat.doILikeIt
    }
}
hat.write()

var wallet = {
    color: "Dark blue",
    hasMoney: false,
    howOld: 2,
    write: function() {
        return "My wallet color is" + wallet.color
    }
}
wallet.write()

var me = {
    name: "Morty",
    ssn: "000-00-0000",
    isLying: false,
    height: "6 foot",
    dance: function() {
      return "oooo" + me.name + "dances!"
    }
  }
me.dance()


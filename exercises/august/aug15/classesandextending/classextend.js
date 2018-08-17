// Example of creating classes and extending them into other classes

class Pizza {
    constructor(crust, toppings, hasCheese){
        this.crust = crust
        this.toppings = toppings
        this.hasCheese = hasCheese
    }
    hasGluten(){
        console.log("Yes I have gluten")
    }
}
  
class Deepdish extends Pizza {
    constructor(crust, toppings, hasCheese, size){
    super(crust, toppings, hasCheese)
    this.size = size
    }
}
  
const pizzaHut = new Deepdish ("stuffed", "pepperoni", true, "big")
  
console.log(pizzaHut)
pizzaHut.hasGluten()
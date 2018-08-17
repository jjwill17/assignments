
class Player {
    constructor(name, totalCoins, status, hasStar, gameActive){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
      if(this.status === "Powered Up"){
            return this.status = "Big"
        } else if(this.status === "Big"){
            return this.status = "Small"
        } else if(this.status === "Small"){
            return this.status = "Dead"
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            return this.status = "Big"
        } else if(this.status === "Big"){
            return this.status = "Powered Up"
        }
    }
    gameActive(){
        if(this.status !== "Dead"){
            return true
        } else {
            return false
        }
    }
    addCoin(){
        totalCoins++
    }
    print(){
        console.log(`Name: ${name}\nStatus: ${status}\nTotal Coins: ${totalCoins}`)
    }
  }
  
const randomNums = () => Math.floor(Math.random() * 3)
  
function whatHappens(){
    if(randomNums() === 0){
        return gotHit()
    } else if(randomNums() === 1){
        return gotPowerup()
    } else {
        return addCoin()
    }
}
  
const setInterval = () => {
    
}
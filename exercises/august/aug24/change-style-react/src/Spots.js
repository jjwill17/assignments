import React from "react";
import Spot from "./Spot";

const vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
]

const getColors = (season) => {
  if (season === "Summer"){
    return "yellow"
  } 
}  

const Spots = () => {
    const styles = {
      display: "flex"
    }
    const spots = vacationSpots.map((spot, i) => {
        
        const backgroundColor = getColors(spot.timeToGo)
        
        return <Spot place={spot.place}
                     price={spot.price}
                     timeToGo={spot.timeToGo}
                     key={i + spot.place}
                     backgroundColor={backgroundColor}/>   
    })
    return <div style={styles}>{spots}</div>
}

export default Spots;

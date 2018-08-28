import React, {Component} from 'react'
import VacationCard from './VacationCard'

class App extends Component {
    vacationSpots = [
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

    mainDivStyle = {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto'
    }

    displaySpots = this.vacationSpots.map(function(spot){
        return <VacationCard place={spot.place} 
                             price={spot.price} 
                             timeToGo={spot.timeToGo} />

        }
    )

    
    render(){
        return (
            <div style={this.mainDivStyle}>{this.displaySpots}</div>
        )
    }
}

export default App
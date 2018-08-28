import React, {Component} from "react"

class Spot extends Component {
    constructor(){
        super()
        this.state = {
            isSelected: false
        }
        
    }
  
    render(){
        const styles = {
            border: "1px solid black",
            boxSizing: "border-box",
            width: "33%",
            padding: "20px",
            backgroundColor: this.props.backgroundColor,
        }

        if (this.state.isSelected === true){
            styles.border = "5px solid blue"
        }

        return (
            <div style={styles}>
                <h1>{this.props.place}</h1>
                <h2>{this.props.price}</h2>
                <h3>{this.props.timeToGo}</h3>
            </div>
        )
    }
    
}

export default Spot
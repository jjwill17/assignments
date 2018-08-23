import React, {Component} from 'react'

class Superhero extends Component {
    constructor(props){
        super(props)
        this.props = props
    }
   clickListen = () => {
        console.log(this.props.superheros)
        alert(this.props.catchphrase)
    }
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} onClick={this.clickListen}/>
                <p></p>
            </div>
        )
    }
}

export default Superhero
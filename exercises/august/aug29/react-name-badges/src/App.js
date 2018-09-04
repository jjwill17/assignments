import React from 'react'
import InfoBox from './InfoBox'
import DisplayBadge from './DisplayBadge'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            data: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phone: this.state.phone,
            favFood: this.state.favFood,
        }
        this.setState(prevState => ({
            data: [...prevState.data, newBadge],
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: ''
        }))
    }
    
    render(){

        const divStyle = {
            margin: '10px',
            border: '3px solid black',
            borderRadius: '10px'
        }
        
        const buttonStyle = {
            marginLeft: '46%',
            marginRight: 'auto',
            marginBottom: '5px'
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div style={divStyle}>
                <InfoBox 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    birthPlace={this.state.birthPlace}
                    phone={this.state.phone}
                    favFood={this.state.favFood}
                    handleChange={this.handleChange}
                />    
                <button style={buttonStyle}>Submit</button>
                </div>
                <div>{this.state.data.map(each => <DisplayBadge {...each} />)}</div>
            </form>
        )
    }
    
}

export default App



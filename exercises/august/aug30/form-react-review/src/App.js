import React, { Component } from 'react'
import Form from './Form'
import InfoCard from './InfoCard' 

class App extends Component {
    constructor(){
        super()
        this.state = {
            ssn: '',
            mothersMaidenName: '',
            firstPet: '',
            data: []
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // Save new card entry from user
        const newCard = {
            ssn: this.state.ssn,
            mothersMaidenName: this.state.mothersMaidenName,
            firstPet: this.state.firstPet,
        }
        // Save card into data array, and clear inputs for user
        this.setState(prevState => ({
            data: [...prevState.data, newCard],
            ssn: '',
            mothersMaidenName: '',
            firstPet: ''
        }))
    }

    render(){
        return (
            <div className="app-container">
                <Form 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                    ssn={this.state.ssn}
                    mothersMaidenName={this.state.mothersMaidenName}
                    firstPet={this.state.firstPet}/>
                <div className="list-container">
                    { this.state.data.map(info => <InfoCard {...info}/>) }
                </div>
            </div>
        )
    }
}

export default App
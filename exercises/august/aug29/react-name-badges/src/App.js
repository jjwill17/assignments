import React from 'react'
// import InfoBox from './InfoBox'
// import DisplayCard from './DisplayCard'

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

        const formStyle = {
            margin: '10px',
            border: '3px solid black',
            borderRadius: '10px'
        }

        const inputStyles = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '10px',
            marginLeft: '35%',
            marginRight: '20%',
            width: '25%',
            padding: '1%'
        }

        const buttonStyle = {
            marginLeft: '46%',
            marginRight: 'auto',
            marginBottom: '5px'
        }

        return (
            <form style={formStyle}>
                <div style={inputStyles}>
                    <input type='text' name='firstName' value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}></input>
                    <input type='text' name='lastName' value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}></input>
                    <input type='text' name='email' value={this.state.email} placeholder="email" onChange={this.handleChange}></input>
                    <input type='text' name='birthPlace' value={this.state.birthPlace} placeholder="Place of Birth" onChange={this.handleChange}></input>
                    <input type='number' name='phone' value={this.state.phone} placeholder="Phone Number" onChange={this.handleChange}></input>
                    <input type='text' name='favFood' value={this.state.favFood} placeholder="Favorite Food" onChange={this.handleChange}></input>
                </div>
                
                <button style={buttonStyle}>Submit</button>
            </form>
        )
    }
    
}

export default App



import React from 'react'
import axios from 'axios'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            bountyApi:[]
        }
    }

componentDidMount(){
    axios.get('/bounties').then(res =>
        // console.log(res)
        this.setState({
            bountyApi: res.data
        }))
        
}

    render(){
        return (
            <div>
                <h1>Bounties</h1>
                <div>{this.state.bountyApi.map(person => <h4>Name: {person.firstName} {person.lastName}</h4>)}</div>
            </div>
        )
    }
}

export default App

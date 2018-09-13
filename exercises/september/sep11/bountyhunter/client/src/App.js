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
            <div>{this.state.bountyApi.map(person => <h1>{person.firstName}</h1>)}</div>
        )
    }
}

export default App

import React from 'react'
import axios from 'axios'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            api: []
        }
    }
    constantinople = console

    componentDidMount(){
        axios.get('/craps').then(res =>
            this.setState({
                api: res.data
            }))
        }

    handleClick = e => {

    }

    render(){
        this.constantinople.log(this.state.api)
        return(
            <div>{this.state.api.map(item => <h1>{item.title}</h1>)}</div>
        )
    }
}

export default App
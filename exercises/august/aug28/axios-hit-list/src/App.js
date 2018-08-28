import React from 'react'
import axios from 'axios'
import People from './People'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            console.log(response)
            this.setState({
                list: response.data
            })
        })
    }

    render(){

        const displayHitList = this.state.list.map(person => {
            return (
                <People {...person} key={person.url}/>
            )
        })

        const gridStyle = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr"
        }

        const textStyle = {
            textAlign: "center",
            textDecoration: "line-through"
        }

        return (
            <div>
                <h1 style={textStyle}>The Hit List</h1>
                <div style={gridStyle}>{displayHitList}</div>
            </div>
        )
    }
}

export default App
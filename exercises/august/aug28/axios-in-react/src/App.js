import React from 'react'
import axios from 'axios'
import Person from './Person'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/').then(response => {
            console.log(response)
            this.setState({
                data: response.data.results
            })
        })
    }


    render(){

        const mappedStarWarsFolk = this.state.data.map(person => {
            return (
                <Person {...person} key={person.url}/>
            )
        })
        // name={person.name} gender={person.gender} hairColor={person.hair_color} would be written inside <Person />
        // if writing out all of the data specifically here instead of letting the Person.js component take care of it

        return (
            <div>
                {mappedStarWarsFolk}
            </div>
        )
    }

}

export default App
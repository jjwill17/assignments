import React, {Component} from 'react'
import Superhero from './Superhero'
import Superman from './superman.png'
import Batman from './batwink-loop.gif'

class App extends Component {
    superheros = [
        {
            name: "Superman",
            image: Superman,
            catchphrase: "Truth, justice, and the American way"
        },
        {
            name: "Batman",
            image: Batman,
            catchphrase: "I'm Batman"
        }
    ]

    

    displayHeros = this.superheros.map(hero => {
        return <Superhero name={hero.name} image={hero.image} catchphrase={hero.catchphrase}/>
    })

    render(){
        return (
            <form>
                <div>{this.displayHeros}</div>
            </form>
        )
    }
}

export default App
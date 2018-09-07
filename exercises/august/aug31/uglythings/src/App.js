import React from 'react'
import Form from './components/Form'
import Display from './components/Display'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            description: '',
            data: []
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const newThing = {
            title: this.state.title,
            img: this.state.img,
            description: this.state.description
        }

        this.setState(prevState => ({
            data: [...prevState.data, newThing],
            title: '',
            img: '',
            description: ''
        }))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div>
                <Form 
                    title={this.state.title} 
                    img={this.state.img} 
                    description={this.state.description} 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} />
                <div>{this.state.data.map(info => <Display {...info}/>)}</div>
            </div>
        )
    }
}

export default App


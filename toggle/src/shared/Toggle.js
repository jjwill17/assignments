import { Component } from 'react'

class Toggle extends Component {
    constructor(){
        super()
        this.state = {
            isToggled: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    render() {
        return this.props.render({
            toggle: this.toggle,
            isToggled: this.state.isToggled
        })
    }
}

export default Toggle
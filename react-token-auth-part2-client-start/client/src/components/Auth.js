import React, { Component } from 'react'
import AuthForm from './AuthForm'
import Form from '../shared/Form'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            formToggle: false
        }
    }

    handleSubmit = e => {
        // need to login or signup depending on the user's choice
    }

    toggle = () => {
        this.setState(prevState => ({
            formToggle: !prevState.formToggle
        }))
    }

    render(){
        return (
            <div className="auth-page">
                {this.state.formToggle ? <h3>Login</h3> : <h3>Sign Up</h3>}
                {!this.state.formToggle ? <span onClick={this.toggle}>-Already a Member?</span> : <span onClick={this.toggle}>-New Member?</span>}
                {!this.state.formToggle 
                    ? <Form 
                        inputs={{ username: '', password: '' }}
                        submit={inputs => this.props.signup(inputs)}
                        render={props => <AuthForm {...props} btnText="Sign Up"/>}
                        reset/>
                    : <Form 
                        inputs={{ username: '', password: '' }}
                        submit={inputs => this.props.login(inputs)}
                        render={props => <AuthForm {...props} btnText="Login"/>}
                        reset/>
                }   
            </div>
        )
    }
}

export default Auth
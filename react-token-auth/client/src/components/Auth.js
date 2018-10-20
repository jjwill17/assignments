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

    toggle = () => {
        this.setState(prevState => ({
            formToggle: !prevState.formToggle
        }))
    }

    render(){
        const { status, err } = this.props.authErr
        let errMsg = ''
        if(status < 500 && status >399){
            errMsg = err
        } else if (status > 499){
            errMsg = err
        }

        return (
            <div className="auth-page">
                {this.state.formToggle 
                    ? <div>
                        <span style={{ backgroundColor: 'cornflowerblue' }}>Login</span>
                        <span>Sign Up</span>
                      </div>
                    : <div>
                        <span>Login</span>
                        <span style={{ backgroundColor: 'cornflowerblue' }}>Sign Up</span>     
                      </div>
                }
                {!this.state.formToggle ? <span onClick={this.toggle}>-Already a Member?</span> : <span onClick={this.toggle}>-New Member?</span>}
                {!this.state.formToggle 
                    ? <Form 
                        inputs={{ username: '', password: '' }}
                        submit={inputs => this.props.signUp(inputs)}
                        render={props => <AuthForm {...props} btnText="Sign Up"/>}
                        reset/>
                    : <Form 
                        inputs={{ username: '', password: '' }}
                        submit={inputs => this.props.login(inputs)}
                        render={props => <AuthForm {...props} btnText="Sign Up"/>}
                        reset/>
                }
                <p>{errMsg}</p>   
            </div>
        )
    }
}

export default Auth
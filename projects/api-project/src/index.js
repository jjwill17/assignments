import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux'


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
document.getElementById('root'))

// remember to install necessary node modules and create-react-app:
// npm install --save redux react-redux react-router-dom axios redux-thunk
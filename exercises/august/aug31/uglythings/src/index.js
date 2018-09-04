import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux'
import { Providor } from 'react-redux'

ReactDOM.render(
    <Providor store={ store }>
        <App />
    </Providor>
, document.getElementById('root'))
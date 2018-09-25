import React from 'react'
import Main from './components/Main'
import About from './components/About'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ Main }/>
                <Route path="/about" component={ About }/>
            </Switch>
        </div>
    )
}

export default App
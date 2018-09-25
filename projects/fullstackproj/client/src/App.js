import React from 'react'
import Navbar from './Navbar'
import About from './components/About'
import Main from './components/Main'
import Decrypt from './components/Decrypt'
import Search from './components/Search'
import { Switch, Route } from 'react-router-dom'

const App = () => {

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={ Main } />
                <Route path='/about' component={ About } />
                <Route path='/decrypt' component={ Decrypt } />
                <Route path='/search' component={ Search } />
            </Switch>
        </div>
    )
}

export default App
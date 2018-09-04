import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Switch, Route, withRouter } from 'react-router-dom'


const App = props => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/about" component={ About }/>
                <Route path="/contact" component={ Contact }/>
            </Switch>
        </div>
    )
}

export default withRouter(App);
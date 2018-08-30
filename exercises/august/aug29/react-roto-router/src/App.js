import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/Services" component={ Services }/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App
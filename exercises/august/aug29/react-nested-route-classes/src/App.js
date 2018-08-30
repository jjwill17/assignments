import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'
import Footer from './Footer'


const App = props => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About }/>
                <Route path="/contact" component={ Contact }/>
                <Route path="/services" component={ Services }/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App
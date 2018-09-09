import React from 'react'
import Navbar from './Navbar'
import Home from './components/Home'
import Search from './components/Search'
import NowPlaying from './components/NowPlaying'
import { Switch, Route } from 'react-router-dom'
import './app.css'

const App = () => {

    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/search" component={ Search } />
                <Route path="/nowPlaying" component={ NowPlaying } />
            </Switch>
        </div>
    )
}

export default App
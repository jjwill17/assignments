import React from 'react'
import Form from './components/Form'
import Display from './components/SearchResults'
import Movies from './components/Movies'
import { connect } from 'react-redux'
import { getData } from './redux'
import './app.css'

class App extends React.Component {

    render(){
        return (
            <div className='app'>
                <Movies />
            </div>
        )
    }
}

export default connect(state=>state, { getData })(App)
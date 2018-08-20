// Components are functions that return some JSX( HTML/JS )
import React from 'react'
import { HelloWorld, Cool, Awesome, JellyDonuts } from './HelloWorld'
// import Cool from './Cool'
// import Awesome from './Awesome'
// import JellyDonuts from './JellyDonuts'

const App = () => {
    return (
        <div>
            <HelloWorld />
            <Cool />
            <Awesome />
            <JellyDonuts />
        </div>
    )
}

export default App
import React, { Component } from 'react'
import Toggle from './shared/Toggle'

const App = () => {

    return (
        <div>

            <Toggle render={({ toggle, isToggled }) => 
                <React.Fragment >
                    <div style={{ 
                            height: 300, 
                            width: 300, 
                            backgroundColor: isToggled ? 'yellow' : 'darkblue' }}>
                    </div>
                    <button onClick={ toggle }>Light Switch</button>
                </React.Fragment>
            } />
        </div>
    )
}

export default App
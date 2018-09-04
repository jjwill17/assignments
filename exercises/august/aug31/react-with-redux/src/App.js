import React from 'react'
import Controls from './components/Controls'
import Display from './components/Display'

const App = () => {
    const styles = {
        textAlign: 'center',
        paddingTop: '20%'
    }
    return (
        <div style={styles}>
            <Display />
            <Controls />
        </div>
    )
}

export default App
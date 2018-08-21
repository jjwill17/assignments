import React from 'react'
import { Box, Section } from './Box'


const App = () => {
    return (
        <div>
            <Box color="purple" title="Hello"/>
            <Box color="white" subtitle="This is my subtitle" />
            <Box fontWeight="1000" subtitle="Second subtitle" info="with some info here"/>
            <Box subtitle="Transform" info="I'm not a spaceman, but on the other hand..." />
            <Box fontWeight="100" color="yellow" info="When Worlds Colide" />
            <Box subtitle="Tonight the Stars Revolt" />
            <Box color="red" subtitle="Free" />
            <Box subtitle="A Is For Apathy" />
            <Box info="Bombshell" />
            <Box color="orange" subtitle="Stereotype" />
            <Section />
        </div>
    )
}

export default App
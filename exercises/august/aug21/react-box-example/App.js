import React from 'react'
import Box from './Box'


const App = () => {
  return (
    <div className="App">
      <Box color="red" greeting="hello" />
      <Box color="blue" greeting="hola" />
      <Box color="green" greeting="aloha" />
      <Box color="blue" greeting="namaste" />
      <Box color="red" greeting="hi y'all" />
    </div>
  );
}

export default App;

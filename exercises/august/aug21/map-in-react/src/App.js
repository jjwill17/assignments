import React from 'react';
import Navbar from './Navbar';
import Turtle from './Turtle';

const App = () => {
  const turtles = [
    {
        name: "Leonardo",
        nickName: "Leo",
        weapon: "Sword",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    },
    {
        name: "Donatello",
        nickName: "Don",
        weapon: "Bo staff",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    },
    {
        name: "Michelangelo",
        nickName: "Mikey",
        weapon: "Nunchucks",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    },
    {
        name: "Raphael",
        nickName: "Raph",
        weapon: "Sai",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg"
    }
]

  // const displayTurtles = turtles.map((turtle, i) => {
  //   return <div key={turtle.name + i}>
  //           <h1>{turtle.name}</h1>
  //           <h3>Nickname: {turtle.nickName}</h3>
  //           <h3>Weapon: {turtle.weapon}</h3>
  //           <img src={turtle.imgUrl} alt=""/>
  //          </div>
  // })

  const displayTurtles = turtles.map((turtle, i) => {
    return <Turtle key={turtle.name+i}
                   name={turtle.name} 
                   nickName={turtle.nickName} 
                   weapon={turtle.weapon} 
                   image={turtle.imgUrl} />
  })


  return (
    <div>
      <Navbar />
      {displayTurtles}
    </div>
  )
}

export default App;

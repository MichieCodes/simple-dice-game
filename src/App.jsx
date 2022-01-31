import React from 'react'
import {sleep} from './utils/sleep'

import DiceContainer from './components/DiceContainer'
import DiceHistory from './components/DiceHistory'

import './App.scss'

function App() {
  const [numberOfDice, setNumberOfDice] = React.useState(1)
  const [dice, setDice] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const randomizeDice = async (currentNumber, duration = 2000, delay = 100) => {
    const ticks = duration / delay; 

    for(let i = 0; i < ticks; i++) {
      let randomDice = Array.from(
        {length: currentNumber},
        _ => 1 + Math.floor(Math.random() * 6)
      )

      setDice(randomDice)
      await sleep(delay)
    } 
  }

  const rollDice = async () => {
    console.log("ROLLING: ", numberOfDice)

    setLoading(true)

    await randomizeDice(numberOfDice)

    setLoading(false)
  }

  return (
    <div className="App">
      <h1>Number of Dice</h1>
      
      <div>
        <input
          type="number"
          min="1"
          value={numberOfDice}
          onChange={(e) => setNumberOfDice(+e.target.value)}/>

        <button onClick={rollDice}>
          Roll
        </button>
      </div>

      <DiceContainer dice={dice}/>
      <DiceHistory lastDice={!loading && dice}/>
    </div>
  )
}

export default App

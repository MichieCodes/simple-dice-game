import React from 'react'
import {sleep} from './utils/delay'

import Die from './components/Die'

import './App.scss'

function App() {
  const [numberOfDice, setNumberOfDice] = React.useState(1)
  const [dice, setDice] = React.useState([])
  const [history, setHistory] = React.useState([])

  const rollDice = async () => {
    console.log("ROLLING: ", numberOfDice)
    let currentNumber = numberOfDice
    let randomDice = []

    for(let i = 0; i < 20; i++) {
      randomDice = Array.from(
        {length: currentNumber},
        _ => 1 + Math.floor(Math.random() * 6)
      )

      setDice(randomDice)
      await sleep(100)
    }

    setHistory((prevHistory) => [
      ...randomDice,
      ...prevHistory
    ].slice(0, 15))
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

      <section className="dice-container">
        {dice.map((face, i) => 
          <Die key={i} face={face}/>
        )}
      </section>

      <section>
        <h2>Previous Rolls</h2>

        <section className="dice-history">
          {history.map((face, i) => 
            <Die key={i} face={face}/>
          )} 
        </section>
      </section>
    </div>
  )
}

export default App

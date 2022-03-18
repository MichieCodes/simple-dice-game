import React from 'react'

import {sleep} from '/src/utils/sleep'

function DiceRollForm({setDice, setLoading}) {
  const [numberOfDice, setNumberOfDice] = React.useState(1)

  const randomizeDice = async (
    currentNumber,
    duration = 2000,
    delay = 100
  ) => {
    const ticks = duration / delay; 

    for(let i = 0; i < ticks; i++) {
      const randomDice = Array.from(
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
    <div>
      <h1>Number of Dice</h1>

      <input
        type="number"
        min="1"
        value={numberOfDice}
        onChange={(e) => setNumberOfDice(+e.target.value)}/>

      <button onClick={rollDice}>
        Roll
      </button>
    </div> 
  )
}

export default DiceRollForm

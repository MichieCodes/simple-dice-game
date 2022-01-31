import React from 'react'

import DiceContainer from './components/DiceContainer'
import DiceHistory from './components/DiceHistory'
import DiceRollForm from './components/DiceRollForm'

import './App.scss'

function App() {
  const [dice, setDice] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  return (
    <div className="App">
      <DiceRollForm setDice={setDice} setLoading={setLoading}/> 
      <DiceContainer dice={dice}/>
      <DiceHistory lastDice={!loading && dice}/>
    </div>
  )
}

export default App

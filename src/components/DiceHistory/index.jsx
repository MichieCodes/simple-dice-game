import React from 'react'

import Die from '../Die'

import './DiceHistory.scss'

function DiceHistory({lastDice}) {
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    if(!lastDice) return

    setHistory((prevHistory) => [
      ...lastDice,
      ...prevHistory
    ].slice(0, 15))
  }, [lastDice])

  return (
    <section>
      <h2>Previous Rolls</h2>

      <section className="dice-history">
        {history.map((face, i) => 
          <Die key={i} face={face}/>
        )} 
      </section>
    </section>
  )
}

export default React.memo(DiceHistory)

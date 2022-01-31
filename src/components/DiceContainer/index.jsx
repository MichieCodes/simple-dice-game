import Die from '../Die'

import './DiceContainer.scss'

function DiceContainer({dice}) {
  return (
    <section className="dice-container">
      {dice.map((face, i) => 
        <Die key={i} face={face}/>
      )}
    </section> 
  )
}

export default DiceContainer

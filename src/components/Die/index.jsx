import './Die.scss'

const FACES = ['face-one', 'face-two', 'face-three', 'face-four', 'face-five', 'face-six']

function Die({face}) {
    const diceClass = `die ${FACES[face - 1]}`

    return (
        <div className={diceClass}>
            {Array.from({length: face}, _ => 
                <span></span>
            )}
        </div>
    )
}

export default Die

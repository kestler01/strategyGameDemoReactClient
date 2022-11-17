import React, { useState} from 'react'
import demo from './demo' // temp place holder

import GameViewLayout from './GameViewLayout'

const GameParent = (props) => {
	const [game, setGame] = useState(null)

	const handleStart = () => {
		console.log( 'inHandle Start, before setGame, what is demo', demo)
		setGame(demo) // to be replaced with data from api call 
	}

	return (
		<>
			<p className='center'>{props.user.username}</p>
            <section className='gameParent row'>
				{game? <GameViewLayout game={game} setGame={setGame}/> : <button onClick={handleStart}>start</button>}
			</section>
		</>
	)
}

export default GameParent

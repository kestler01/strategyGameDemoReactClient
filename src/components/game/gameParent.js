import React, { useEffect, useState} from 'react'
import demo from './demo'
const GameParent = (props) => {
	const [game, setGame] = useState(null)
	const [gameBoardJSX, setGameBoardJSX] =useState(null)
	console.log( 'at top of component, game:' ,game)

	const handleStart = () => {

		setGame(demo)
	}
	useEffect(() => {
		console.log('useEffect triggered')
		if(game){
			setGameBoardJSX(
				game.map.map((mapY) => (
					<div className='col'>
						<div class={`row row-col-${game.data.sizeX}`}>
							{mapY.map((cell) => (
								<div className='cell col' key={`${cell.x}${cell.y}`}>
									{cell.x},{cell.y}
								</div>
							))}
						</div>
					</div>
				))
			)}
	},[game])
	

	let gameViewLayout = null
	if(game){
		gameViewLayout = (
			<>
				<div className='col-3 gameDetails'>
					<p>details column</p>
					<p>game.title : {game.title}</p>
				</div>
				<div className='col-9 gameBoard'>
					{gameBoardJSX}
				</div>
			</>
		)
	}
	

	return (
		<>
			<p className='center'>{props.user.username}</p>
            <section className='gameParent row'>
				{game? gameViewLayout : <button onClick={handleStart}>start</button>}
			</section>
		</>
	)
}

export default GameParent

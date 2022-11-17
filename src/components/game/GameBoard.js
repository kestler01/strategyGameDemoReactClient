import React, { useEffect, useState} from 'react'
import uuid from 'react-uuid'
const GameBoard = (props) => {
    const [game, setGame] = useState(props.game)
    const [gameBoardJSX, setGameBoardJSX] = useState(null)

    useEffect(() => {
			if (game) {
				setGameBoardJSX(
					game.map.map((mapY) => (
						// <div className='col-12'>
							<div className={`row row-col-${game.data.sizeX}`} key={uuid()}>
								{mapY.map((cell) => (
									<div className='cell col' key={`${cell.x}${cell.y}`}>
										{cell.x},{cell.y}
									</div>
								))}
							</div>
						// </div>
					))
				)
			}
		}, [])

    return (
			<>
				{gameBoardJSX || <p>loading</p> }
			</>
		)
}

export default GameBoard
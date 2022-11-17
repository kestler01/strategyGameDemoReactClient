// import React, { useEffect, useState} from 'react'

import GameBoard from './GameBoard'
import GameSideBoard from './GameSideBoard'

const GameViewLayout = (props) => {
    const {game, setGame } = props
    return(
        <>
            <div className='col-3 gameDetails'>
                <GameSideBoard game={game} setGame={setGame}/>
            </div>
            <div className='col-9 gameBoard'>
                <GameBoard game={game} setGame={setGame}/>
            </div>
        </>
    )
}

export default GameViewLayout
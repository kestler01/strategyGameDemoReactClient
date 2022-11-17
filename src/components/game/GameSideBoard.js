import React, { useEffect, useState} from 'react'

// import 

const GameSideBoard = (props) => {
    const [game, setGame] = useState(props.game)
    const [gameDetailsJSX, setGameDetailsJSX] = useState(null)

    useEffect(()=>{
        console.log('in gameSideBoard use effect',game)
            setGameDetailsJSX(Object.keys(game.data).map((key) => {return <li> {key}:{game.data[key]}</li>}))
    },[])

    return(
        <>
            <div className='col-3 gameDetails center'>
                <h3 className='center'> details column</h3>
                <p className='center'> game.title : {game && game.title}</p>
                <ul className='center'>
                    {gameDetailsJSX || <p>loading</p>}
                </ul>
            </div>
		</>
    )
}

export default GameSideBoard
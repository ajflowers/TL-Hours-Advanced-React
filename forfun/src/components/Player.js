import React from 'react'

const Player = props => {
    let {player} = props;

    return(
        <div data-id={player.id} className="Player">
            <h2>{`Player: ${player.name}`}</h2>
            <p>{`Player: ${player.country}`}</p>

        </div>
    )

}

export default Player
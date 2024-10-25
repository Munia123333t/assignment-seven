import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";


const Players = () => {

const [players , setPlayers] = useState([])
useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
},[])

    return (
        <div>
            <h2>players : {players.length}</h2>
            {
                players.map(player => <Player
                key={player.playerId}
                player ={player}
                ></Player>)
            }
           
        </div>
    );
};

export default Players;
import Board from "./Board"
import { useState } from "react"

const PLAYER_X = "X";
const PLAYER_O="O"

const TicTac = () => {
const [tiles,setTiles] = useState<string[]>([])
const [playerTurn, setPlayerTurn] =useState<string>(PLAYER_X)

const handleTileClick =(index:number)=>{
  if (tiles[index]==='X' || tiles[index]==='O') {
    return;
  }
  const newTiles =[...tiles]
  newTiles[index] = playerTurn 
  setTiles(newTiles);
  if (playerTurn===PLAYER_X) {
    setPlayerTurn(PLAYER_O)
  }
  else{
    setPlayerTurn(PLAYER_X)
  }
  console.log(index)
}

  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <Board playerturn={playerTurn} tiles={tiles} onTileClick={handleTileClick}></Board>
    </div>
  )
}

export default TicTac
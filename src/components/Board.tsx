import Tile from "./Tile"
import Strike from "./Strike"

type Boardprops = {
    tiles:string[],
    onTileClick:(index:number)=>void,
    playerturn:string,
}

const Board = ({tiles,onTileClick, playerturn}:Boardprops) => {
  return (
    <div  className="board">
        <Tile turn={playerturn} onclick={()=>{onTileClick(0)}} value={tiles[0]} classname="right-border bottom-border" />
        <Tile turn={playerturn} onclick={()=>{onTileClick(1)}} value={tiles[1]} classname="bottom-border right-border" />
        <Tile turn={playerturn} onclick={()=>{onTileClick(2)}} value={tiles[2]} classname=" bottom-border"/>
        <Tile turn={playerturn} onclick={()=>{onTileClick(3)}} value={tiles[3]} classname="right-border bottom-border"/>
        <Tile turn={playerturn} onclick={()=>{onTileClick(4)}} value={tiles[4]} classname="right-border bottom-border"/>
        <Tile turn={playerturn} onclick={()=>{onTileClick(5)}} value={tiles[5]} classname=" bottom-border"/>
        <Tile turn={playerturn} onclick={()=>{onTileClick(6)}} value={tiles[6]} classname="right-border"/>
        <Tile turn={playerturn} onclick={()=>{onTileClick(7)}} value={tiles[7]} classname="right-border"/>
        <Tile turn={playerturn} onclick={()=>{onTileClick(8)}} value={tiles[8]}/>
        <Strike/>
    </div>
  )
}

export default Board
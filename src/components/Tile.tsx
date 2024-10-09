
type TileProps={
    classname?:string
    value:string
    onclick:()=>void,
    turn:string,
}

const Tile = ({classname,value,onclick,turn}:TileProps) => {
let hoverclass =null; 
if (value!=='X' && value!=='O' && turn !==null)
{
    hoverclass=turn.toLowerCase()+"-hover";
}
  return (
    <div onClick={onclick} className={"tile" + " "+ classname  + " " +hoverclass} >{value}</div>
  )
}
//25percnél
export default Tile
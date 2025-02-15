import React from "react";
import { Cell } from "../models/cell";

interface CellProps{
    cell:Cell;
    selected:boolean //ընտրված է արդյոք այս դաշտը
    click:(cell:Cell)=>void //ոչինչ չի վերադարձնում
}

const CellComponent:React.FC<CellProps>=({cell,selected,click})=>{
    return(
        <div className={["cell",cell.color, selected? "selected": ""].join(" ")}
        onClick={()=>click(cell)}
        >
            {!cell.avalable && <div className={"awailable"}/>}
           
           {cell.figure ?.logo && <img src ={cell.figure.logo}/>}

            </div>
    )
}

export default CellComponent
import React from 'react'
import Jauge from "./simJauge"

const simCategorie = (props) => {

    return (
        <div className="sim-categorie flex-item" id={"cat"+props.data.index}>
            <h4 className="sim-categorie-name">{props.data.name}</h4><Jauge data={props.data.index}/>
        </div>
    )
}

export default simCategorie

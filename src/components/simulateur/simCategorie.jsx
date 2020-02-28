import React from 'react'
import Jauge from "./simJauge"

const simCategorie = (props) => {

    return (
        <div className="sim-categorie" id={"cat"+props.data.index}>
            <h3 className="sim-categorie-name">{props.data.name}</h3><Jauge/>
            <p className="sim-categorie-description">{props.data.description}</p>
        </div>
    )
}

export default simCategorie

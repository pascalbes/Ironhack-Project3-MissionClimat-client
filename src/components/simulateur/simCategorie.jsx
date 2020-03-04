import React from 'react'
import Jauge from "./simJauge"

const simCategorie = ({data, results}) => {

    return (
        <div className="sim-categorie flex-item">
            <h4 className="sim-categorie-name">{data.name}</h4>
            <div style={{ height: "30px", width: "50%" }}>{results && data.name === results[0].name && <Jauge results={results}/>}</div>
        </div>
    )
}

export default simCategorie

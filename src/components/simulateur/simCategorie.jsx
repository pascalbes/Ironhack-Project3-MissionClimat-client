import React from 'react'
import Jauge from "./simJauge"

const simCategorie = ({data, results}) => {

    return (
        <div className="sim-categorie flex-item" id={"cat"+data.index}>
            <h4 className="sim-categorie-name">{data.name}</h4>
            <div style={{ height: "50px", width: "80%" }}>{results && data.name === results[0].name && <Jauge results={results}/>}</div>
            {/* <p className="sim-categorie-description">{data.description}</p> */}
        </div>
    )
}

export default simCategorie

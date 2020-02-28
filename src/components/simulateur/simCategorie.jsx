import React from 'react'
import Jauge from "./simJauge"

const simCategorie = ({data, results}) => {

    console.log(results)

    return (
        <div className="sim-categorie flex-item" id={"cat"+data.index}>
            <h3 className="sim-categorie-name">{data.name}</h3>
            {results && <Jauge results={results}/>}
            <p className="sim-categorie-description">{data.description}</p>
        </div>
    )
}

export default simCategorie

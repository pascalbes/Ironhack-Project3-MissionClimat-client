import React from 'react'
import Jauge from "./simJauge"

const simCategorie = ({data, results}) => {

    console.log(data, results)

    function handleJauge(name, results) {
        if (results && name === results[0].name) {
            return <Jauge results={results}/>
        } 
    }

    return (
        <div className="sim-categorie flex-item" id={"cat"+data.index}>
            <h3 className="sim-categorie-name">{data.name}</h3>
            {handleJauge(data.name, results)} 
            {/* <p className="sim-categorie-description">{data.description}</p> */}
        </div>
    )
}

export default simCategorie

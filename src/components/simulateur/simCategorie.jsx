import React from 'react'
import Jauge from "./simJauge"

const simCategorie = ({data, results}) => {

    console.log('-------')
    console.log(data)
    console.log(results)
    console.log('-------')

    var backColor = 'grey'
    if (results) {
        // backColor =  "#80" + results[0].color[0].split('').slice(1,7).join('')
        backColor = results[0].color[0]
    }

    return (
        <div className="sim-categorie flex-item" style={{backgroundColor:backColor}}>
            <h4 className="sim-categorie-name">{data.name}</h4>
            {results && data.name === results[0].name && <div className="flex-item flex-column">
                <p className="sim-categorie-emissions">Mes émissions 2030 : {results[0].measures[0]} MtCO2</p>
                <div className="sim-jauge">{results && data.name === results[0].name && <Jauge results={results}/>}</div>
                <div className='sim-categorie-markers flex-item'>
                    <div>
                        <p>Un scénario 1.5°C</p>
                        <p className="sim-emissions-2030">{results[0].markers[0]} MtCO2</p>
                    </div>
                    <div>
                        <p>Emissions 2020</p>
                        <p className="sim-emissions-2020">{results[0].markers[1]} MtCO2</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default simCategorie

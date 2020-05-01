import React from 'react'
// import Jauge from "./simJauge"
import JaugeDiv from "./simJaugeDiv"
import { Textfit } from 'react-textfit';

const simCategorie = ({data, results}) => {

    //calcul des marges de la légende de la jauge pour leur positionnement
    if (results) {
        const max = results[0].ranges[2];
        const m1 = results[0].markers[0]/max*100;
        const m2 = results[0].markers[1]/max*100;

        var margin1 = 0;
        if (m1 < 13) {
            margin1 = 0 + "%"
        }
        else {
            margin1 = m1 - 13 + "%"
        }

        var margin2 = 0;
        if (m2 < m1 + 26) {
            margin2 = 0 + "%"
        }
        else if (m2 > 87) {
            margin2 = 87 - m1 - 26 + "%"
        }
        else {
            margin2 = m2 - m1 - 26 + "%"
        }

    }
    

    return (
        <div id={"cat" + data.index} className="sim-categorie flex-item" style={{backgroundColor:data.color}}>
            <h4 className="sim-categorie-name">{data.name}</h4>
            {results && data.name === results[0].name && 
                <div className="flex-item flex-column">
                    <p className="sim-categorie-emissions">Mes émissions 2030 : {results[0].measures[0]} MtCO2</p>
                    {/* <div className="sim-jauge">{results && data.name === results[0].name && <Jauge results={results}/>}</div> */}
                    <div className="sim-jauge">{results && data.name === results[0].name && <JaugeDiv results={results}/>}</div>
                    <div className='sim-categorie-markers flex-item'>
                        <div style={{position:'relative', marginLeft:`${margin1}`}}>
                            <div>
                                <p>Scénario 1.5°C</p>
                            </div>
                            <div>
                                <p className="sim-emissions-2030">{results[0].markers[0]} MtCO2</p>
                            </div>
                        </div>
                        <div style={{position:'relative', marginLeft:`${margin2}`}}>
                            <div>
                                <p>Emissions 2020</p>
                            </div>
                            <div>
                                <p className="sim-emissions-2020">{results[0].markers[1]} MtCO2</p>
                            </div>
                        </div>
                        {/* <div style={{position:'relative', marginLeft:`${margin1}`}}>
                            <div>
                                <Textfit mode="single">Scénario 1.5°C</Textfit>
                            </div>
                            <div>
                                <Textfit mode="single">
                                    <p className="sim-emissions-2030">{results[0].markers[0]} MtCO2</p>
                                </Textfit>
                            </div>
                        </div>
                        <div style={{position:'relative', marginLeft:`${margin2}`}}>
                            <div>
                                <Textfit mode="single">Emissions 2020</Textfit>
                            </div>
                            <div>
                                <Textfit mode="single">
                                    <p className="sim-emissions-2020">{results[0].markers[1]} MtCO2</p>
                                </Textfit>
                            </div>
                        </div> */}
                    </div>
            </div>}
        </div>
    )
}

export default simCategorie

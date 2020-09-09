import React, {useState} from 'react'
import CopyToClipboard from "components/CopyToClipboard";
import "styles/simulator.css";

const sectors = ["Bâtiments","Transports", "Agriculture et alimentation", "Biens et services"];

const CopyResults = ({jsonExport}) => {

    function stringifyJSON(text, key) {
        if (!key) {
            return JSON.stringify(text)
        }

        let jsonTemp = {};
        jsonTemp.results={...jsonExport.results}
        jsonTemp.validation={...jsonExport.validation}
        jsonTemp.categories = jsonExport.categories.filter(category => category.data.name == key)
        jsonTemp.parameters = jsonExport.parameters.filter(parameter => parameter.category.name == key)
        
        return JSON.stringify(jsonTemp)
        
    }
    
    return (
        <div id="copy_results">
            <div>
                <h3>1. Copier les résultats</h3>
                <p>Cliquez sur le bouton correspondant au secteur sur lequel vous avez travaillé.</p>
                {jsonExport.categories.map(category => (
                <CopyToClipboard text={stringifyJSON(jsonExport, category.data.name)} backgroundColor={category.data.colorHover}>
                    {category.data.name}
                </CopyToClipboard>
                ))}
                
                {/* <CopyToClipboard text={stringifyJSON(jsonExport)} backgroundColor="grey">
                    Tous
                </CopyToClipboard> */}
            </div>
            <div id="data_export">
                <h3>2. Exporter les données</h3>
                <p>Cliquez sur le bouton correspondant au round correspondant à votre atelier</p>
                <button><a href="http://34.90.238.39/send/6" target="_blank">Round 1</a></button>
                <button><a href="http://34.90.238.39/send/4" target="_blank">Round 2</a></button>
            </div>
            
        </div>
    )
}

export default CopyResults

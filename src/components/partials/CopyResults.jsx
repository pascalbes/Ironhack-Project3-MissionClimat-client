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

            <h3>Export des données</h3>
            <div>
                <h4>1. Proposition pour le Secteur Bâtiments</h4>
                <CopyToClipboard 
                    text={stringifyJSON(jsonExport, "Bâtiments")} 
                    backgroundColor="grey"
                    url='http://35.205.101.108:443//send/df3b7388-ddbe-4b33-86cf-a41d32efbf1c'
                    key={1}
                >
                    Exporter les données "Bâtiments"
                </CopyToClipboard>
            </div>
            <div id="data_export">
                <h4>2. Proposition de Scénario Complet</h4>
                <CopyToClipboard 
                    text={stringifyJSON(jsonExport)} 
                    backgroundColor="grey"
                    url='http://35.205.101.108:443//send/fea06fae-ded6-440a-9420-f4576af685bf'
                    key={2}
                >
                    Exporter mon scénario complet
                </CopyToClipboard>
            </div>


            {/* <div>
                <h3>1. Copier les résultats</h3>
                <p>Cliquez sur le bouton correspondant au secteur sur lequel vous avez travaillé. Sur "Tous" pour tous les secteurs.</p>
                {jsonExport.categories.map(category => (
                <CopyToClipboard text={stringifyJSON(jsonExport, category.data.name)} backgroundColor={category.data.colorHover}>
                    {category.data.name}
                </CopyToClipboard>
                ))}
                
                <CopyToClipboard text={stringifyJSON(jsonExport)} backgroundColor="grey">
                    Tous
                </CopyToClipboard>
            </div>
            <div id="data_export">
                <h3>2. Exporter les données</h3>
                <p>Cliquez sur le bouton correspondant au round correspondant à votre atelier</p>
                <button><a href="http://34.90.238.39/send/7" target="_blank">Round 1</a></button>
                <button><a href="http://34.90.238.39/send/8" target="_blank">Round 2</a></button>
            </div> */}
            
        </div>
    )
}

export default CopyResults

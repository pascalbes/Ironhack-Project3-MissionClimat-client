import React from 'react'
import AteliersBarChart from "components/ateliers/AteliersBarChart";

let params = [["0", "Rénovation thermique", "Part de bâtiments rénovés en 2030 (%)"], ["1", "Chauffages gaz", "Part de chauffages au gaz remplacés en 2030 (%)"], ["2", "Chauffages fioul", "Part de chauffages au fioul remplacés en 2030 (%)"], ["3", "Surface chauffée", "Surface chauffée par personne (m2)"], ["4", "Température chauffage", "Température moyenne des logements en 2030 (°C)"], ["5", "Consommation d'électricité", "Consommation d'électricité spécifique par personne en 2030 (%)"], ["6", "Distance parcourue en voiture", "Distance parcourue en voiture en 2030 par rapport à 2020 (%)"], ["7", "Nombre de passagers par véhicule", "Nombre moyen de passagers par véhicule en 2030"], ["8", "Remplacement des véhicules particuliers", "Part de voitures remplacées par des Véhicules à Très Faibles Emissions en 2030 (%)"], ["9", "Eco-conduite", "Part de conducteurs pratiquant l'éco-conduite en 2030 (%)"], ["10", "Transport aérien", "Nombre de passagers français par an en 2030 (en millions)"], ["11", "Remplacement des véhicules de transports de marchandises", "Part de véhicules de transports de marchandises et véhicules utilitaires remplacés par des Véhicules à Très Faibles Emissions en 2030 (%)"], ["12", "Marchandises transportées", "Quantité de marchandises.km transportées en 2030 par rapport à 2020 (%)"], ["13", "Consommation de viande", "Consommation de viande (hors élevages extensifs) en 2030 par rapport à 2020 (%)"], ["14", "Exploitations agricoles exemplaires", "Part des exploitations contribuant à la baisse des émissions en 2030 (%)"], ["15", "Gain d'efficacité des pratiques agricoles par an", "Gain d'efficacité carbone des pratiques agricoles par an (%)"], ["16", "Surfaces afforestées", "Part de terres agricoles converties à l'afforestation (%)"], ["17", "Services", "Quantité de services (dont services publics) en 2030 par rapport à 2020 (%)"], ["18", "Services (efficacité)", "Gain d'efficacité carbone des services par an (%)"], ["19", "Biens informatiques", "Quantité de biens informatiques et Hifi neufs en 2030 par rapport à 2020 (%)"], ["20", "Biens informatiques (efficacité)", "Gain d'efficacité carbone de la fabrication de biens informatiques et hifi par an (%)"], ["21", "Textile", "Quantité de biens textiles neufs en 2030 par rapport à 2020 (%)"], ["22", "Textile (efficacité)", "Gain d'efficacité carbone de la fabrication de biens textiles par an (%)"], ["23", "Autres biens manufacturés", "Quantité d'électroménager, mobilier, distribution neuf en 2030 par rapport à 2020 (%)"], ["24", "Autres biens manufacturés (efficacité)", "Gain d'efficacité carbone de la fabrication des autres biens manufacturés par an (%)"]];

function median(values){
    if(values.length ===0) return 0;
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
  
    if (values.length % 2)
      return values[half];
  
    return (values[half - 1] + values[half]) / 2.0;
  }
  
  
  function standardDeviation(values){
    var avg = average(values);
    
    var squareDiffs = values.map(function(value){
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    var avgSquareDiff = average(squareDiffs);
  
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
  
  function average(data){
    var sum = data.reduce(function(sum, value){
      return sum + value;
    }, 0);
  
    var avg = sum / data.length;
    return avg;
  }
  

const AteliersStatsParam = ({ datas, color, color2 }) => {

    const total = datas.data.reduce((a,v)=>a+v,0)
    const mean = Math.round(total / datas.data.length,1)
    const med = Math.round(median(datas.data),1)
    const eqType = Math.round(standardDeviation(datas.data),1)
    const eqTypeRel = Math.round(eqType/mean*100,1) + "%"

    params.find(p=>p[1] === datas.name) ? datas.description = params.find(p=>p[1] === datas.name)[2] : datas.description = ""

    return (
        <div className="atelier_param">
            <h4>{datas.name}</h4>
            <h5>{datas.description}</h5>
            <div className="indicator_container">
                <div className="indicator_box">
                    <p className="results-title">Nb Résultats</p>
                    <div className="results-figure">{datas.data.length}</div>
                </div>
                <div className="indicator_box">
                    <p className="results-title">Moyenne</p>
                    <p className="results-figure">{mean}</p>
                </div>
                <div className="indicator_box">
                    <p className="results-title">Médiane</p>
                    <p className="results-figure">{med}</p>
                </div>
                <div className="indicator_box">
                    <p className="results-title">Ecart type</p>
                    <p className="results-figure">{eqType}</p>
                </div>
                <div className="indicator_box">
                    <p className="results-title">Ecart type relatif</p>
                    <p className="results-figure">{eqTypeRel}</p>
                </div>

            </div>
            
            <div className="bar_graph">
                <AteliersBarChart datas={datas} color={color} color2={color2} mean={mean} med={med} eqType={eqType}/>
            </div>
        </div>
    )
}

export default AteliersStatsParam

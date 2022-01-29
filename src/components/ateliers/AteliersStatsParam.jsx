import React from 'react'
import AteliersBarChart from "components/ateliers/AteliersBarChart";

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

    const total = datas.data.reduce((a,v)=>a+v,0);
    const mean = total / datas.data.length;
    const med = median(datas.data);
    const eqType = standardDeviation(datas.data);
    const eqTypeRel = Math.round(eqType/mean*100*10)/10 + "%";

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
                    <p className="results-figure">{Math.round(mean*10)/10}</p>
                </div>
                <div className="indicator_box">
                    <p className="results-title">Médiane</p>
                    <p className="results-figure">{Math.round(med*10)/10}</p>
                </div>
                <div className="indicator_box">
                    <p className="results-title">Ecart type</p>
                    <p className="results-figure">{Math.round(eqType*10)/10}</p>
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

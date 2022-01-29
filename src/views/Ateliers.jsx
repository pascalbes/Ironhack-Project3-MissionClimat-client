import React, { useState, useEffect } from "react";
import axios from "axios";

import AteliersStatsParam from "components/ateliers/AteliersStatsParam";
import Header from "components/partials/Header";
import "styles/ateliers.css"
import { getUrl } from "js/getUrl"

const colors = {
    "Bâtiments": ["#E7F5FE", "#87CEFA"],
    "Transports": ["#FFEAEA", "#FFB8B8"],
    "Agriculture et alimentation": ["#E8FFF3", "#7FFFD4"],
    "Biens et services": ["#F8E9FF", "#DA8FFF"],
    "Énergie": ["#EFF9FA", "#B0E0E6"]
};

const Ateliers = (props) => {

    const [workshopDatas, setWorkshopDatas] = useState(null);
    const [finalDatas, setFinalDatas] = useState(null);
    const [url, setUrl] = useState(null);

    const id = props.match.params.id
    const apiPath = process.env.REACT_APP_WORKSHOP_API_URL;

    useEffect(() => {
        axios.get(apiPath + "/workshop/" + id + "/")
        .then(res=> setWorkshopDatas(res.data))
        .catch(err=> console.log(err))
    },[]);


    const compileDatas = (workshopDatas) => {

        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }

        let categories = workshopDatas.groupData
            .reduce((a, v) => [...a, ...v.groupResult.categories], [])
            .filter(onlyUnique);

        let finalDatas = [];
        categories.map((category,i) => {

            finalDatas[i]={
                name: category,
                color: colors[category][0],
                color2: colors[category][1]
            };

            let parameters = workshopDatas.groupData
                .filter(data => data.groupResult.categories.includes(category))
                .map(data => data.groupResult.params)
                .reduce((a,v) => [...a, ...v], [])
                .filter(param => param.category === category);
                
            let params = parameters.map(p=>p.name).filter(onlyUnique)
            finalDatas[i].parameters = params.map(p => {
                let pTemp = parameters.filter(p2 => p2.name === p)
                let pFinal = {
                    "min": pTemp[0].min,
                    "max": pTemp[0].max,
                    "name": pTemp[0].name,
                    "step": pTemp[0].step,
                    "unit": pTemp[0].unit,
                    "data": pTemp.map(p2 => p2.value)
                }
                return pFinal
            })
        })
        return finalDatas
    }
    
    useEffect(() => {
        if (workshopDatas) {
            const datas = compileDatas(workshopDatas)
            setFinalDatas(datas)
            setUrl(getUrl(datas))
        }
    },[workshopDatas])

    return (
        <>
            {finalDatas?.length && <div id="ateliers_statistiques">
                <div id="ateliers_intro">
                    <h1>Atelier / Statistiques</h1>
                    <p> Atelier : {workshopDatas.workshopName}</p> 
                    <p> Nombre de participants : {workshopDatas.participantsNumber}</p> 
                    {url && <a href={url.urlMeans} target="_blank"><button className="blue-btn">Scénario Moyen</button></a>}
                    {url && <a href={url.urlMeds} target="_blank"><button className="blue-btn">Scénario Médian</button></a>}


                </div>
                
                {finalDatas.map(cat => (
                    <div className="atelier_cat">
                        <div className="atelier_param" style={{backgroundColor : cat.color2}}>
                            <h3>{cat.name}</h3>
                        </div>
                        <div>
                        {cat.parameters.map(param => (
                            <AteliersStatsParam datas={param} color={cat.color} color2={cat.color2}/>
                        ))}
                        </div>
                    </div>
                ))}
            </div>}
        </>
    )
}

export default Ateliers

import React, { useState, useEffect } from "react";
import axios from "axios";

import AteliersStatsParam from "components/ateliers/AteliersStatsParam";
import Header from "components/partials/Header";
import "styles/ateliers.css"
import getUrl from "js/getUrl"

const colors = [
["#E7F5FE", "#87CEFA"],
["#FFEAEA", "#FFB8B8"],
["#E8FFF3", "#7FFFD4"],
["#F8E9FF", "#DA8FFF"]]

const Ateliers = (props) => {

    const [workshopDatas, setWorkshopDatas] = useState(null);
    const [finalDatas, setFinalDatas] = useState(null);
    const [url, setUrl] = useState(null);

    const id = props.match.params.id

    useEffect(() => {
        axios.get("http://34.90.238.39:8000/workshop/" + id + "/")
        .then(res=> setWorkshopDatas(res.data))
        .catch(err=> console.log(err))
    },[])

    const compileDatas = (workshopDatas) => {

        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }

        let categories = workshopDatas.groupData.map(data => data.groupResult.categoryName).filter(onlyUnique)
        let finalDatas = [];
        categories.map((category,i) => {
            finalDatas[i]={}
            finalDatas[i].name = category
            finalDatas[i].color = workshopDatas.groupData.filter(data => data.groupResult.categoryName === category)[0].groupResult.categoryColor
            finalDatas[i].color2 = colors.filter(c=>c[0]==finalDatas[i].color)[0][1]

            let parameters = workshopDatas.groupData
                .filter(data => data.groupResult.categoryName === category)
                .map(data => {return data.groupResult.params})
                .reduce((a,v) => [...a, ...v])
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

    console.log(workshopDatas)

    return (
        <>
            <Header />
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

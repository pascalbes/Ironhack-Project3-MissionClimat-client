import React, { useState, useEffect } from "react";
import axios from "axios";
import AteliersBarChart from "components/ateliers/AteliersBarChart";
import "styles/ateliers.css"

const Ateliers = (props) => {

    const [workshopDatas, setWorkshopDatas] = useState(null);
    const [finalDatas, setFinalDatas] = useState(null);


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
            console.log(workshopDatas.groupData.filter(data => data.groupResult.categoryName === category)[0].groupResult.categoryColor)
            let parameters = workshopDatas.groupData
                .filter(data => data.groupResult.categoryName === category)
                .map(data => {return data.groupResult.params})
                .reduce((a,v) => [...a, ...v])
            let params = parameters.map(p=>p.name).filter(onlyUnique)
            console.log(params)
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
        console.log(finalDatas)
        return finalDatas
    }
    
    useEffect(() => {
        if (workshopDatas) {
            const datas = compileDatas(workshopDatas)
            setFinalDatas(datas)
        }
    },[workshopDatas])

    return (
        <div>
            {finalDatas?.length && <div>
                {finalDatas.map(cat => (
                    <div className="atelier_cat">
                        <h3>{cat.name}</h3>
                        <div>
                        {cat.parameters.map(param => (
                            <div className="atelier_param">
                                <p>{param.name}</p>
                                <div className="bar_graph">
                                    <AteliersBarChart datas={param} color={cat.color}/>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Ateliers

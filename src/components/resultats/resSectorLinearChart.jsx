import React from 'react'
import "./../../styles/res-sector-linear-chart.css"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Results from '../../views/Results';


const resSectorLinearChart = ({results}) => {

    console.log("in sector")

    var data =[]

    if (Object.entries(results).length) {
        console.log("coucou1")
        data=results.data
    }
    else {
        console.log("coucou2")
        data = [
            {name: 2015, "MGTonnes de CO2 émis": 40, tarace:55, pv: 2400, amt: 2400},
            {name: 2020, "MGTonnes de CO2 émis": 36, Objectif: 30, tarace:55,  pv: 2400, amt: 2400},
            {name: 2025, "MGTonnes de CO2 émis": 32, Objectif: 25, tarace:55, pv: 2400, amt: 2400},
            {name: 2030, "MGTonnes de CO2 émis": 20, Objectif: 15, tarace:55, pv: 2400, amt: 2400},
            {name: 2035, Objectif: 10, tarace:55, pv: 2400, amt: 2400},
            {name: 2040, Objectif: 5, tarace:55, pv: 2400, amt: 2400}
        ];
        results.line = [];
        results.line.push({
            dataKey: "MGTonnes de CO2 émis",
            stroke: "#fe87b2"
        })
        results.line.push({
            dataKey: "Objectif",
            stroke: "#fe87b2"
        })
        results.line.push({
            dataKey: "tarace",
            stroke: "#fe87b2"
        })
        

    }

    console.log(results)
    console.log(results.line.length)

    // TITRES A ACTUALISER

    return (

        <div className="linear-box">

                <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey={results.line[0].dataKey} stroke={results.line[0].stroke} />
                    <Line type="monotone" dataKey={results.line[1].dataKey} stroke={results.line[1].stroke} />
                    <Line type="monotone" dataKey={results.line[2].dataKey} stroke={results.line[2].stroke} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend className="legend"/>
                </LineChart>
        </div>
    )
}

export default resSectorLinearChart

import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const mondialLinearChart = () => {

    const data = [
        {name: 2015, "MGTonnes de CO2 émis": 40, pv: 2400, amt: 2400},
        {name: 2020, "MGTonnes de CO2 émis": 36, Objectif: 30,  pv: 2400, amt: 2400},
        {name: 2025, "MGTonnes de CO2 émis": 32, Objectif: 25, pv: 2400, amt: 2400},
        {name: 2030, "MGTonnes de CO2 émis": 20, Objectif: 15, pv: 2400, amt: 2400},
        {name: 2035, Objectif: 10, pv: 2400, amt: 2400},
        {name: 2040, Objectif: 5, pv: 2400, amt: 2400}
    ];

    return (
        <div className="detail-world-box border-btn">
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="MGTonnes de CO2 émis" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Objectif" stroke="green" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
            </LineChart>
        </div>
    )
}

export default mondialLinearChart
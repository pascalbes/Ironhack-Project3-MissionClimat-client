import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const resGenLinearChart = ({datas}) => {

    console.log(datas)
    console.log(datas.line[0].dataKey)

    return (
    
        <ResponsiveContainer height= "100%" width="100%">
            <LineChart data={datas.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey={datas.line[0].dataKey} stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
            </LineChart>
        </ResponsiveContainer>
    
    )
}

export default resGenLinearChart

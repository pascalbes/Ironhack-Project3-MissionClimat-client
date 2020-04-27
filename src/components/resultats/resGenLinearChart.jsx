import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const resGenLinearChart = ({datas}) => {

    console.log(datas)

    return (
    
        <ResponsiveContainer height= "100%" width="100%">
            <LineChart data={datas.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

                {datas.line.map((dat,i)=> (
                    <Line dataKey={dat.dataKey} stroke={dat.stroke} />
                ))}
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

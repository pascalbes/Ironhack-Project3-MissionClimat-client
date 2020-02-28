import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';


const simResultsAreaChart = ({datas}) => {

    const data = datas.data.data

    return (
      <AreaChart width={400} height={300} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip 
          allowEscapeViewBox={{x:true, y: true}}
          offSet={5000}
          />
        {datas.areaDatas.map((area, i) => (
          <Area type="monotone" dataKey={area.dataKey} stackId="1" stroke={area.color} fill={area.color} />
        ))}
      </AreaChart>
    )
}

export default simResultsAreaChart

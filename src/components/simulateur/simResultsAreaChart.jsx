import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const simResultsAreaChart = ({datas}) => {

    const data = datas.data.data

    function toolTipContent(e) {
      return (
        <div className="chart-tooltip" style={{backgroundColor:'white'}}>
          <h4>Année : {e.label}</h4>
          {e.payload.map((area) => (
            <p style={{color:area.color}}>{area.name} : {area.value} MtCO2</p>
          ))}
        </div>
        )
    }

    return (
      <ResponsiveContainer height= "100%" width="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
         <Tooltip
           content={e => toolTipContent(e)}
           position={{ x: 50, y: -150}}
         />
        {datas.areaDatas.map((area, i) => (
          <Area fillOpacity="1" dataKey={area.dataKey} stackId="1" stroke={area.color} fill={area.color}/>
        ))}
      </AreaChart>
      </ResponsiveContainer>
    )
}

export default simResultsAreaChart

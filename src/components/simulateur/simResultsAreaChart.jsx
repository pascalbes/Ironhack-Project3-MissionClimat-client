import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const simResultsAreaChart = ({datas}) => {

    const data = datas.data.data

    function toolTipContent(e) {
      console.log(e)
      var annualEmi = 0;
      e.payload.forEach(data => annualEmi+=data.value)
      return (
        <div id="area-tooltip" className="chart-tooltip flex-item flex-column" style={{backgroundColor:'white'}}>
          <h4>Année : {e.label} / {Math.round(annualEmi)} MtCO2</h4>
          {e.payload.reverse().map((area) => (
            <div className="flex-item">
                <div className="legend-point" style={{backgroundColor:area.color}}></div>
                <p style={{color:'#163E59'}}>{area.name} : {area.value} MtCO2</p>
            </div>
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

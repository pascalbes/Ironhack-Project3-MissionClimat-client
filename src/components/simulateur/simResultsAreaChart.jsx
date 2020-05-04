import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';


const simResultsAreaChart = ({datas, xOffset, yOffset}) => {

    const data = datas.data.data

    function toolTipContent(e) {
      var annualEmi = 0;
      e.payload.forEach(data => annualEmi+=data.value)
      return (
        <div id="area-tooltip" className="chart-tooltip flex-item flex-column" style={{backgroundColor:'white'}}>
          <h4 style={{color:'#163e59'}}>Année : {e.label} / {Math.round(annualEmi)} {datas.data.yTitle}</h4>
          {e.payload.reverse().map((area) => (
            <div className="flex-item">
                <div className="legend-point" style={{backgroundColor:area.color}}></div>
                <p style={{color:'#163E59'}}>{area.name} : {area.value} {datas.data.yTitle}</p>
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
           position={{ x: xOffset, y: yOffset}}
         />
        {datas.areaDatas.map((area, i) => (
          <Area fillOpacity="1" dataKey={area.dataKey} stackId="1" stroke={area.color} fill={area.color}/>
        ))}
      </AreaChart>
      </ResponsiveContainer>
    )
}

export default simResultsAreaChart

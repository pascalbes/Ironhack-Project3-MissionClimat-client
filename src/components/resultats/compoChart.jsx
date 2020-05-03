import React from 'react';
import {
  ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';


const compoChart = ({datas}) => {

    const data = datas.data.data

    function toolTipContent(e) {
      var annualEmi = 0;
      e.payload.forEach(data => annualEmi+=data.value)
      return (
        <div id="area-tooltip" className="chart-tooltip flex-item flex-column" style={{backgroundColor:'white', width:'400px'}}>
          <h4 style={{color:'#163e59'}}>Année : {e.label}</h4>
          {e.payload.reverse().map((area) => (
            <div className="flex-item">
                <div className="legend-point" style={{backgroundColor:area.color}}></div>
                <p style={{color:'#163E59'}}>{area.name} : {area.value} MtCO2</p>
            </div>
          ))}
        </div>
        )
    }

    function handleGraphType(dat) {
        if (dat.type === "Area") {
            return (dat.color === '#FFFFFF') ?
                <Area fillOpacity="0" dataKey={dat.dataKey} stroke={dat.color} fill={dat.color}/>
                :
                <Area fillOpacity="1" dataKey={dat.dataKey} stroke={dat.color} fill={dat.color}/>
        }
        if (dat.type === "Line") return  <Line dataKey={dat.dataKey} stroke={dat.color}/>
    }

    return (
      <ResponsiveContainer height= "100%" width="100%">
      <ComposedChart data={data} stackOffsetDiverging margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}>
        <CartesianGrid 
            stroke="#f5f5f5"
            strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[-50, 1000]}/>
         <Tooltip
              content={e => toolTipContent(e)}
        //    position={{ x: 50, y: -150}}
         />
        {datas.graphDatas.map((dat, i) => (handleGraphType(dat)))}
      </ComposedChart>
      </ResponsiveContainer>
    )
}

export default compoChart

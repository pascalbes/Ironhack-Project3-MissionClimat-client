
import React from 'react';
import {PieChart, Pie, Sector, Cell, Legend, Label, Tooltip, ResponsiveContainer} from 'recharts';

  
const SunburstChart = React.forwardRef(({datas}, ref) => {

  function toolTipContent(e) {
    return e.payload[0] ? <p className="chart-tooltip" style={{backgroundColor:'white',color:e.payload[0].payload.payload.color}}>{e.payload[0].name} : {Math.round(e.payload[0].value)} MtCO2</p> : ""
  }

  return (
    <ResponsiveContainer width="100%" height="100%" >
      <PieChart>
        <Pie data={datas.data01} dataKey="value" outerRadius={"50%"}  stroke="none" >
          {datas.data01.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color}/>)}
          {/* {datas.data01.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)} */}
        </Pie>
        <Pie data={datas.data02} dataKey="value" innerRadius={"60%"} outerRadius={"80%"}  stroke="none">
          {datas.data02.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
          {/* {datas.data02.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />)} */}
          <Label dataKey="value" position="outside"/>
        </Pie>
        <Tooltip
          content={e => toolTipContent(e)}
        />
      </PieChart>
    </ResponsiveContainer>
  )
})
  
export default SunburstChart
  

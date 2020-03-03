
import React from 'react';
import {PieChart, Pie, Sector, Cell, Legend, Label, Tooltip, ResponsiveContainer} from 'recharts';

  
const SunburstChart = React.forwardRef(({datas}, ref) => {


  // const RADIAN = Math.PI / 180;

  // const renderCustomizedLabel = ({
  //   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  // }) => {
  //    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  //   return (
  //     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };

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
        <Tooltip/>
      </PieChart>
    </ResponsiveContainer>
  )
})
  
export default SunburstChart
  

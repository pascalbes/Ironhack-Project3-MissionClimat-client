
  import React from 'react'

  
import {
  PieChart, Pie, Sector, Cell, Legend, Label, Tooltip
} from 'recharts';

  
  const sunburstChart = ({datas}) => {

  // const RADIAN = Math.PI / 180;

  // const renderCustomizedLabel = ({
  //   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  // }) => {
  //    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }

    return (
      <PieChart width={400} height={200}>
          <Pie data={datas.data01} dataKey="value" cx={200} cy={100} outerRadius={60} label={renderCustomizedLabel} fill="#82ca9d">
            {datas.data01.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color}/>)}
            {/* {datas.data01.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)} */}
          </Pie>
          <Pie data={datas.data02} dataKey="value" cx={200} cy={100} innerRadius={65} outerRadius={85} label={renderCustomizedLabel} fill="#81cb9d">
            {datas.data02.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            {/* {datas.data02.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />)} */}
            <Label dataKey="value" position="outside"/>
          </Pie>
          <Tooltip/>
        </PieChart>
    )
  }
  
  export default sunburstChart
  

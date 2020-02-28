import React, { Component} from 'react'

import {
    PieChart, Pie, Sector, Cell, Legend, Label, Tooltip
  } from 'recharts';
  
  const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  export default class Example extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';
  
    render() {
      return (
        <PieChart width={500} height={500}>
          <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} label={renderCustomizedLabel}>
          {
            data01.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
          </Pie>
          <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d">
          {
            data01.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
          <Label dataKey="value" position="outside"/>
          
          </Pie>
          <Tooltip/>
        </PieChart>
      );
    }
  }
  
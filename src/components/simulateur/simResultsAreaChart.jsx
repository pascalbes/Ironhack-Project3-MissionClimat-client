import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const simResultsAreaChart = (props) => {

    
const data = [
  {
    name: '2015', Transport: 4000, Logement: 2400, Industrie: 2400,
  },
  {
    name: '2020', Transport: 3000, Logement: 1398, Industrie: 2210,
  },
  {
    name: '2025', Transport: 2000, Logement: 9800, Industrie: 2290,
  },
  {
    name: '2030', Transport: 2780, Logement: 3908, Industrie: 2000,
  },
  {
    name: '2040', Transport: 1890, Logement: 4800, Industrie: 2181,
  },
  {
    name: '2050', Transport: 2390, Logement: 3800, Industrie: 2500,
  },
  {
    name: '2040', Transport: 3490, Logement: 4300, Industrie: 2100,
  },
];



    return (
        <div>
            <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Transport" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="Logement" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="Industrie" stackId="1" stroke="#ffc658" fill="#ffc658" />
        <Legend/>
      </AreaChart>
        </div>
    )
}

export default simResultsAreaChart

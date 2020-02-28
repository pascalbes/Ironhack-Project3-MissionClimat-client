import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';


const simResultsAreaChart = ({datas}) => {

<<<<<<< HEAD
    console.log(datas)
    // console.log("''''''''''''''''''''datas''''''''''''''''''''")
    // console.log(datas.data)

=======
>>>>>>> 96829723f69096196f5c8c8ac4e17009400c5b83
    const data = datas.data.data

    return (
        <div>
            <AreaChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {datas.areaDatas.map((area, i) => (
          <Area type="monotone" dataKey={area.dataKey} stackId="1" stroke={area.color} fill={area.color} />
        ))}
      </AreaChart>
        </div>
    )
}

export default simResultsAreaChart

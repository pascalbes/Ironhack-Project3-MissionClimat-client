import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const simResultsAreaChart = ({datas}) => {

    const data = datas.data.data

    // function forTooltip(object) {
    //   return Object.entries(object).map((array, i) =>{
    //     return `${array[0]}: ${array[1]}`
    //   })
    // };
  

    const CustomTooltip = (e) => {
      console.log(e);
      
    //   if (active) {
    //     console.log(forTooltip(payload[0].payload))
    //     return (
    //       <div className="custom-tooltip">
    //         {Object.entries(payload[0].payload).map((array, i) => {
    //           return <p>{array[0]}: {array[1]} MGT CO2</p>
    //         })}
    //         {/* {forTooltip(payload[0].payload)} */}
    //         {/* {`${payload.name} :${payload.value}`} */}
    //         {/* <p className="intro">{getIntroOfPage(label)}</p> */}
    //       </div>
    //     );
    }
    
    //   return null;
    // };


    return (
      <ResponsiveContainer minWidth="300px" height= "100%" minHeight="300px" width="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
         <Tooltip  
          allowEscapeViewBox={{x:true, y: true}}
          // coordinate={{x:"-1000", y:"2000"}}
          // payload={{}}
          offset={-400}
         
          />
        {datas.areaDatas.map((area, i) => (
          <Area type="monotone" dataKey={area.dataKey} stackId="1" stroke={area.color} fill={area.color}  activeDot={{
            // onMouseOver: showToolTip(),
            // onMouseLeave: hideToolTip()
          }} />
        ))}
      </AreaChart>
      </ResponsiveContainer>
    )
}

export default simResultsAreaChart

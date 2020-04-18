import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const simResultsAreaChart = ({datas}) => {

    const data = datas.data.data

    console.log("areadatas")
    console.log(data)
    console.log(datas.areaDatas)

    // function forTooltip(object) {
    //   return Object.entries(object).map((array, i) =>{
    //     return `${array[0]}: ${array[1]}`
    //   })
    // };
  

    // const CustomTooltip = (e) => {
      // console.log(e);
      
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
    // }
    
    //   return null;
    // };

    function toolTipContent(e) {
      console.log(e)
      return (
        <div id="area-tooltip" style={{backgroundColor:'white'}}>
          <h4>Année : {e.label}</h4>
          {e.payload.map((area) => (
            <p style={{color:area.color}}>{area.name} : {area.value} MtCO2</p>
          ))}
        </div>
        )
    }


//     payload: Array(5)
// 0:
// fillOpacity: "1"
// stroke: "#0000CD"
// fill: "#0000CD"
// points: []
// dataKey: "Bâtiments"
// unit: undefined
// formatter: undefined
// name: "Bâtiments"
// color: "#0000CD"
// value: 111.6
// type: undefined

    return (
      <ResponsiveContainer height= "100%" width="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
         <Tooltip
           content={e => toolTipContent(e)}
           position={{ x: 0, y: -200}}
         />
        {datas.areaDatas.map((area, i) => (
          <Area fillOpacity="1" dataKey={area.dataKey} stackId="1" stroke={area.color} fill={area.color}/>
        ))}
      </AreaChart>
      </ResponsiveContainer>
    )
}

export default simResultsAreaChart

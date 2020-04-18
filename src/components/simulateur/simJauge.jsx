
import React from 'react'
import { Bullet } from '@nivo/bullet'
import { AutoSizer } from 'react-virtualized'



const MyBullet = ({results}) => {

    console.log("jauge data", results)
    const color=results[0].color
    delete results.color;

    return (
        
    <AutoSizer>
        {({ height, width }) => (
    <Bullet
        data={results}
        height={height}
        width={width}
        // margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        measureColors='#77D9B5'
        rangeColors="white"
        markerColors="paired"
        // titleAlign="start"
        titleOffsetX={-7000}
        titleOffsetY={-15}
        
        measureSize={0.7}
        animate={true}
        motionStiffness={20}
        motionDamping={5}
        markerSize={1}
        //reverse={true}
    />
    )}
</AutoSizer>
  
    //    <ul style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
    //     <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
    //         <div style={{backgroundColor:"#D95F02", width: "5px", height: "13px", marginRight: "5px"}}></div>Business as usual
    //     </li>
    //     <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
    //         <div style={{backgroundColor:"#1B9E77", width: "5px", height: "13px", marginRight: "5px"}}></div>Scénario 1.5°
    //     </li>
    //     <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
    //         <div style={{backgroundColor:"blue", width: "13px", height: "13px", marginRight: "5px"}}></div>Votre paramètre
    //     </li>
    // </ul>   
   
    )
}

export default MyBullet
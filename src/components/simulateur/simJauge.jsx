
import React from 'react'
import { Bullet } from '@nivo/bullet'



const MyBullet = ({results}) => {

    return (
        <div>
    <Bullet
        data={results}
        height= {30}
        width= {400}
        // margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        measureColors="blue"
        rangeColors="purple_blue"
        markerColors="dark2"
        titleAlign="start"
        // titleOffsetX={-70}
        // titleOffsetY={-15}
        measureSize={0.5}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
        markerSize={1}
        reverse={true}
    />
    {/* <ul style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
        <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
            <div style={{backgroundColor:"#D95F02", width: "5px", height: "13px", marginRight: "5px"}}></div>Business as usual
        </li>
        <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
            <div style={{backgroundColor:"#1B9E77", width: "5px", height: "13px", marginRight: "5px"}}></div>Scénario 1.5°
        </li>
        <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
            <div style={{backgroundColor:"blue", width: "13px", height: "13px", marginRight: "5px"}}></div>Votre paramètre
        </li>
    </ul> */}
    </div>
    )
}

export default MyBullet
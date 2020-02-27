
import React from 'react'
import { Bullet } from '@nivo/bullet'



const MyBullet = () => {

    const data = [
        {
          "id": "MGT de CO2",
          "ranges": [
            58,
            82,
            100
          ],
          "measures": [
            75
          ],
          "markers": [
            58,
            82
          ]
        }
      ]

 

    return (
        <div>
    <Bullet
        data={data}
        height= {300}
        width= {700}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        measureColors="blue"
        rangeColors="purple_blue"
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
        markerSize={1}
        reverse={true}
    />
    <ul style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
        <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
            <div style={{backgroundColor:"#91027A", width: "5px", height: "13px", marginRight: "5px"}}></div>Business as usual
        </li>
        <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
            <div style={{backgroundColor:"#E5479A", width: "5px", height: "13px", marginRight: "5px"}}></div>Scénario 1.5°
        </li>
        <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
            <div style={{backgroundColor:"blue", width: "13px", height: "13px", marginRight: "5px"}}></div>Votre paramètre
        </li>
    </ul>
    </div>
    )
}

export default MyBullet
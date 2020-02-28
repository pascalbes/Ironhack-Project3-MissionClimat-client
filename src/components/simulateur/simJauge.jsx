
import React from 'react'
import { Bullet } from '@nivo/bullet'



const MyBullet = (props) => {

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
      <div id={"graph-progress-bar"+props.data} className="graph-progress-bar nomarge nopad">
        <Bullet className="nomarge nopad" data={data} height={30} width={400} spacing={46}
            measureColors="blue"
            rangeColors="purple_blue"
            markerColors="dark2"
            titleAlign="start"
            measureSize={0.5}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
            markerSize={1}
            reverse={true}
        />
        <ul className="nomarge" style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
            <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                <div style={{backgroundColor:"#D95F02", width: "5px", height: "13px", marginRight: "5px"}}></div>Business as usual
            </li>
            <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                <div style={{backgroundColor:"#1B9E77", width: "5px", height: "13px", marginRight: "5px"}}></div>Scénario 1.5°
            </li>
            <li style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                <div style={{backgroundColor:"blue", width: "13px", height: "13px", marginRight: "5px"}}></div>Vos paramètres
            </li>
        </ul>
      </div>
    )
}

export default MyBullet
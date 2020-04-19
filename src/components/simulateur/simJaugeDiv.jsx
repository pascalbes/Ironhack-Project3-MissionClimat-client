import React from 'react'

const simJaugeDiv = ({results}) => {

    const color=results[0].color
    
    console.log(results)

    const max = results[0].ranges[2];
    const value = results[0].measures[0]/max*100+"%";
    const m1 = (results[0].markers[0]/max-results[0].measures[0]/max)*100-0.25+"%";
    const m2 = (results[0].markers[1]/max-results[0].markers[0]/max)*100-0.25+"%";

    return (
        <div className="jauge-ext" style={{height:'20px', width:'100%', backgroundColor:'white',border:'#C7C7C7 solid 1px', borderRadius:'10px'}}>
            <div className="jauge-int" style={{height:'18.5px', width:`${value}`}}></div>
            <div className="marker1" style={{height:'18.5px', width:'2px', position:'relative', marginLeft:`${m1}`, backgroundColor:'#0b8c85'}}></div>
            <div className="marker2" style={{height:'18.5px', width:'2px', position:'relative', marginLeft:`${m2}`, backgroundColor:'#ff6868'}}></div>
        </div>
   
    )
}

export default simJaugeDiv
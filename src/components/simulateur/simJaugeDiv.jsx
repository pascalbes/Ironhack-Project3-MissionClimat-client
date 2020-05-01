import React from 'react'

const simJaugeDiv = ({results}) => {

    const max = results[0].ranges[2];
    const m1 = (results[0].markers[0]/max)*100-0.25+"%";
    const m2 = (results[0].markers[1]/max-results[0].markers[0]/max)*100-0.25+"%";
    const jaugeStart = -(results[0].markers[1]/max)*100-0.5+"%";
    const value = results[0].measures[0]/max*100+"%";

    function handleColor() {
        if (results[0].measures[0] <= results[0].markers[0]) {
            return 'linear-gradient(to right, #7FFFD4 , #77D9B5)'
        }
        else if (results[0].measures[0] <= results[0].markers[1]) {
            return 'linear-gradient(to right, #F2F230 , #FFC53A)'
        }
        else if (results[0].measures[0] <= results[0].ranges[2]) {
            return 'linear-gradient(to right, #FFB8B8 , #DB7093)'
        }
        else {
            return 'linear-gradient(to right, #DA8FFF , #663399)'
        }

    }

    function handleClass() {
        return results[0].measures[0] >= results[0].ranges[2]-15 ? 'jauge-int-max' : 'jauge-int'
    }

    return (
        <div className="jauge-ext" style={{height:'20px', width:'100%', backgroundColor:'white',border:'#C7C7C7 solid 1px', borderRadius:'10px'}}>
            <div className="marker1" style={{height:'18.5px', width:'2px', position:'relative', marginLeft:`${m1}`, backgroundColor:'#0b8c85'}}></div>
            <div className="marker2" style={{height:'18.5px', width:'2px', position:'relative', marginLeft:`${m2}`, backgroundColor:'#ff6868'}}></div>
            <div className={handleClass()} style={{height:'18.5px', width:`${value}`, position:'relative', marginLeft:`${jaugeStart}`, transition:'1s', backgroundImage:handleColor()}}></div>
        </div>
   
    )

}

export default simJaugeDiv
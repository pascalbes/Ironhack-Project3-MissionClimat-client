import React from 'react'

const simJaugeDiv = ({results}) => {

    console.log(results)

    const color=results[0].color

    const max = results[0].ranges[2];
    const m1 = (results[0].markers[0]/max)*100-0.25+"%";
    const m2 = (results[0].markers[1]/max-results[0].markers[0]/max)*100-0.25+"%";
    const jaugeStart = -(results[0].markers[1]/max)*100-0.5+"%";
    const value = results[0].measures[0]/max*100+"%";

    function handleColor() {
        if (results[0].measures[0] <= results[0].markers[0]) {
            return 'green'
        }
        else if (results[0].measures[0] <= results[0].markers[1]) {
            return 'yellow'
        }
        else if (results[0].measures[0] <= results[0].ranges[2]) {
            return 'red'
        }
        else {
            return 'purple'
        }

    }

    function handleClass() {
        return results[0].measures[0] >= results[0].ranges[2]-15 ? 'jauge-int-max' : 'jauge-int'
    }

    return (
        <div className="jauge-ext" style={{height:'20px', width:'100%', backgroundColor:'white',border:'#C7C7C7 solid 1px', borderRadius:'10px'}}>
            <div className="marker1" style={{height:'18.5px', width:'2px', position:'relative', marginLeft:`${m1}`, backgroundColor:'#0b8c85'}}></div>
            <div className="marker2" style={{height:'18.5px', width:'2px', position:'relative', marginLeft:`${m2}`, backgroundColor:'#ff6868'}}></div>
            <div className={handleClass()} style={{height:'18.5px', width:`${value}`, position:'relative', marginLeft:`${jaugeStart}`, transition:'1s', backgroundColor:handleColor()}}></div>
        </div>
   
    )

    // const max = results[0].ranges[2];
    // const value = results[0].measures[0]/max*100+"%";
    // const m1 = (results[0].markers[0]/max-results[0].measures[0]/max)*100-0.25+"%";
    // const m2 = (results[0].markers[1]/max-results[0].markers[0]/max)*100-0.25+"%";

    // return (
    //     <div className="jauge-ext" style={{height:'20px', width:'100%', backgroundColor:'white',border:'#C7C7C7 solid 1px', borderRadius:'10px'}}>
    //         <div className="jauge-int" style={{height:'18.5px', width:`${value}`}}></div>
    //         <div className="marker1" style={{height:'18.5px', width:'2px', position:'relative', marginLeft:`${m1}`, backgroundColor:'#0b8c85'}}></div>
    //         <div className="marker2" style={{height:'18.5px', width:'2px', position:'relative', marginLeft:`${m2}`, backgroundColor:'#ff6868'}}></div>
    //     </div>
   
    // )
}

export default simJaugeDiv
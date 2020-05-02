import React from 'react'

import AreaChart from './../simulateur/simResultsAreaChart'
import Sunburst from './../simulateur/sunburstChart'
import LineChart from './resGenLinearChart'
import CompoChart from './compoChart';


const chartContainer = ({title, subtitle, graphData, graphType, graphText, legendData, sourceData}) => {
    
    function handleInnerHTML(text) {
        return {__html: text};
    }

    return (
        <div className="flex-item flex-column res-emi-fr-container">
            {/* Titre graphe */}
            <h3 dangerouslySetInnerHTML={handleInnerHTML(title)}></h3>
            <p className="chart-short-desc light-text" dangerouslySetInnerHTML={handleInnerHTML(subtitle)}></p>
            <div className="flex-item res-chart-container">
                <div className="res-chart">
                    {graphType==="AreaChart" && <AreaChart datas={graphData} xOffset={'auto'} yOffset={'auto'}/>}
                    {graphType==="Sunburst" && <Sunburst datas={graphData}/>}
                    {graphType==="CompoChart" && <CompoChart datas={graphData}/>}
                    {graphType==="Line" && <LineChart datas={graphData}/>}
                </div>
                <div className="res-chart-infos flex-item flex-column">
                    <p dangerouslySetInnerHTML={handleInnerHTML(graphText)} className="light-text"></p>
                    <div className="res-chart-legend flex-item">
                        {legendData.map((data,i) => (
                            <div className="flex-item">
                                <div className="legend-point" style={{backgroundColor:data.color}}></div>
                                <div>
                                    <p className="bold-text">{data.dataKey}</p>
                                    <p className="light-text">{data.subText}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="res-chart-source">{sourceData}</p>
                </div>
            </div>
        </div>
    )
}

export default chartContainer

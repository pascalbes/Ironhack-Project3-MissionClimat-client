/// BASIC
import React, { Fragment, useState, useEffect } from 'react'
import "./../styles/simulator.css"
import jsonFile from "../ressources/initialDatas.json"

/// COMPONENTS
import SimNav from "../components/simulateur/simNavBar"
import SimCat from "../components/simulateur/simCategorie"
import SimParamList from "../components/simulateur/simParametreList"
import SimParamSlider from "../components/simulateur/simParametreSlide"

const Simulator = () => {
    
    return (
        <div className="sim-page flex-item">
            <section className="sim-container-box">
                <div className="sim-nav-box flex-item">
                    <SimNav className="sim-nav-world" data={jsonFile.nav[0]}/>
                    <SimNav className="sim-nav-national" data={jsonFile.nav[1]}/>
                </div>
                <div className="sim-main-box">
                    {jsonFile.categories.map((cat, i) => (
                        <>
                        <SimCat key={i} data={cat.data} results={cat.resultats} />
                       {cat.parameters.map((param, j) => (
                            param.type.list && <SimParamList key={j} data={param.data} />,
                            param.type.slider && <SimParamSlider key={j} data={param.data} />
                        ))}
                        </>
                    ))}
                </div>
            </section>
            <section className="sim-results-box">
                <h1>RESULTS HERE</h1>
            </section>
        </div>
    )
}

export default Simulator
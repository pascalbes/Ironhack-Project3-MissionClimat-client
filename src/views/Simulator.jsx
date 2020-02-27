/// BASIC
import React, { Fragment, useState, useEffect } from 'react'
import "./../styles/simulator.css"
import jsonFile from "../ressources/initialDatas.json"
import { Link } from "react-router-dom"

/// COMPONENTS
import SimNav from "../components/simulateur/simNavBar"
import SimCat from "../components/simulateur/simCategorie"
import SimParamList from "../components/simulateur/simParametreList"
import SimParamSlider from "../components/simulateur/simParametreSlide"
import SimResultsArea from "../components/simulateur/simResultsAreaChart"
import SimResultsSpread from "../components/simulateur/simResultsRepartitionSecteur"

const Simulator = () => {

    const [values, setValues] = useState([])

    console.log(values)

    useEffect(() => {
        setValues(jsonFile.options.vInit)
    })

    // useEffect(() => {

    //     setresultas
    // }, [values])




    function setOneValue(value, index) {
        var newValues=[...values]
        newValues[index][0]=value
        setValues(newValues)
    }

    function handleParameterType(param, j, values, setValues) {
        if (param.type.list) {
            return <SimParamList key={j} data={param.data} value={values[param.data.index]} setOneValue={setOneValue} />
        }
        else if (param.type.slider) {
            return <SimParamSlider key={j} data={param.data} value={values[param.data.index]} setOneValue={setOneValue}/>
        }
    }

    return (
        <div className="sim-page flex-item">
            <section className="sim-container-box">
                <div className="sim-nav-box flex-item flex-column">
                    <div className="sim-nav-head flex-item">
                        <div className="sim-nav-head-title">
                            <h1>Mon scénario climat</h1>
                            <p>Paramétrez votre scénario pour la France d'ici 2030</p>
                        </div>
                        <div className="sim-nav-head-init">
                            <button className="sim-init-button">Initialiser</button>
                            <button className="sim-init-button">Sauvegarder</button>
                        </div>
                    </div>
                    <div className="sim-nav-bar flex-item">
                        <SimNav className="sim-nav-world" data={jsonFile.nav[0]}/>
                        <SimNav className="sim-nav-national" data={jsonFile.nav[1]}/>
                    </div>
                </div>
                <div className="sim-main-box">
                    {jsonFile.categories.map((cat, i) => (
                        <>
                        <SimCat key={i} data={cat.data} results={cat.resultats} />
                        <div id={"param-box"+i} className="sim-param-box grid-item">{cat.parameters.map((param, j) => (
                            handleParameterType(param, j, values, setValues)
                        ))}</div>
                        </>
                    ))}
                </div>
            </section>
            <section className="sim-results-box flex-item flex-column">
                <SimResultsArea/>
                <SimResultsSpread />
                <Link to="/results"><button className="sim-results-button">Résultats</button></Link>
            </section>
        </div>
    )
}

export default Simulator

/// BASIC
import React, {  useState, useEffect } from 'react'
import "./../styles/simulator.css"
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsonFile from "../ressources/initialDatas.json"
import { Link } from "react-router-dom"
import Loader from 'react-loader-spinner'


/// COMPONENTS
import SimNav from "../components/simulateur/simNavBar"
import SimCat from "../components/simulateur/simCategorie"
import SimParamList from "../components/simulateur/simParametreList"
import SimParamSlider from "../components/simulateur/simParametreSlide"
import SimResultsAreaChart from "../components/simulateur/simResultsAreaChart"
import Sunburst from './../components/simulateur/sunburstChart'

import api from '../api/APIHandler'

const Simulator = (props) => {

    const [values, setValues] = useState()
    const [results, setResults] = useState(jsonFile.results)

    //Gestion d'une route avec paramêtres spécifiques
    //url test : favorites/p0=100&&p1=0&&p2=56&&p3=99&&p4=30&&p5=18&&p6=52&&p7=35&&p8=57&&p9=2&&p10=80&&p11=82&&p12=3000000&&p13=73&&p14=35&&p15=30&&p16=50&&p17=100&&p18=85&&p19=85&&p20=85&&p21=1&&p22=2
    
    //fonction qui récupère en paramètre la string de l'url et la transforme en un array de values au format excel
    function getValuesFromUrl(vals) {

        const paramValPair = vals.split("&&")
        var params = []
        paramValPair.forEach((p,i) => {

            var param = jsonFile.parameters[i]

            if (param.type === "list") {
                var values=param.possibleValues.split(", ")
                params.push([values[p.split("=")[1]]])
            }
            else {
                params.push([p.split("=")[1]])
            }
        })

        return params

    }
    
    function getValuesFormatted(vals, units) {
        var valsFinal = vals.map((val, i) => {
            if (units[i]==="%") {
                val /= 100;
            }
            var valSt = val.toString()
            var valStFinal = valSt.replace(".", ",")
            return [valStFinal]
        })
        return valsFinal
    }


    //////////////////////////
    //////////// LOADER ?
    //////////////////////////

    // Fonction appellée à la première exécution. Permet de :
    //   - créer une spreadsheet si non créée, 
    //   - charger les valeurs de la spreadsheet créée si existante, et les afficher,
    //   - charger les valeurs d'un scénario enregistré, dans le cas d'un appel via url spécifique,

    useEffect(() => {

        async function initDatas() {

            var res={}

            // cas où une sheet est déjà en dans le localstorage
            if (localStorage.getItem('idSheet')) {

                const idSheet = localStorage.getItem('idSheet')
                console.log("SHEET ALREADY CREATED, ID:", idSheet)

                //cas où appel normal de la page simulateur
                if (!props.match.params.urlParams) {
                    res = await api.get("/sheet/values/"+idSheet)
                    setValues(res.data.values)
                }

                else { // cas où appel via url spécifique /save/p=1&&p=3.....
                    var valuesURL = getValuesFromUrl(props.match.params.urlParams)
                    setValues(valuesURL)
                }

            }
            else {  // cas où aucune sheet n'a été créée

                //création d'une copie de la sheet master
                res = await api.get("/sheet/")
                var idSheet = res.data.id
                localStorage.setItem('idSheet', idSheet);
                console.log("SHEET CREATED! ID:", idSheet)

                // cas où appel via url spécifique /save/p=1&&p=3.....
                if (props.match.params.urlParams) {
                    var valuesURL = getValuesFromUrl(props.match.params.urlParams)
                    setValues(valuesURL)
                }
                else { // cas où appel normal (on initialise tout de même les valeurs ici pour le loader)
                    setValues(jsonFile.options.vInit)
                }

            }

            

        }

        initDatas()
        console.log("in init data")

    }, [])
        
        


    //Fonction appellée à chaque actualisation de la variable state "values". Permet d'actualiser les résultats correpondant aux nouvelles values
    useEffect(() => {
        console.log("in useeffet update")
        if (values) {
            var idSheet = localStorage.getItem('idSheet')
            var valuesFormatted = getValuesFormatted(values, jsonFile.options.unit)
            if (idSheet) {
                api.patch("/sheet/update/"+idSheet, {values: valuesFormatted})
                .then(res => {
                    setResults(res.data.results)
                })
            .catch(err => console.log(err))
        }

        }
        
    }, [values])

    function setOneValue(value, index) {
        var newValues=[...values]
        newValues[index][0]=value
        setValues(newValues)
    }

    function handleParameterType(param, j, values) {

        //console.log("handle", param.data.index, values[12], values)

        if (param.type.list) {
            return <SimParamList key={j} data={param.data} value={values[param.data.index]} setOneValue={setOneValue} />
        }
        else if (param.type.slider) {
            return <SimParamSlider key={j} data={param.data} value={values[param.data.index]} setOneValue={setOneValue}/>
        }
    }

    function handleTempColor(){
        return "color"
    }

    return (

        values ?

        <div className="sim-page flex-item">
            <section className="sim-container-box grid-item nomarge">
                <div className="sim-nav-box flex-item nopad">
                    <SimNav className="sim-nav-world" data={jsonFile.nav[0]}/>
                    <div className="hidden">||</div>
                    <SimNav className="sim-nav-national" data={jsonFile.nav[1]}/>
                    <div className="hidden">||</div>
                    <button className="icon-box nomarge nopad">
                        <FontAwesomeIcon className="icon-gears" icon={faCogs}/>
                    </button>
                </div>
                <div className="sim-main-box border-btn light">
                    {jsonFile.categories.map((cat, i) => (
                        <>
                        <SimCat key={cat.data.index} data={cat.data} results={results.jaugeDatas[i]}  />
                        <div key={"p"+i} id={"param-box"+i} className="sim-param-box grid-item">
                            {cat.parameters.map((param, j) => (
                            handleParameterType(param, j, values, setValues)
                            ))}
                        </div>
                        <hr className="border" style={{borderWidth:"1px"}} />
                        </>
                    ))}
                </div>
            </section>
            <section className="sim-results-box flex-item flex-column nomarge">
                <div className="results-temp" style={{backgroundColor: handleTempColor}}>+2°C</div>
                <div>
                    Emissions carbone : {}Mt CO2 ({})
                </div>
                <div>
                    <SimResultsAreaChart datas={results.emiSecteur}/>
                    {/* <Sunburst datas={results.emiSecteurPie}/> */}
                </div>
                <Link to={{pathname: "/results",state: {results: results}}}><button className="sim-init-button green-btn">Voir mes résultats</button></Link>
            </section>
        </div>

        :

        <div id="loader">
            <Loader type="BallTriangle" color="white" height={100} width={100} />
            <h4>Nous préparons votre environnement de travail</h4>
        </div>
 
    )
}

export default Simulator

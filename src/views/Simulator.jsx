/// BASIC
import React, {  useState, useEffect } from 'react'
import "./../styles/simulator.css"

import jsonFile from "../ressources/initialDatas.json"
import { Link } from "react-router-dom"
import Loader from 'react-loader-spinner'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


/// COMPONENTS
import SimNav from "../components/simulateur/simNavBar"
import SimCat from "../components/simulateur/simCategorie"
import SimParamList from "../components/simulateur/simParametreList"
import SimParamSlider from "../components/simulateur/simParametreSlide"
import Sunburst from './../components/simulateur/sunburstChart'
import SimBarChart from './../components/simulateur/simBarChart'

import api from '../api/APIHandler'

const Simulator = (props) => {

    const [values, setValues] = useState()
    const [results, setResults] = useState(jsonFile.results)
    const [modeExpert, setModeExpert] = useState(false)

    console.log(values)

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
        
        //nettoyage du results de local storage
        if (localStorage.getItem('results')) localStorage.removeItem('results')

    }, [])

    function tempColor(){
        const tempColors = ["--tempgreen", "--tempyellowgreen", "--tempyellow", "--tempyelloworange", "--temporangered", "--tempred", "--tempredblack"]
        return (results.impacts.temperature < 1.5) ? tempColors[0]
        : (results.impacts.temperature >= 1.5 && results.impacts.temperature < 1.8) ? tempColors[0]
        : (results.impacts.temperature >= 1.8 && results.impacts.temperature < 2) ? tempColors[1]
        : (results.impacts.temperature >= 2 && results.impacts.temperature < 2.2) ? tempColors[2]
        : (results.impacts.temperature >= 2.2 && results.impacts.temperature < 2.5) ? tempColors[3]
        : (results.impacts.temperature >= 2.5 && results.impacts.temperature < 2.8) ? tempColors[4]
        : (results.impacts.temperature >= 2.8 && results.impacts.temperature < 3) ? tempColors[5]
        : (results.impacts.temperature >= 3) && tempColors[6]
    }

    function getUrl(values, parameters) {

        var url = window.location.origin + "/simulator/favorites/"
      
        for (let i=0; i<parameters.length;i++) {
          
          var param = parameters[i]
          url += "p" + i + "="
      
          if (param.type === "slider") {
            url += values[i][0]
          }
          else if (param.type === "list") {
            var possibleValues= param.possibleValues.split(", ")
            url += possibleValues.indexOf(values[i][0])
          }
          if (i < parameters.length-1) {
            url += "&&"
          }
        }
        return url
    }
        
        
    //Fonction appellée à chaque actualisation de la variable state "values". Permet d'actualiser les résultats correpondant aux nouvelles values
    useEffect(() => {
        if (values) {
            var idSheet = localStorage.getItem('idSheet')
            var valuesFormatted = getValuesFormatted(values, jsonFile.options.unit)
            if (idSheet) {
                api.patch("/sheet/update/"+idSheet, {values: valuesFormatted})
                .then(res => {
                    var resTemp = res.data.results
                    resTemp.url= getUrl(values, jsonFile.parameters)
                    setResults(resTemp)
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

        //gestion mode expert
        if (!param.data.expert || (param.data.expert && modeExpert)) {

            //gestion type de paramètre
            if (param.type.list) {
                return <SimParamList key={j} data={param.data} value={values[param.data.index]} setOneValue={setOneValue} />
            }
            else if (param.type.slider) {
                return <SimParamSlider key={j} data={param.data} value={values[param.data.index]} setOneValue={setOneValue}/>
            }
        }

        
    }

    function handleInitValues(e) {
        var initMode = e.target.value
        if (initMode === "init") {
            setValues(jsonFile.options.vInit)
        }
        else if (initMode === "1degre5") {
            setValues(jsonFile.options.v15)
        }
        else if (initMode === "mad-max") {
            setValues(jsonFile.options.vBaU)
        }
        window.location.reload();
    }

    return (
        values ?

        <div className="sim-page flex-item light">
            <section className="sim-container-box grid-item nomarge">
                <div className="sim-nav-box flex-item">
                    <SimNav className="sim-nav-world" data={jsonFile.nav[0]}/>
                    <div className="hidden">||</div>
                    <SimNav className="sim-nav-national" data={jsonFile.nav[1]}/>
                </div>



                <div className="sim-main-box">
                        <div className="sim-cat-params-box sticky">
                            <div className="sim-categorie flex-item">
                                <h4 className="sim-categorie-name">Options</h4>
                            </div>
                            <div className="sim-options flex-item">
                                <div className="sim-option-box">
                                    <h6 className="param-name">Initialisation des paramètres</h6>
                                    <p>Afin de gagner du temps, vous pouvez initialiser l'ensemble des données à des valeurs spécifiques</p>
                                    <form className="sim-option-form flex-item" onChange={e=>handleInitValues(e)}>
                                        <div className="flex-item"><input name="initialisation" value="init" type="radio"></input><label>Réinitialiser</label></div>
                                        <div className="flex-item"><input name="initialisation" value="1degre5" type="radio"></input><label>Scénario 1.5°C</label></div>
                                        <div className="flex-item"><input name="initialisation" value="mad-max" type="radio"></input><label>Mad Max</label></div>
                                    </form>
                                </div>
                                <div className="sim-option-box">
                                    <h6 className="param-name">Mode Expert</h6>
                                    <p>Le mode expert permet d'accéder à un plus grand nombre de paramètres, pour régler son scénario avec davantage de finesse</p>
                                    <FormControlLabel className="nomarge nopad" onChange={e => setModeExpert(e.target.checked)} value="end" control={<Switch color="Secondary"/>} /><label>Mode Expert</label>
                                </div>
                            </div>
                        </div>
                        {jsonFile.categories.map((cat, i) => (
                            <div className="sim-cat-params-box">
                                <div className="hidden bigger" id={"cat"+cat.data.index}>||</div>
                                <SimCat key={cat.data.index} data={cat.data} results={results.jaugeDatas[i]}  />
                                <div key={"p"+i} id={"param-box"+i} className="sim-param-box grid-item">
                                    {cat.parameters.map((param, j) => (
                                    handleParameterType(param, j, values, setValues)
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </section>


            <section className="sim-results-box flex-item flex-column nomarge">
                <div id="results-impacts" className="sim-results-head flex-item flex-column">
                    <h3>Impacts pour 2100</h3>
                    <h3 className="rcp-data">Scénario GIEC {results.impacts.RCP}</h3>

                    <div className="tag-container flex-item flex-column">
                        <div className="results-figure tag-temp flex-item" style={{backgroundColor: tempColor}}>
                            +{results.impacts.temperature}°C
                        </div>
                        <p>{results.impacts.temperatureRange}</p>                    
                    </div>
                    <div id="results-impacts-box" className="flex-item">
                        <div className="tag-container flex-item flex-column">
                            <div className="results-figure flex-item">
                                {results.impacts.jours35}j
                            </div>
                            <p>jours à +35°C par an</p>                    
                        </div>
                        <div className="tag-container flex-item flex-column">
                            <div className="results-figure flex-item">
                                {results.impacts.joursSecheresse}j
                            </div>
                            <p>période sans pluie max</p>  
                        </div>
                    </div>
                </div>
                    

                <div id="results-emissions-data" className="flex-item">
                    <div className="flex-item flex-column results-emissions-charts">
                        <div className="chart">
                            <SimBarChart datas={results.emiSecteur}/>
                        </div>
                        <p>Emissions Totales</p>
                    </div>

                    <div className="flex-item flex-column results-emissions-charts">
                        {/* <SimResultsAreaChart datas={results.emiSecteur}/> */}
                        <div className="chart">
                            <Sunburst datas={results.emiSecteurPie}/>  
                        </div>
                        <p>Emissions par Secteur</p>
                    </div>
                </div>

                

                <div id="results-emissions" className="flex-item">
                    <h4>Émissions CO2</h4>
                    <div id="results-emissions-box" className="flex-item">
                        {results.impacts.reductionEmission2030}
                    </div>
                </div>
                         
                <Link to={{pathname: "/results",state: {results: results}}}><button className="sim-init-button green-btn">Voir mes résultats</button></Link>

            </section>
        </div>

        :

        <div id="loader">
            <Loader type="BallTriangle" color="white" height={100} width={100} />
            <div className="hidden">||</div>
            <h4>Initialisation...</h4>
        </div>
 
    )
}

export default Simulator

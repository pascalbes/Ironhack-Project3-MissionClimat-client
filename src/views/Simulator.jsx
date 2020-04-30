/// BASIC
import React, {  useState, useEffect } from 'react'
import Header from "../components/partials/Header";
import "./../styles/simulator.css"
import "./../styles/app.css"

import jsonFile from "../ressources/initialDatas.json"
import { Link } from "react-router-dom"
import Loader from 'react-loader-spinner'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


/// COMPONENTS
import AreaChart from './../components/simulateur/simResultsAreaChart'
import SimNav from "../components/simulateur/simNavBar"
import SimCat from "../components/simulateur/simCategorie"
import SimParamList from "../components/simulateur/simParametreList"
import SimParamSlider from "../components/simulateur/simParametreSlide"
import Sunburst from './../components/simulateur/sunburstChart'
import SimBarChart from './../components/simulateur/simBarChart'

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import api from '../api/APIHandler'

const Simulator = (props) => {

    const [values, setValues] = useState()
    const [results, setResults] = useState() // jsonFile.results
    const [modeExpert, setModeExpert] = useState(false)
    const [visibleOptions, setVisibleOptions] = useState(false);

    console.log("-----------------------------------")
    console.log(values)
    console.log(results)

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

    // Fonction appellée à la première exécution. Permet de :
    //   - créer une spreadsheet si non créée, 
    //   - charger les valeurs de la spreadsheet créée si existante, et les afficher,
    //   - charger les valeurs d'un scénario enregistré, dans le cas d'un appel via url spécifique,

    useEffect(() => {

        console.log("useffect []")

        async function initDatas() {

            var res={}

            // cas où une sheet est déjà en dans le localstorage
            if (localStorage.getItem('idSheet')) {

                const idSheet = localStorage.getItem('idSheet')
                console.log("SHEET ALREADY CREATED, ID:", idSheet)

                //cas où appel normal de la page simulateur
                if (!props.match.params.urlParams) {
                    console.log("appel page simu / récupération données sheet et setvalues")
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
                    console.log('appel normal, vINit')
                    setValues(jsonFile.options.vInit)
                }
            }
        }

        initDatas()
        
        //nettoyage du results de local storage
        if (localStorage.getItem('results')) localStorage.removeItem('results')

    }, [])


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
        console.log("Useffect [valeurs]")
        if (values) {
            console.log("in values")
            var idSheet = localStorage.getItem('idSheet')
            var valuesFormatted = getValuesFormatted(values, jsonFile.options.unit)
            if (idSheet) {
                api.patch("/sheet/update/"+idSheet, {values: valuesFormatted})
                .then(res => {
                    var resTemp = res.data.results
                    resTemp.url= getUrl(values, jsonFile.parameters)
                    //correction des data area pour affichage ok
                    handleAreaData(resTemp.emiSecteurGnl)
                    setResults(resTemp)
                })
                .catch(err => console.log(err))
            }
        }
        else {
            console.log("not in values")
        }
    }, [values])

    function setOneValue(value, index) {
        var newValues=[...values]
        newValues[index][0]=value
        setValues(newValues)
    }

    function tempColor(){

        //version actuelle, en phase avec les jauges

        return (results.impacts.temperature < 1.5) ? 'linear-gradient(to right, #7FFFD4 , #77D9B5)'
        : (results.impacts.temperature >= 1.5 && results.impacts.temperature < 2) ? 'linear-gradient(to right, #F2F230 , #FFC53A)'
        : (results.impacts.temperature >= 2 && results.impacts.temperature < 3) ? 'linear-gradient(to right, #FFB8B8 , #DB7093)'
        : 'linear-gradient(to right, #DA8FFF , #663399)'

        //version initiale, pour du backgroundCOlor
        // const tempColors = ["var(--tempgreen)", "var(--tempyellowgreen)", "var(--tempyellow)", "var(--tempyelloworange)", "var(--temporangered)", "var(--tempred)", "var(--tempredblack)"]
        // return (results.impacts.temperature < 1.5) ? tempColors[0]
        // : (results.impacts.temperature >= 1.5 && results.impacts.temperature < 1.8) ? tempColors[1]
        // : (results.impacts.temperature >= 1.8 && results.impacts.temperature < 2) ? tempColors[2]
        // : (results.impacts.temperature >= 2 && results.impacts.temperature < 2.2) ? tempColors[3]
        // : (results.impacts.temperature >= 2.2 && results.impacts.temperature < 2.5) ? tempColors[4]
        // : (results.impacts.temperature >= 2.5 && results.impacts.temperature < 2.8) ? tempColors[5]
        // : tempColors[6]
    }

    function handleParameterType(cat, param, j, values) {

        //gestion mode expert
        if (!param.data.expert || (param.data.expert && modeExpert)) {

            //gestion type de paramètre
            if (param.type.list) {
                return <SimParamList key={j} data={param.data} value={values[param.data.index]} setOneValue={setOneValue} cat={cat.data}/>
            }
            else if (param.type.slider) {
                return <SimParamSlider key={j} data={param.data} value={values[param.data.index]} setOneValue={setOneValue} cat={cat.data}/>
            }
        }
    }

    function handleInitValues(e) {
        
        var initMode = e.target.value
        var valuesTemp = [];

        if (initMode === "init") {
            valuesTemp=jsonFile.options.vInit
        }
        else if (initMode === "vMin") {
            valuesTemp = jsonFile.options.vMin
        }
        else if (initMode === "1degre5") {
            valuesTemp = jsonFile.options.v15
        }
        else if (initMode === "bau") {
            valuesTemp = jsonFile.options.vBaU
        }
        else if (initMode === "vMax") {
            valuesTemp = jsonFile.options.vMax
        }

        var idSheet = localStorage.getItem('idSheet')
        var valuesFormatted = getValuesFormatted(valuesTemp, jsonFile.options.unit)
        
        api.patch("/sheet/updateonly/"+idSheet, {values: valuesFormatted})
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err))

    }


    function showOptions(e) {
      e.preventDefault();
      setVisibleOptions(true);
    }

    function hideOptions(e) {
      e.preventDefault();
      setVisibleOptions(false);
    }

    function handleAreaData(datas) {
        let dataReversed = [...datas.areaDatas];
        dataReversed.reverse()
        datas.areaDatas = [...dataReversed]

        return datas
    }

    return (
        values && results ?

        <>
        <Header/>
        <div className="sim-page flex-item">
            <section className="sim-container-box">
                <div id="sim-nav-box" className="flex-item flex-column">
                    <h1>Mes mesures pour 2030</h1>
                    <div className="flex-item">
                        <div id="sim-nav-fr">
                            <SimNav data={jsonFile.nav[0]}/>
                        </div>
                        <div id="sim-nav-world">
                            <SimNav data={jsonFile.nav[1]}/>
                        </div>
                        <a href="" id="options" className="sim-nav-category flex-item flex-column" onClick={showOptions}>
                             <div class="sim-nav-category-icon">
                                <span class="sim-nav-category-icon-helper"></span>
                                <img src="../../images/Options.png"></img>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="sim-main-box">
                    {visibleOptions && (
                        <div id="optionsContainer">
                          <div
                            class="optionsContainerBackground"
                            onClick={hideOptions}
                          ></div>
                          <div id="scrollOptions" className=" sim-cat-params-box sticky">
                             <div class="optionsContainerClose"  onClick={hideOptions}>
                              <FontAwesomeIcon icon={faTimes} />
                            </div>
                            <div className="sim-categorie flex-item">
                                <h4 className="sim-categorie-name">Options</h4>
                            </div>
                            <div className="sim-options flex-item flex-column">
                                <div className="sim-option-box">
                                    <h6 className="param-name">Initialisation des paramètres</h6>
                                    <p>Afin de gagner du temps, vous pouvez initialiser l'ensemble des données à des valeurs spécifiques</p>
                                    <form className="sim-option-form flex-item" onChange={e=>handleInitValues(e)}>
                                        <div className="flex-item"><input name="initialisation" value="init" type="radio"></input><label>Réinitialiser</label></div>
                                        <div className="flex-item"><input name="initialisation" value="vMin" type="radio"></input><label>Valeurs Minimales</label></div>
                                        <div className="flex-item"><input name="initialisation" value="1degre5" type="radio"></input><label>Scénario 1.5°C</label></div>
                                        <div className="flex-item"><input name="initialisation" value="bau" type="radio"></input><label>Business as Usual</label></div>
                                        <div className="flex-item"><input name="initialisation" value="vMax" type="radio"></input><label>Valeurs Maximales</label></div>
                                    </form>
                                </div>
                                <div className="sim-option-box">
                                    <h6 className="param-name">Mode Expert</h6>
                                    <p>Le mode expert permet d'accéder à un plus grand nombre de paramètres, pour régler son scénario avec davantage de finesse</p>
                                    <FormControlLabel className="nomarge nopad" onChange={e => setModeExpert(e.target.checked)} value="end" control={<Switch color="Secondary"/>} /><label>Activer</label>
                                </div>
                            </div>
                        </div> 
                      </div>
                    )}
                    {jsonFile.categories.map((cat, i) => (
                        <div className="sim-cat-params-box">
                            {/* <div className="hidden bigger" id={"cat"+cat.data.index}>||</div>< */}
                            <SimCat key={cat.data.index} data={cat.data} results={results.jaugeDatas[i]}  />
                            <div key={"p"+i} id={"param-box"+i} className="sim-param-box grid-item">
                                {cat.parameters.map((param, j) => (
                                handleParameterType(cat, param, j, values, setValues)
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="sim-results-box flex-item flex-column">
                <div id="results-top-box" className="flex-item flex-column">
                    <h1>Ma projection mondiale</h1>
                    <div id="results-impacts-box" className="flex-item">
                            <p className="results-title n1">Températures</p>
                            <div className="results-figure n2 flex-item" style={{backgroundImage:tempColor(), color:'white'}}>
                                +{results.impacts.temperature}°C
                            </div>
                            <p className="results-legend n3">Hausse moy. mondiale / 2100 (de {results.impacts.temperatureRange})</p>
                            <p className="results-title n4">Scénario GIEC</p>
                            <div className="results-figure n5 flex-item">
                                {results.impacts.RCP}
                            </div>
                            <p className="results-legend n6">Scénario GIEC de vos mesures (<a href="https://leclimatchange.fr/les-elements-scientifiques/" target="_blank" style={{fontWeight:"bold", color:"#DB7093"}}>Plus d'infos</a>)</p>
                            <p className="results-title n7">Empreinte carbone</p>
                            <div className="results-figure n8 flex-item" style={{backgroundColor:'#b0e0e6'}}>
                                {results.impacts.empreinteMonde}t
                            </div>
                            <p className="results-legend n9">tCO2e / an / hab. en 2030</p>
                    </div>
                </div>
                
                <div id="results-bottom-box" className="flex-item flex-column">
                    <div id="results-emissions" className="flex-item flex-column">
                        <h1>Ma projection française</h1>
                        <div id="results-impacts-box2" className="flex-item">
                            <p className="results-title b1">Évolution émissions</p>
                            <div className="results-figure b2 flex-item" style={{backgroundColor:'#40E0D0', color:'#163E59'}}>
                                {results.impacts.reductionEmission2030}
                            </div>
                            <p className="results-legend b3">Entre 2020 et 2030</p>
                            
                            <p className="results-title b4">Émissions annuelles</p>
                            <div className="results-figure b5 flex-item flex-column" style={{backgroundColor:'#40E0D0', color:"#163E59"}}>
                                <p>{results.impacts.emissionMoy}</p>
                                <p className="figure-unit">MtCO2</p>
                            </div>
                            <p className="results-legend b6">Entre 2020 et 2030</p>                    
                        
                            <p className="results-title b7">Empreinte carbone</p>
                            <div className="results-figure b8 flex-item" style={{backgroundColor:'#b0e0e6'}}>
                                {results.impacts.empreinteFr}t
                            </div>
                            <p className="results-legend b9">tCO2e / an / hab. en 2030</p> 
                        </div>
                    </div>
                

                    <div id="results-emissions-charts-container">

                        <div className="chart g1">
                            <AreaChart datas={results.emiSecteurGnl}/>
                        </div>
                        <p className="g2">Emissions Totales</p>
                        {/* 
                        BAR CHART
                        <div className="flex-item flex-column results-emissions-charts">
                            <div className="chart">
                                <SimBarChart datas={results.emiSecteur}/>
                            </div>
                            <p>Emissions Totales</p>
                        </div> */}

                        <div className="chart g3">
                            <Sunburst datas={results.emiSecteurPie}/>  
                        </div>
                        <p className="g4">Par Secteur / 2030</p>  

                    </div>

                    <div id="results-button" className="flex-item">
                        <Link to={{pathname: "/results",state: {results: results}}}><button className="blue-btn">Résultats complets</button></Link>
                    </div>

                </div>
                         
            </section>
        </div>
        </>

        :

        <div id="loader">
            <Loader type="BallTriangle" color="white" height={100} width={100} />
            <div className="hidden">||</div>
            <h3 style={{color:'#7fffd4'}}>Initialisation</h3>
            <h4 className="light-text">Nous préparons votre environnement de travail.</h4>
            <h4 className="light-text">L'attente ne devrait pas durer plus de 5 secondes</h4>
        </div>
 
    )
}

export default Simulator

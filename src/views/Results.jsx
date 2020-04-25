import React, { useState, setState, useContext} from 'react'
import Header from "../components/partials/Header";
import { faLink, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import jsonFile from "../ressources/initialDatas.json"

import AreaChart from './../components/simulateur/simResultsAreaChart'
import GenLinearChart from './../components/resultats/resGenLinearChart'
import SectorLinearChart from './../components/resultats/resSectorLinearChart'
import SimBarChart from './../components/simulateur/simBarChart'
import Sunburst from './../components/simulateur/sunburstChart'

import './../styles/results.css'
import "./../styles/simulator.css"
import { Link } from 'react-router-dom'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, EmailIcon, } from "react-share";

import APIHandler from "../api/APIHandler";
import Popup from "reactjs-popup";
import Pdf from "react-to-pdf";




const Results = (props) => {

    // console.log(props)


    const [isNew, setIsNew] = useState(true)
    const [scenarioExists, setScenarioExists] = useState("")
    const [textArea, setTextArea] = useState()

    var results={}
    if (localStorage.getItem('results')) {
        results = JSON.parse(localStorage.getItem('results'))

    }
    else {
        results = props.location.state.results
        localStorage.setItem('results', JSON.stringify(results))
    }

    const checkScope = (categories) => {
        var frenchCategories = [];
        categories.map((categorie) => {
            if (categorie.data.scope !== ("Répartition mondiale")) {
                return frenchCategories.push(categorie)}
        })
        return frenchCategories
    }
// travailler sur paramètre et les données à lui envoyer

    // const graphParam = [];

    // function setGraphParam() {
    //     checkScope(jsonFile.categories).map((categorie, i) => {
    //         //envoyer le bon graphe à la bonne catégorie
    //         var resultsTemp = {}

    //         if (categorie.data.name === "Transports de personnes") {
    //             resultsTemp=results.emiParSecteur.transports
    //         }

    //         graphParam.push(<SectorLinearChart key={i} data={categorie} results={resultsTemp}/>)
    //     });
    //     graphParam.splice(-2,2);
    // }

    // setGraphParam();

    // console.log("the results =>", results)

    const [resultsToSave, setResultsToSave] = useState({})

    resultsToSave.url = results.url

    // const saveResults = async e => {
    //     e.preventDefault();
    //     try {
    //     var rv = await APIHandler.patch('users/save', {resultsToSave}); 
    //     setScenarioExists(rv.data.msg, console.log(scenarioExists))
    //     return  console.log(rv.data.msg)
    //     }
    //     catch (err) {
    //         console.error(err);
    //       }
    // }

    function tempColor(){
        const tempColors = ["var(--tempgreen)", "var(--tempyellowgreen)", "var(--tempyellow)", "var(--tempyelloworange)", "var(--temporangered)", "var(--tempred)", "var(--tempredblack)"]
        return (results.impacts.temperature < 1.5) ? tempColors[0]
        : (results.impacts.temperature >= 1.5 && results.impacts.temperature < 1.8) ? tempColors[1]
        : (results.impacts.temperature >= 1.8 && results.impacts.temperature < 2) ? tempColors[2]
        : (results.impacts.temperature >= 2 && results.impacts.temperature < 2.2) ? tempColors[3]
        : (results.impacts.temperature >= 2.2 && results.impacts.temperature < 2.5) ? tempColors[4]
        : (results.impacts.temperature >= 2.5 && results.impacts.temperature < 2.8) ? tempColors[5]
        : tempColors[6]
    }

    function handleImageEurope() {
        if (results.impacts.RCP =="RCP 2.6") {
            return './images/europeRCP26.png'
        }
        if (results.impacts.RCP =="RCP 4.5") {
            return './images/europeRCP45.png'
        }
        if (results.impacts.RCP =="RCP 6.0") {
            return './images/europeRCP60.png'
        }
        if (results.impacts.RCP =="RCP 8.5") {
            return './images/europeRCP85.png'
        }
    }

    function handleImageWorld() {
        if (results.impacts.RCP =="RCP 2.6") {
            return './images/worldRCP26.png'
        }
        if (results.impacts.RCP =="RCP 4.5") {
            return './images/worldRCP45.png'
        }
        if (results.impacts.RCP =="RCP 6.0") {
            return './images/worldRCP60.png'
        }
        if (results.impacts.RCP =="RCP 8.5") {
            return './images/worldRCP85.png'
        }
    }

    function handleEvolution(sector) {
        let datas = results.emiSecteurGnl.data.data;
        let evolution = Math.round((datas[datas.length-1][sector]-datas[0][sector])/datas[0][sector]*10000)/100
        return evolution >= 0 ? "+" + evolution + "%" : evolution  + "%" 
    }

    //légende cartes températures
    const mapLegendInfos = [["#FFF5CC", "de 0 à 0,5°C"],
    ["#FFF5CC", "de 0 à 0,5°C"],
    ["#FFE099", "de 0,5 à 1°C"],
    ["#FFCB66", "de 1 à 1,5°C"],
    ["#FFB433", "de 1,5 à 2°C"],
    ["#FF8C33", "de 2 à 3°C"],
    ["#FF5500", "de 3 à 4°C"],
    ["#E6281E", "de 4 à 5°C"],
    ["#BF0000", "de 5 à 7°C"],
    ["#8C0000", "de 7 à 9°C"],
    ["#6C0000", "de 9 à 11°C"],
    ["#6E0046", "plus de 11°C"]]

    const areaDatas = [...results.emiSecteurPie.data01.reverse()];
    results.emiSecteurPie.data01.reverse();

    function copyUrl() {
        if (textArea) {
            console.log(textArea)
            textArea.select()
            document.execCommand('copy');
            alert("Url copied to clipboard")
        }
    }

    function handleInnerHTML(text) {
        return {__html: text};
    }

    // function downloadModel() {
    //     2020-04-09_Scenario1.5.xlsx
    // }



    return (

      
        


        <div className="results-page flex-item flex-column">
            <Header/>
            <article id="hero-article">
                <div class="flex-item full-width">

                    <div class="flex-column">
                        <a href="#res-synthese">
                            <div className="chapter-selection">            
                            <img src="../../images/results/fiche synthèse - blanc.svg" />
                            <br />
                            <span>Synthèse</span>
                            </div>
                        </a>
                    </div>

                    <div class="flex-column">
                        <a href="#res-emi-fr">
                            <div className="chapter-selection">            
                            <img src="../../images/results/nuage CO2 - blanc.svg" />
                            <br />
                            <span>Emissions françaises</span>
                            </div>
                        </a>
                    </div>

                    <div class="flex-column">
                        <a href="#res-emi-world">
                            <div className="chapter-selection">            
                            <img src="../../images/results/emission monde - blanc.svg" />
                            <br />
                            <span>Emissions mondiales</span>
                            </div>
                        </a>
                    </div>

                    <div class="flex-column">
                        <a href="#res-impacts">
                            <div className="chapter-selection">            
                            <img src="../../images/results/impact - blanc.svg" />
                            <br />
                            <span>Impacts</span>
                            </div>
                        </a>
                    </div>
                    
                </div>

            
                <section id="res-synthese" className="flex-item flex-column">

                    <h1>Synthèse</h1>
                    
                    <div className="flex-item flex-column">
                        
                        <div id="res-synthese-indicator" className="flex-item">
                            <div className="tag-container flex-item flex-column">
                                <p className="results-title">Températures</p>
                                <div className="results-figure flex-item" style={{backgroundColor:tempColor(), color:'white'}}>
                                    +{results.impacts.temperature}°C
                                </div>
                                <p className="results-legend">Hausse moy. mondiale / 2100 (de {results.impacts.temperatureRange})</p>                    
                            </div>
                            <div className="tag-container flex-item flex-column">
                                <p className="results-title">Évolution émissions</p>
                                <div className="results-figure flex-item" style={{backgroundColor:'#40E0D0', color:'#163E59'}}>
                                    {results.impacts.reductionEmission2030}
                                </div>
                                <p className="results-legend">Entre 2020 et 2030</p>                    
                            </div>
                        </div> 

                        <p>"Peut mieux faire !"</p>

                        <div id="res-synthese-buttons" className="flex-item">
                            
                            <div><button onClick={copyUrl}><FontAwesomeIcon icon={faLink}/></button></div>
                            
                            <div><a href='./2020-04-09_Scenario1.5.xlsx' download><FontAwesomeIcon icon={faDownload}/></a></div>

                            <EmailShareButton url={results.url} className="left-btn" subject="Mission Climat : mon plan climat pour 2030"><EmailIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"#34244E"}/></EmailShareButton>

                            <FacebookShareButton url={results.url} className="left-btn" quote="Voilà mon plan climat pour 2030 ! Et vous ?" hashtag="#missionclimat #ecologie #climat"><FacebookIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"#34244E"}/></FacebookShareButton>

                            <TwitterShareButton url={results.url} className="left-btn" title="Mission Climat : mon plan climat pour 2030" via="Mission Climat" hashtags={["missionclimat", "climat", "ecologie", "citoyen", "action"]}><TwitterIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"#34244E"}/></TwitterShareButton>

                            <RedditShareButton url={results.url} className="left-btn" title="Mission Climat : Mon plan climat pour 2030"><RedditIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"#34244E"}/></RedditShareButton>

                            <LinkedinShareButton url={results.url} className="left-btn" title="Mission Climat : Mon plan climat pour 2030" summary="Vous aussi, faites votre plan pour la France !" source="Mission Climat"><LinkedinIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"#34244E"}/></LinkedinShareButton>
                        </div> 

                    </div>
                
                </section>
            </article>

            {/* *************************
            ********************FRANCE
            ************************* */}

            <article id="res-emi-fr" className="flex-item flex-column">

                {/* Titre grande partie / nav */}
                <h1>Emissions françaises</h1> 

                {/* Titre sous partie */}
                <h2>Emissions totales</h2>
                <p>{results.emiFrance.intro}</p>

                <div className="flex-item flex-column res-emi-fr-container">

                    {/* Titre graphe */}
                    {/* <h3>{results.emiFrance.sansRupture.graph.data.title}</h3> */}
                    <p className="chart-short-desc light-text">Ce graphique représente l'évolution des émissions sectorielles pour la France de 2020 à 2030, fonction de vos mesures.</p>
                    <div className="flex-item res-chart-container">
                        <div className="res-chart">
                            {/* <AreaChart datas={results.emiFrance.sansRupture.graph}/> */}
                        </div>
                        <div className="res-chart-infos flex-item flex-column">
                            {/* <p>{results.emiFrance.sansRupture.text}</p> */}
                            <div className="res-chart-legend">
                                <table>
                                    <tbody>
                                    {areaDatas.map((data,i) => (
                                        <tr>
                                            <td><div className="legend-point" style={{backgroundColor:data.color}}></div></td>
                                            <td>
                                                <p className="bold-text">{data.name}</p>
                                                <p className="light-text">{Math.round(data.value)} MtCO2 / Evolution : {handleEvolution(data.name)}</p>
                                            </td>
                                        </tr>
                                    ))}
                                        
                                    </tbody>
                                </table>
                                <p className="res-chart-source">Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-item flex-column res-emi-fr-container">

                    {/* Titre graphe */}
                    {/* <h3>{results.emiFrance.avecRupture.graph.data.title}</h3> */}
                    <p className="chart-short-desc light-text">Ce graphique représente l'évolution des émissions sectorielles pour la France de 2020 à 2030, fonction de vos mesures, avec rupture.</p>
                    <div className="flex-item res-chart-container">
                        <div className="res-chart">
                            {/* <AreaChart datas={results.emiFrance.avecRupture.graph}/> */}
                        </div>
                        <div className="res-chart-infos flex-item flex-column">
                            {/* <p>{results.emiFrance.avecRupture.text}</p> */}
                            <div className="res-chart-legend">
                                <table>
                                    <tbody>
                                    {areaDatas.map((data,i) => (
                                        <tr>
                                            <td><div className="legend-point" style={{backgroundColor:data.color}}></div></td>
                                            <td>
                                                <p className="bold-text">{data.name}</p>
                                                <p className="light-text">{Math.round(data.value)} MtCO2 / Evolution : {handleEvolution(data.name)}</p>
                                            </td>
                                        </tr>
                                    ))}
                                        
                                    </tbody>
                                </table>
                                <p className="res-chart-source">Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-item flex-column res-emi-fr-container">
                    <h3>Emissions sectorielles françaises en 2030</h3>
                    <p className="chart-short-desc light-text">Ce graphique représente les émissions sectorielles pour la France en 2030, fonction de vos mesures. Pour chaque secteurs, vous retrouvez également les émissions des sous-secteurs</p>
                    <div className="flex-item res-chart-container">
                        <div className="res-chart">
                            <Sunburst datas={results.emiSecteurPie}/>
                        </div>
                        <div className="res-chart-infos flex-item flex-column">
                            <div className="res-chart-legend">
                                <table>
                                    <tbody>
                                    {results.emiSecteurPie.data01.map((data,i) => (
                                        <tr>
                                            <td><div className="legend-point" style={{backgroundColor:data.color}}></div></td>
                                            <td>
                                                <p className="bold-text">{data.name}</p>
                                                <p className="light-text">{Math.round(data.value)} MtCO2</p>
                                            </td>
                                        </tr>
                                    ))}
                                        
                                    </tbody>
                                </table>
                                <p className="res-chart-source">Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page.</p>
                            </div>    
                        </div>
                    </div>
                </div>

                {/* Titre sous partie */}
                <h2>Secteur du Bâtiment</h2>
                {/* <p>{results.dataFrance.batiment.intro}</p> */}

                <div className="flex-item flex-column res-emi-fr-container">
                    {/* <h2>{results.dataFrance.batiment.perf.graph.data.title}</h2> */}
                    <p className="chart-short-desc light-text">Ce graphique représente le nombre de logements par type de performance</p>
                    {/* <p className="bold-text" dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.batiment.perf.text)}></p> */}
                    <div className="flex-item res-chart-container">
                        {/* <p>{results.dataFrance.batiment.perf.text}</p> */}
                        <div className="res-chart">
                        {/* <AreaChart datas={results.dataFrance.batiment.perf.graph}/> */}
                        </div>
                        <div className="res-chart-infos flex-item flex-column">
                            <div className="res-chart-legend">
                                <table>
                                    {/* légende à ajouter */}
                                </table>
                            </div>
                            <p className="res-chart-source">Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-item flex-column res-emi-fr-container">
                    {/* <h2>{results.dataFrance.batiment.chauffage.graph.data.title}</h2> */}
                    <p className="chart-short-desc light-text">Ce graphique représente le nombre de logements par type de performance</p>
                    {/* <p className="bold-text" dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.batiment.chauffage.text)}></p> */}
                    <div className="flex-item res-chart-container">
                        {/* <p>{results.dataFrance.batiment.chauffage.text}</p> */}
                        <div className="res-chart">
                        {/* <AreaChart datas={results.dataFrance.batiment.chauffage.graph}/> */}
                        </div>
                        <div className="res-chart-infos flex-item flex-column">
                            <div className="res-chart-legend">
                                <table>
                                    {/* légende à ajouter */}
                                </table>
                            </div>
                            <p className="res-chart-source">Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page.</p>
                        </div>
                    </div>
                </div>

            </article>

{/* *************************
********************MONDE
************************* */}

            {/* <article id="res-emi-world" className="flex-item flex-column">

                <h1>Emissions Mondiales</h1>

                <div className="flex-item flex-column res-emi-fr-container">
                    <h2>Evolution des émissions</h2>
                    <p className="chart-short-desc light-text">Ce graphique représente l'évolution des émissions mondiales de 2020 à 2030, fonction de vos mesures.</p>
                    <div className="flex-item res-chart-container">
                        <div className="res-chart">
                            <GenLinearChart datas={results.emiMonde}/>
                        </div>
                        <div className="res-chart-infos flex-item flex-column">
                            <div className="res-chart-legend">
                                <p>Légende</p>
                                <table>
                                    
                                </table>
                                <p className="res-chart-source">Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article> */}

            <article id="res-impacts" className="flex-item flex-column">

                <h1>Températures</h1>

                <div className="flex-item flex-column res-emi-fr-container">
                    <h2>Augmentation de températures en Europe</h2>
                    <p className="chart-short-desc light-text">Cette carte représente l'évolution des températures, en Europe, entre l'ère pré-industrielle et 2100, pour le scénario du GIEC {results.impacts.RCP}</p>
                    <div className="flex-item res-chart-container">
                        <div className="res-chart">
                            <img src={handleImageEurope()}/>
                        </div>
                        <div className="res-chart-infos flex-item flex-column">
                            <div className="res-chart-legend">
                                <div className="flex-item">
                                    {mapLegendInfos.map((data,i) => (
                                        <div className="flex-item">
                                            <div className="legend-point" style={{backgroundColor:data[0]}}></div>
                                            <p className="light-text">{data[1]}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="res-chart-source">Source des données : <br></br>Ces cartes ont été générées à partir du site KNMI Climate Explorer <a href="https://climexp.knmi.nl/plot_atlas_form.py" style={{fontWeight:"bold", color:"#DB7093"}}>(lien)</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-item flex-column res-emi-fr-container">
                    <h2>Augmentation de températures dans le Monde</h2>
                    <p className="chart-short-desc light-text">Cette carte représente l'évolution des températures, dans le Monde, entre l'ère pré-industrielle et 2100, pour le scénario du GIEC {results.impacts.RCP}</p>
                    <div className="flex-item res-chart-container">
                        <div className="res-chart">
                            <img src={handleImageWorld()}/>
                        </div>
                        <div className="res-chart-infos flex-item flex-column">
                            <div className="res-chart-legend">
                                <div className="flex-item">
                                    {mapLegendInfos.map((data,i) => (
                                        <div className="flex-item">
                                            <div className="legend-point" style={{backgroundColor:data[0]}}></div>
                                            <p className="light-text">{data[1]}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="res-chart-source">Source des données : <br></br>Ces cartes ont été générées à partir du site KNMI Climate Explorer <a href="https://climexp.knmi.nl/plot_atlas_form.py" style={{fontWeight:"bold", color:"#DB7093"}}>(lien)</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </article>

            <form>
                <textarea
                        ref={(textarea) => setTextArea(textarea)}
                        value={results.url}
                        // style={{visibility:'hidden'}}
                    />
            </form>
        
        </div>









    )
}

export default Results


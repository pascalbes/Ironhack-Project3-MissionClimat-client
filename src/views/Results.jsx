import React, { useState, setState, useContext} from 'react'
import Header from "../components/partials/Header";
import { faLink, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ChartContainer from './../components/resultats/chartContainer'

import './../styles/results.css'
import "./../styles/simulator.css"
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, EmailIcon, } from "react-share";

import Popup from "reactjs-popup";

const Results = (props) => {

    const [textArea, setTextArea] = useState()

    var results={}
    if (localStorage.getItem('results')) {
        results = JSON.parse(localStorage.getItem('results'))

    }
    else {
        results = props.location.state.results
        localStorage.setItem('results', JSON.stringify(results))
    }

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

    

    //légende cartes températures
    const mapLegendInfos = [["#FFF5CC", "de 0 à 0,5°C"],
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

    function areaLegend(datas) {
        
        let dataValues = datas.data.data
        
        datas.areaDatas.map(data => {
            data.subText = dataValues[dataValues.length-1][data.dataKey] + " " + datas.data.yTitle + " / Evolution : "
            let evolution = Math.round((dataValues[dataValues.length-1][data.dataKey]-dataValues[0][data.dataKey])/dataValues[0][data.dataKey]*100)
            evolution >= 0 ? data.subText += "+" + evolution + "%" : data.subText += evolution  + "%" 
            return data
        })

        let dataReversed = [...datas.areaDatas];
        dataReversed.reverse()

        return dataReversed
    }

    function pieLegend(datas) {

        datas.data01.map(data => {
            data.dataKey = data.name
            data.subText = data.value + " MtCO2"
            return data
        })

        return datas.data01

    }

    console.log(results)

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
                <div className="res-title-box">
                    <h2>Emissions totales</h2>
                    <p dangerouslySetInnerHTML={handleInnerHTML(results.emiFrance.intro)}></p>
                </div>

                <ChartContainer 
                    title = {results.emiFrance.total.graph.data.title}
                    subtitle = "Ce graphique représente l'évolution des émissions sectorielles pour la France de 2020 à 2030, fonction de vos mesures. sans rupture."
                    graphData = {results.emiFrance.total.graph}
                    graphType = "CompoChart"
                    graphText = {results.emiFrance.total.text}
                    legendData = {results.emiFrance.total.graph.graphDatas}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />

                <ChartContainer 
                    title = {results.emiFrance.sansRupture.graph.data.title}
                    subtitle = "Ce graphique représente l'évolution des émissions sectorielles pour la France de 2020 à 2030, fonction de vos mesures. sans rupture."
                    graphData = {results.emiFrance.sansRupture.graph}
                    graphType = "AreaChart"
                    graphText = {results.emiFrance.sansRupture.text}
                    legendData = {areaLegend(results.emiFrance.sansRupture.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />

                <ChartContainer 
                    title = {results.emiFrance.avecRupture.graph.data.title}
                    subtitle = "Ce graphique représente l'évolution des émissions sectorielles pour la France de 2020 à 2030, fonction de vos mesures. avec rupture."
                    graphData = {results.emiFrance.avecRupture.graph}
                    graphType = "AreaChart"
                    graphText = {results.emiFrance.avecRupture.text}
                    legendData = {areaLegend(results.emiFrance.avecRupture.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                <ChartContainer 
                    title = {"Emissions sectorielles françaises en 2030"}
                    subtitle = "Ce graphique représente les émissions sectorielles pour la France en 2030, fonction de vos mesures. Pour chaque secteurs, vous retrouvez également les émissions des sous-secteurs."
                    graphData = {results.emiSecteurPie}
                    graphType = "Sunburst"
                    graphText = {"TBD"}
                    legendData = {pieLegend(results.emiSecteurPie)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  


                {/* Titre sous partie */}
                <div className="res-title-box">
                    <h2>Bâtiment</h2>
                    <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.batiment.intro)}></p>
                </div>

                <ChartContainer 
                    title = {results.dataFrance.batiment.perf.graph.data.title}
                    subtitle = "Ce graphique représente le nombre de logements par type de performance."
                    graphData = {results.dataFrance.batiment.perf.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.batiment.perf.text}
                    legendData = {areaLegend(results.dataFrance.batiment.perf.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                <ChartContainer 
                    title = {results.dataFrance.batiment.chauffage.graph.data.title}
                    subtitle = "Ce graphique représente le nombre de logements par type de chauffage."
                    graphData = {results.dataFrance.batiment.chauffage.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.batiment.chauffage.text}
                    legendData = {areaLegend(results.dataFrance.batiment.chauffage.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                {/* Titre sous partie */}
                <div className="res-title-box">
                    <h2>Transports</h2>
                    <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.transports.intro)}></p>
                </div>

                <ChartContainer 
                    title = {results.dataFrance.transports.distance.graph.data.title}
                    subtitle = "Ce graphique représente la distance type de transport."
                    graphData = {results.dataFrance.transports.distance.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.transports.distance.text}
                    legendData = {areaLegend(results.dataFrance.transports.distance.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                <ChartContainer 
                    title = {results.dataFrance.transports.emissions.graph.data.title}
                    subtitle = "Ce graphique représente les émissions par type de transport."
                    graphData = {results.dataFrance.transports.emissions.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.transports.emissions.text}
                    legendData = {areaLegend(results.dataFrance.transports.emissions.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                {/* Titre sous partie */}
                <div className="res-title-box">
                    <h2>Agriculture</h2>
                    <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.agriculture.intro)}></p>
                </div>

                <ChartContainer 
                    title = {results.dataFrance.agriculture.parcelles.graph.data.title}
                    subtitle = "Ce graphique représente la distance type de transport."
                    graphData = {results.dataFrance.agriculture.parcelles.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.agriculture.parcelles.text}
                    legendData = {areaLegend(results.dataFrance.agriculture.parcelles.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                <ChartContainer 
                    title = {results.dataFrance.agriculture.emissions.graph.data.title}
                    subtitle = "Ce graphique représente les émissions par type de transport."
                    graphData = {results.dataFrance.agriculture.emissions.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.agriculture.emissions.text}
                    legendData = {areaLegend(results.dataFrance.agriculture.emissions.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  



                {/* Titre sous partie */}
                <div className="res-title-box">
                    <h2>Consommation</h2>
                    <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.conso.intro)}></p>
                </div>

                <ChartContainer 
                    title = {results.dataFrance.conso.quantites.graph.data.title}
                    subtitle = "Ce graphique représente la distance type de transport."
                    graphData = {results.dataFrance.conso.quantites.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.conso.quantites.text}
                    legendData = {areaLegend(results.dataFrance.conso.quantites.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                <ChartContainer 
                    title = {results.dataFrance.conso.emissions.graph.data.title}
                    subtitle = "Ce graphique représente les émissions par type de transport."
                    graphData = {results.dataFrance.conso.emissions.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.conso.emissions.text}
                    legendData = {areaLegend(results.dataFrance.conso.emissions.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                {/* Titre sous partie */}
                <div className="res-title-box">
                    <h2>Energie</h2>
                    <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.energie.intro)}></p>
                </div>

                <ChartContainer 
                    title = {results.dataFrance.energie.facteurs.graph.data.title}
                    subtitle = "Ce graphique représente la distance type de transport."
                    graphData = {results.dataFrance.energie.facteurs.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.energie.facteurs.text}
                    legendData = {areaLegend(results.dataFrance.energie.facteurs.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  

                <ChartContainer 
                    title = {results.dataFrance.energie.emissions.graph.data.title}
                    subtitle = "Ce graphique représente les émissions par type de transport."
                    graphData = {results.dataFrance.energie.emissions.graph}
                    graphType = "AreaChart"
                    graphText = {results.dataFrance.energie.emissions.text}
                    legendData = {areaLegend(results.dataFrance.energie.emissions.graph)}
                    sourceData = "Source des données : modèle de calcul des émissions de BL évolution. Le fichier de ce modèle est téléchargeable sur cette même page."
                />  




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
                                <p className="res-chart-source">Source des données : <br></br>Ces cartes ont été générées à partir du site KNMI Climate Explorer <a href="https://climexp.knmi.nl/plot_atlas_form.py" style={{fontWeight:"bold", color:"#DB7093"}} target="_blank">(lien)</a></p>
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
                                <p className="res-chart-source">Source des données : <br></br>Ces cartes ont été générées à partir du site KNMI Climate Explorer <a href="https://climexp.knmi.nl/plot_atlas_form.py" style={{fontWeight:"bold", color:"#DB7093"}} target="_blank">(lien)</a></p>
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


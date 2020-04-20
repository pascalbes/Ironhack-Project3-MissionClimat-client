import React, { useState, setState, useContext} from 'react'
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
import "./../styles/form.css"
import "./../styles/simulator.css"
import { Link } from 'react-router-dom'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, EmailIcon, } from "react-share";

import APIHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";
import Popup from "reactjs-popup";
import Pdf from "react-to-pdf";




const Results = (props) => {

    // console.log(props)

    const userContext = useContext(UserContext);
    let { currentUser } = userContext;

    const [isNew, setIsNew] = useState(true)
    const [scenarioExists, setScenarioExists] = useState("")

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

    const graphParam = [];

    function setGraphParam() {
        checkScope(jsonFile.categories).map((categorie, i) => {
            //envoyer le bon graphe à la bonne catégorie
            var resultsTemp = {}

            if (categorie.data.name === "Transports de personnes") {
                resultsTemp=results.emiParSecteur.transports
            }
            // else if (categorie.data.name == "Énergie") {
            //     resultsTemp=results.emiParSecteur.energie
            // }
            // else if (categorie.data.name == "Agriculture et alimentation") {
            //     resultsTemp=results.emiParSecteur.agriculture
            // }
            // else if (categorie.data.name == "Logement") {
            //     resultsTemp=results.emiParSecteur.batiments
            // }

            graphParam.push(<SectorLinearChart key={i} data={categorie} results={resultsTemp}/>)
        });
        graphParam.splice(-2,2);
    }

    setGraphParam();

    // console.log("the results =>", results)

    const [resultsToSave, setResultsToSave] = useState({})

    resultsToSave.url = results.url

    const saveResults = async e => {
        e.preventDefault();
        try {
        var rv = await APIHandler.patch('users/save', {resultsToSave}); 
        setScenarioExists(rv.data.msg, console.log(scenarioExists))
        return  console.log(rv.data.msg)
        }
        catch (err) {
            console.error(err);
          }
    }

    const editResults = async e => {
        e.preventDefault();
        try {
            var rv = await APIHandler.patch('users/edit-scenario', {resultsToSave});
            return setScenarioExists(rv.data.msg, console.log(scenarioExists));

        }
        catch (err) {
            console.error(err);
          }
    }

    

    const onChange = async e => {
        setResultsToSave({...resultsToSave, [e.target.name]: e.target.value });
    }

    function handleTempColor(){
        return "color"
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

    const toggleNew = async e => {
        if( e.target.value === "new") return setIsNew(true);
        if (e.target.value === "edit") return setIsNew(false);
    }

    console.log(props.location.state.results.url)
    // console.log(currentUser)

    // var [descriptionToEdit, setDescriptionToEdit] = useState("")

    // function findTheRightDescription(results) {
    //     console.log("it works")
    //     console.log(currentUser.scenarios)
    //     console.log(results)
    //     var arrayUnique
    //     arrayUnique = []
    //     arrayUnique = currentUser.scenarios.filter(scenario => scenario.name === results.name)
    //     console.log(arrayUnique)
    //     console.log(arrayUnique[0].description)
    //     if (arrayUnique[0].description.length === 0) {
    //         return setDescriptionToEdit("")
    //     } else {return setDescriptionToEdit(arrayUnique[0].description)}

    // }


    return (
        <div className="results-page flex-item flex-column">
            <article className="hero-results flex-item flex-column">
                <div className="hidden"></div>
                <div className="results-box light grid-item border-btn">
                    <div className="results-left flex-item flex-column">
                        <h3 className="nomarge nopad">Mes résultats</h3>
                        <div id="results-impacts" className="sim-results-head-results flex-item flex-column">
                            <h5>Impacts pour 2100<br/><span className="rcp-data">Scénario GIEC {results.impacts.RCP}</span></h5>
                            <div id="results-impacts-box" className="flex-item flex-column">
                                <div className="tag-container flex-item">
                                    <div className="results-figure-results tag-temp flex-item" style={{boxShadow: `inset 0 0 50px mintcream, inset 20px 0 80px ${tempColor()}, inset -20px 0 80px ${tempColor()}, inset 20px 0 300px ${tempColor()}, inset -20px 0 300px ${tempColor()}`}}>
                                        +{results.impacts.temperature}°C
                                    </div>
                                    <p>{results.impacts.temperatureRange}</p>                    
                                </div>
                                <div className="tag-container flex-item">
                                    <div className="results-figure-results flex-item">
                                        {results.impacts.jours35}j
                                    </div>
                                    <p>jours à +35°C par an</p>                    
                                </div>
                                <div className="tag-container flex-item">
                                    <div className="results-figure-results flex-item">
                                        {results.impacts.joursSecheresse}j
                                    </div>
                                    <p>période sans pluie max</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="results-data flex-item flex-column">
                        <div className="results-data-sunburst">
                            <Sunburst datas={results.emiSecteurPie}/>
                            <p>Émissions par secteur</p>
                        </div>
                    </div>
                    <div className="results-data flex-item flex-column">
                        <div className="results-data-area">
                            <AreaChart datas={results.emiSecteur}/>
                            <p>Émissions par secteur et année</p>
                        </div>
                    </div>
                </div>
                <div className="results-btns flex-item">
                    <div className="flex-item">
                    <button className="green-btn right-btn"><Link to="/simulator">Retour</Link></button>
                        
                        <Popup

                        trigger={<button className="green-btn right-btn">Sauvegarder</button>}
                        modal
                        closeOnEscape
                        >
                        {currentUser ? 
                        <div className="modal-div">
                        <form className="new-or-edit" onChange={toggleNew}>
                            <div>
                            <label htmlFor="new">New</label>
                            <input type="radio" id="new" name="toggle" value="new" defaultChecked></input>
                            </div>
                            
                            <div>
                            <label htmlFor="edit">Edit</label>
                            <input type="radio" id="edit" name="toggle" value="edit"></input>
                            </div>
                        </form>
                        
                            
                            {isNew? 
                            
                            <form className="form-popup" onChange={onChange} onSubmit={saveResults}>
                            <label htmlFor="name">Nom du scénario</label>
                            <input name="name" id="name" type="text"/>
                            <label htmlFor="description">Description</label>
                            <textarea className="textarea" name="description" id="description" type="textarea"/>
                            <p className="msg-existe-déjà">{scenarioExists}</p>
                            <button className="green-btn right-btn">Sauvegarder</button>
                            </form>
                            
                            :

                            <form className="form-popup" onChange={onChange} onSubmit={editResults}>
                                <label htmlFor="name">Nom du scénario</label>
                                <select 
                                    name="name" 
                                    id="name" 
                                    >
                                        <option value="Choisissez"></option>
                                    {
                                        currentUser.scenarios.map((scenario, i) => (
                                            <option key={i} value={scenario.name}>{scenario.name}</option>
                                        ))
                                    }
                                </select>
                                <label htmlFor="description">Nouvelle description</label>
                                <textarea className="textarea" name="description" id="description" type="textarea"/>
                                <p className="msg-existe-déjà">{scenarioExists}</p>
                                <button className="green-btn right-btn">Sauvegarder</button>
                            </form>

                            }
                            
                        
                            </div> 
                            : <div className="popup-error">
                                <p>Vous devez vous connecter avant de pouvoir sauvegarder.</p>
                            <Link to='/signin'>Se connecter</Link></div>}
                            <p className="popup-error">Appuyez sur "échap" pour fermer cette fenêtre.</p>
                        </Popup>
                    
                        {/* <Pdf targetRef={refHeroResults} options={pdfOptions} filename="mission-climat-resultats.pdf">
                            {({ toPdf }) => <button onClick={toPdf} className="green-btn">Télécharger</button>}
                        </Pdf> */}
                        
                    </div>
                    <div className="flex-item">
                        <FontAwesomeIcon className="share-icon left-btn" icon={faShareAlt}/>
                        <EmailShareButton url={results.url} className="left-btn" subject="Mission Climat : mon plan climat pour 2030"><EmailIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></EmailShareButton>
                        <FacebookShareButton url={results.url} className="left-btn" quote="Voilà mon plan climat pour 2030 ! Et vous ?" hashtag="#missionclimat #ecologie #climat"><FacebookIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></FacebookShareButton>
                        <TwitterShareButton url={results.url} className="left-btn" title="Mission Climat : mon plan climat pour 2030" via="Mission Climat" hashtags={["missionclimat", "climat", "ecologie", "citoyen", "action"]}><TwitterIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></TwitterShareButton>
                        <RedditShareButton url={results.url} className="left-btn" title="Mission Climat : Mon plan climat pour 2030"><RedditIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></RedditShareButton>
                        <LinkedinShareButton url={results.url} className="left-btn" title="Mission Climat : Mon plan climat pour 2030" summary="Vous aussi, faites votre plan pour la France !" source="Mission Climat"><LinkedinIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></LinkedinShareButton>
                    </div>
                </div>
                <button className="blinking border-btn down-btn"><a href="#detail-results"><FontAwesomeIcon icon={faChevronDown}/></a></button>
            </article>







            <article id="res-emi-fr" className="flex-item flex-column">
                <h1>Emissions françaises</h1>
                <div id="res-emi-fr-pie">
                    <h2>Emissions sectorielles françaises en 2030</h2>
                    <p className="chart-short-desc">Ce graphique représente les émissions sectorielles pour la France en 2030, fonction de vos mesures. Pour chaque secteurs, vous retrouvez également les émissions des sous-secteurs</p>
                    <div className="flex-item res-chart-container">
                        <div className="res-chart">
                            <Sunburst datas={results.emiSecteurPie}/>
                        </div>
                        <div>
                            <p className="chart-long-desc">Description du graphique. Description du graphique. Description du graphique. Description du graphique. Description du graphique. Description du graphique.</p>  
                            <p id="pie-legend">ici se trouve la légende</p>
                        </div>

                    </div>


                </div>



            </article>


            <article id="detail-results" className="detail-results flex-item flex-column">
                <div className="detail-national flex-item flex-column">
                    <h2><FontAwesomeIcon className="right-btn" icon={faFlag}/>Émissions françaises</h2>
                    <div className="detail-national-main grid-item border-btn">
                        <div className="detail-national-box">
                            <h4>> Émissions de CO2</h4>
                            <SimBarChart datas={results.emiSecteur}/>
                        </div>
                        <div className="detail-national-box">
                            <h4>> Par secteur</h4>
                            <Sunburst datas={results.emiSecteurPie}/>
                        </div>
                        <div className="detail-national-box">
                            <h4>> Par secteur sur le temps</h4>
                            <AreaChart datas={results.emiSecteur}/>
                        </div>
                        <div className="detail-national-box div-linear-chart">
                            <h4>> Émissions générales ({results.emiFrance.yTitle})</h4>
                            <GenLinearChart datas={results.emiFrance}/>
                        </div>
                    </div>
                </div>

                <div className="detail-world flex-item flex-column div-linear-chart">
                    <h2><FontAwesomeIcon className="right-btn" icon={faGlobeAmericas}/>Emissions mondiales ({results.emiMonde.yTitle})</h2>
                    <GenLinearChart datas={results.emiMonde}/>
                </div>

                <div className="detail-national flex-item flex-column">
                    <h2><FontAwesomeIcon className="right-btn" icon={faFlag}/>Impacts / Températures</h2>
                    <div className="detail-impacts-temperature flex-item flex-column border-btn">
                        <div className="detail-national-box flex-item flex-column">
                            <h4>> Europe</h4>
                            <img src={handleImageEurope()}/>
                        </div>
                        <div className="detail-national-box flex-item flex-column">
                            <h4>> Monde</h4>
                            <img src={handleImageWorld()}/>
                        </div>
                    </div>
                </div>

                {/* <div className="detail-parameters flex-item flex-column">
                    <h2><FontAwesomeIcon className="right-btn" icon={faWrench}/>Résumé des Paramètres</h2>
                    <div className="detail-parameters-box grid-item border-btn">
                        {jsonFile.categories.map((categorie, i) => (
                            <div key={i} className="param-box light flex-item flex-column nomarge">
                                <Parametres key={i} scope={categorie.data.scope} categorie={categorie}/>
                                <div>{graphParam[i] && graphParam[i]}</div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <button className="top-btn blinking border-btn up-btn"><a href="#scroll-top"><FontAwesomeIcon icon={faChevronUp}/></a></button>
            </article>
        </div>


    )
}

export default Results


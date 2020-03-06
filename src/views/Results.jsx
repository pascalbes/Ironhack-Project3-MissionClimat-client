import React, { useState, setState, useContext} from 'react'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import jsonFile from "../ressources/initialDatas.json"

import Parametres from './../components/resultats/parametres'
import AreaChart from './../components/simulateur/simResultsAreaChart'
import GenLinearChart from './../components/resultats/resGenLinearChart'
import SectorLinearChart from './../components/resultats/resSectorLinearChart'
import SimBarChart from './../components/simulateur/simBarChart'
import Sunburst from './../components/simulateur/sunburstChart'
import MondialLinearChart from './../components/resultats/mondialLinearChart'

import './../styles/results.css'
import { Link } from 'react-router-dom'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, EmailIcon, } from "react-share";

import APIHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";
import Popup from "reactjs-popup";




const Results = (props) => {

    // console.log(props)

    const userContext = useContext(UserContext);

    let { currentUser } = userContext;

    const [isNew, setIsNew] = useState(true)

    const [scenarioExists, setScenarioExists] = useState("")

    // console.log(currentUser,"this is currentUser")
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
                <div id="pdfFile" className="results-box light grid-item border-btn">
                    <div className="results-left flex-item flex-column">
                        <h3 className="nomarge nopad">Mes résultats</h3>
                        <div className="results-temp nomarge">Temp</div>
                        <div className="results-data-emissions">
                            <h4>Emissions carbone :</h4>
                            <p className="nomarge">2030 : blabla CO2</p>
                            <p className="nomarge">2100 : blabla CO2</p>
                        </div>
                        <div className="results-text flex-item flex-column">
                            <p>Blabla la mer monte</p>
                            <p>Blabla il fait trop chaud tout le temps</p>
                            <p>Blabla le coronavirus c'est du pipi à côté de ça</p>
                        </div>
                    </div>
                    <div className="results-data flex-item">
                        <div className="results-data-sunburst">
                            <Sunburst datas={results.emiSecteurPie}/>
                        </div>
                        <div className="results-data-area">
                            <AreaChart datas={results.emiSecteur}/>
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
                        <div>
                        <form className="new-or-edit" onChange={toggleNew}>
                            <label htmlFor="new">New</label>
                            <input type="radio" id="new" name="toggle" value="new" defaultChecked></input>
                            <label htmlFor="edit">Edit</label>
                            <input type="radio" id="edit" name="toggle" value="edit"></input>
                        </form>
                        
                            
                            {isNew? 
                            
                            <form className="form-save" onChange={onChange} onSubmit={saveResults}>
                            <label htmlFor="name">Nom du scénario</label>
                            <input name="name" id="name" type="text"/>
                            <label htmlFor="description">Description</label>
                            <textarea className="textarea" name="description" id="description" type="textarea"/>
                            <p className="msg-existe-déjà">{scenarioExists}</p>
                            <button className="green-btn right-btn">Sauvegarder</button>
                            </form>
                            
                            :

                            <form className="form-save" onChange={onChange} onSubmit={editResults}>
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
                            
                        
                        </div>: 
                        <p className="popup-error">Vous devez vous connecter dans "mon espace" avant de pouvoir sauvegarder.</p>}
                        <p className="popup-error">Appuyez sur "échap" pour fermer cette fenêtre.</p>
                        </Popup>
                        
                        <button className="green-btn">Télécharger</button>
                    </div>
                    <div className="flex-item">
                        <FontAwesomeIcon className="left-btn" icon={faShareAlt}/>
                        <EmailShareButton url={results.url} className="left-btn" subject="Mission 1.5 : mon plan climat pour 2030"><EmailIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></EmailShareButton>
                        <FacebookShareButton url={results.url} className="left-btn" quote="Voilà mon plan climat pour 2030 ! Et vous ?" hashtag="#mission1.5 #ecologie #climat"><FacebookIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></FacebookShareButton>
                        <TwitterShareButton url={results.url} className="left-btn" title="Mission 1.5 : mon plan climat pour 2030" via="Mission 1.5°C" hashtags={["mission1.5", "climat", "ecologie", "citoyen", "action"]}><TwitterIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></TwitterShareButton>
                        <RedditShareButton url={results.url} className="left-btn" title="Mission 1.5 : Mon plan climat pour 2030"><RedditIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></RedditShareButton>
                        <LinkedinShareButton url={results.url} className="left-btn" title="Mission 1.5 : Mon plan climat pour 2030" summary="Vous aussi, faites votre plan pour la France et tentez d'atteindre 1.5°C !" source="Mission 1.5°C"><LinkedinIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></LinkedinShareButton>
                    </div>
                </div>
                <button className="border-btn down-btn"><a href="#detail-results"><FontAwesomeIcon icon={faChevronDown}/></a></button>
            </article>


            <article id="detail-results" className="detail-results flex-item flex-column">
                <div className="detail-national flex-item flex-column">
                    <h2><FontAwesomeIcon className="right-btn" icon={faFlag}/>Émissions françaises</h2>
                    <div className="detail-national-main flex-item flex-column border-btn">
                        <div className="detail-national-box flex-item flex-column">
                            <h4>> Par secteur entre 2010 et 2030</h4>
                            <AreaChart datas={results.emiSecteur}/>
                        </div>
                        <div className="detail-national-box flex-item flex-column">
                            <h4>> Répartition des émissions pour 2030</h4>
                            <Sunburst datas={results.emiSecteurPie}/>
                        </div>
                        <div className="detail-national-box flex-item flex-column">
                            <h4>> Émissions générales</h4>
                            <GenLinearChart/>
                        </div>
                    </div>
                </div>

                <div className="detail-world flex-item flex-column">
                    <h2><FontAwesomeIcon className="right-btn" icon={faGlobeAmericas}/>Emissions mondiales</h2>
                    <MondialLinearChart/>
                </div>

                <div className="detail-parameters flex-item flex-column">
                    <h2><FontAwesomeIcon className="right-btn" icon={faWrench}/>Résumé des Paramètres</h2>
                    <div className="detail-parameters-box grid-item border-btn">
                        {jsonFile.categories.map((categorie, i) => (
                            <div key={i} className="param-box light flex-item flex-column nomarge">
                                <Parametres key={i} scope={categorie.data.scope} categorie={categorie}/>
                                <div>{graphParam[i] && graphParam[i]}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="border-btn up-btn"><a href="#scroll-top"><FontAwesomeIcon icon={faChevronUp}/></a></button>
            </article>
            <SimBarChart datas={results.emiSecteur}/>
        
            
        
        
        
        </div>


    )
}

export default Results


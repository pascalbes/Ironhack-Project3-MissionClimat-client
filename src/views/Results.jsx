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
import "./../styles/form.css"
import "./../styles/simulator.css"
import { Link } from 'react-router-dom'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, EmailIcon, } from "react-share";

import APIHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";
import Popup from "reactjs-popup";
import Pdf from "react-to-pdf";




const Results = (props) => {

    console.log(props)

    const userContext = useContext(UserContext);
    const { currentUser } = userContext;

    console.log(currentUser,"this is currentUser")
    var results={}
    if (localStorage.getItem('results')) {
        results = JSON.parse(localStorage.getItem('results'))
        console.log("the results are", results)
        console.log(userContext)
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

    console.log("the results =>", results)

    const [resultsToSave, setResultsToSave] = useState({})

    resultsToSave.url = results.url

    const saveResults = async e => {
        e.preventDefault();
        try {
        await APIHandler.patch('users/save', {resultsToSave});
        console.log("saved héhé!")
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

    // const refHeroResults = React.createRef();

    // const pdfOptions = {
    //     orientation: 'landscape',
    //     width: '2000',
    //     height: '792',
    // };

    return (
        <div className="results-page flex-item flex-column">
            <article className="hero-results flex-item flex-column">
                <div className="hidden"></div>
                <div className="results-box light grid-item border-btn">
                    <div className="results-left flex-item flex-column">
                        <h3 className="nomarge nopad">Mes résultats</h3>
                        <div id="results-impacts" className="sim-results-head flex-item flex-column">
                            <h3>Impacts pour 2100</h3>
                            <div id="results-impacts-box" className="flex-item">
                                <div className="tag-container flex-item flex-column">
                                    <div className="results-figure flex-item" style={{backgroundColor: handleTempColor}}>
                                        +2°C
                                    </div>
                                    <p>sur le globe</p>                    
                                </div>
                                <div className="tag-container flex-item flex-column">
                                    <div id="results-emissions-box" className="flex-item">
                                        -20%
                                    </div>
                                    <p>niveau de C02</p>  
                                </div>
                            </div>
                        </div>
                        <div className="results-text flex-item flex-column">
                            <h5>Conséquences</h5>
                            <p>Blabla la mer monte</p>
                            <p>Blabla il fait trop chaud tout le temps</p>
                            <p>Blabla le coronavirus c'est du pipi à côté de ça</p>
                        </div>
                    </div>
                    <div className="results-data flex-item flex-column">
                        <div className="results-data-sunburst">
                            <Sunburst datas={results.emiSecteurPie}/>
                        </div>
                        <p>Émissions par secteur</p>
                        <div className="results-data-area">
                            <AreaChart datas={results.emiSecteur}/>
                        </div>
                        <p>Émissions par secteur et année</p>
                    </div>
                </div>
                <div className="results-btns flex-item">
                    <div className="flex-item">
                    <button className="green-btn right-btn"><Link to="/simulator">Retour</Link></button>
                        
                        <Popup className="form-page flex-item flex-column" trigger={<button className="green-btn right-btn">Sauvegarder</button>} modal closeOnDocumentClick >
                            {currentUser ? 
                                <form className="form-save flex-item flex-column light" onChange={onChange} onSubmit={saveResults}>
                                    <label className="label" htmlFor="name">Nom du scénario</label>
                                    <input className="input border-btn" name="name" id="name" type="text" placeholder="ex : Scénario 2°C"/>
                                    <label className="label" htmlFor="description">Description</label>
                                    <textarea className="input border-btn" name="description" id="description" type="textarea" placeholder="Focus sur les transports"/>
                                    <button className="green-btn right-btn">Sauvegarder</button>
                                </form>
                                : <p className="popup-error"><a href="/signin">Connectez-vous</a> pour enregistrer votre scénario !</p>}
                        </Popup>
                        
                        {/* <Pdf targetRef={refHeroResults} options={pdfOptions} filename="mission-climat-resultats.pdf">
                            {({ toPdf }) => <button onClick={toPdf} className="green-btn">Télécharger</button>}
                        </Pdf> */}
                        
                    </div>
                    <div className="flex-item">
                        <FontAwesomeIcon className="share-icon left-btn" icon={faShareAlt}/>
                        <EmailShareButton url={results.url} className="left-btn" subject="Mission 1.5 : mon plan climat pour 2030"><EmailIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></EmailShareButton>
                        <FacebookShareButton url={results.url} className="left-btn" quote="Voilà mon plan climat pour 2030 ! Et vous ?" hashtag="#mission1.5 #ecologie #climat"><FacebookIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></FacebookShareButton>
                        <TwitterShareButton url={results.url} className="left-btn" title="Mission 1.5 : mon plan climat pour 2030" via="Mission 1.5°C" hashtags={["mission1.5", "climat", "ecologie", "citoyen", "action"]}><TwitterIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></TwitterShareButton>
                        <RedditShareButton url={results.url} className="left-btn" title="Mission 1.5 : Mon plan climat pour 2030"><RedditIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></RedditShareButton>
                        <LinkedinShareButton url={results.url} className="left-btn" title="Mission 1.5 : Mon plan climat pour 2030" summary="Vous aussi, faites votre plan pour la France et tentez d'atteindre 1.5°C !" source="Mission 1.5°C"><LinkedinIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></LinkedinShareButton>
                    </div>
                </div>
                <button className="blinking border-btn down-btn"><a href="#detail-results"><FontAwesomeIcon icon={faChevronDown}/></a></button>
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
                        <div className="detail-national-box">
                            <h4>> Émissions générales</h4>
                            <GenLinearChart/>
                        </div>
                    </div>
                </div>

                <div className="detail-world flex-item flex-column">
                    <h2><FontAwesomeIcon className="right-btn" icon={faGlobeAmericas}/>Emissions mondiales</h2>
                    <MondialLinearChart/>
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


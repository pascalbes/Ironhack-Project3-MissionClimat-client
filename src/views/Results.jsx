import React, { useState} from 'react'
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import jsonFile from "../ressources/initialDatas.json"

import ResultsNav from './../components/resultats/resultsNav'
import Parametres from './../components/resultats/parametres'
import AreaChart from './../components/simulateur/simResultsAreaChart'
import GenLinearChart from './../components/resultats/resGenLinearChart'
import SectorLinearChart from './../components/resultats/resSectorLinearChart'

import SimJauge from './../components/simulateur/simJauge'

import Sunburst from './../components/simulateur/sunburstChart'

import MondialLinearChart from './../components/resultats/mondialLinearChart'

import './../styles/results.css'
import { Link } from 'react-router-dom'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, EmailIcon, } from "react-share";


    const Results = (props) => {
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

    function setGraphParam(){
        checkScope(jsonFile.categories).map((categorie, i) => (
                graphParam.push(<SectorLinearChart key={i} data={categorie}/>)
        ));
        graphParam.splice(-2,2);
    }

    setGraphParam();

    return (
        <div className="results-page flex-item flex-column">
            <article className="hero-results flex-item flex-column">
                <div className="hidden"></div>
                <div className="results-box light grid-item">
                    <div className="results-head flex-item nopad">
                        <h3 className="nomarge nopad">Mes résultats</h3>
                        <div className="results-temp nomarge">Temp</div>
                    </div>
                    <div className="results-data grid-item">
                        <div className="results-data-emissions">
                            <h4>Emissions carbone :</h4>
                            <p className="nomarge">2030 : blabla CO2</p>
                            <p className="nomarge">2100 : blabla CO2</p>
                        </div>
                        <div className="results-data-sunburst">
                            <Sunburst datas={results.emiSecteurPie}/>
                        </div>
                        <div className="results-data-area">
                            <AreaChart datas={results.emiSecteur}/>
                        </div>
                    </div>
                    <div className="results-text flex-item flex-column">
                        <p>Blabla la mer monte</p>
                        <p>Blabla il fait trop chaud tout le temps</p>
                        <p>Blabla le coronavirus c'est du pipi à côté de ça</p>
                    </div>
                </div>
                <div className="results-btns flex-item">
                    <div className="flex-item">
                    <button className="green-btn right-btn"><Link to="/simulator">Retour</Link></button>
                        <button className="green-btn right-btn">Sauvegarder</button>
                        <button className="green-btn">Télécharger</button>
                    </div>
                    <div className="flex-item">
                        <EmailShareButton className="left-btn" subject="Mission 1.5 : mon plan climat pour 2030" body="Voilà le plan climat que j'ai élaboré pour 2030 !"><EmailIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></EmailShareButton>
                        <FacebookShareButton className="left-btn" quote="Voilà mon plan climat pour 2030 ! Et vous ?" hashtag="#mission1.5 #ecologie #climat"><FacebookIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></FacebookShareButton>
                        <TwitterShareButton className="left-btn" title="Mission 1.5 : mon plan climat pour 2030" via="Mission 1.5°C" hashtags={["mission1.5", "climat", "ecologie", "citoyen", "action"]}><TwitterIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></TwitterShareButton>
                        <RedditShareButton className="left-btn" title="Mission 1.5 : Mon plan climat pour 2030"><RedditIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></RedditShareButton>
                        <LinkedinShareButton className="left-btn" title="Mission 1.5 : Mon plan climat pour 2030" summary="Vous aussi, faites votre plan pour la France et tentez d'atteindre 1.5°C !" source="Mission 1.5°C"><LinkedinIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></LinkedinShareButton>
                    </div>
                </div>
                {/* <Link to={{pathname: "/results#detail-results",state: {results: results}}}><button className="border-btn down-btn">Résultats détaillés</button></Link> */}
                <button className="border-btn down-btn"><a href="#detail-results">Résultats détaillés</a></button>
            </article>

            <article id="detail-results" className="detail-results flex-item flex-column">
                <button className="border-btn up-btn"><a href="#scroll-top">Resultats globaux</a></button>
                <ResultsNav/>
                
                <div className="detail-national flex-item flex-column">
                    <h2><FontAwesomeIcon className="right-btn" icon={faFlag}/>Émissions françaises</h2>
                    <div className="detail-national-main flex-item">
                        <div className="flex-item flex-column">
                            <h4>> Par secteur entre 2010 et 2030</h4>
                            <AreaChart datas={results.emiSecteur}/>
                        </div>
                        <div>
                            <h4>> Répartition des émissions pour 2030</h4>
                            <Sunburst datas={results.emiSecteurPie}/>
                        </div>
                        <div>
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
                    <h2>Résumé des Paramètres</h2>
                    <div className="detail-parameters-box grid-item">
                        {jsonFile.categories.map((categorie, i) => (
                            <div className="param-box light flex-item flex-column">
                                <Parametres key={i} scope={categorie.data.scope} categorie={categorie}/>
                                <div>{graphParam[i] && graphParam[i]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
                                
                            

            
        </div>
    )
}

export default Results


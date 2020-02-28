import React from 'react'

import jsonFile from "../ressources/initialDatas.json"

import ResultsNav from './../components/resultats/resultsNav'
import Parametres from './../components/resultats/parametres'
import AreaChart from './../components/simulateur/simResultsAreaChart'
import GenLinearChart from './../components/resultats/resGenLinearChart'
import SectorLinearChart from './../components/resultats/resSectorLinearChart'
import BubbleChart from './../components/simulateur/simResultsRepartitionSecteur'

import SimJauge from './../components/simulateur/simJauge'

import Sunburst from './../components/simulateur/sunburstChart'

import MondialLinearChart from './../components/resultats/mondialLinearChart'

import './../styles/results.css'
import { Link } from 'react-router-dom'


const Results = () => {

    const checkScope = (categories) => {
        var frenchCategories = [];
        categories.map((categorie) => {
            if (categorie.data.scope !== ("Répartition mondiale")) {
         return frenchCategories.push(categorie)}
        })
        return frenchCategories
    }

    // travailler sur paramètre et les données à lui envoyer

    return (
        <div className="results-page flex-item flex-column">
            <article className="hero-results flex-item flex-column">
                <div className="hidden"></div>
                <div className="results-box light grid-item">
                    <div className="results-head flex-item">
                        <h3>Mes résultats</h3>
                        <div>Temp</div>
                    </div>
                    <div className="results-data flex-item">
                        <div className="results-data-emissions">
                            <h4>Emissions</h4>
                            <p>2030 : blabla CO2</p>
                            <p>2100 : blabla CO2</p>
                        </div>
                        <div className="results-data-sunburst">

                        </div>
                        <div className="results-data-area">

                        </div>
                    </div>
                    <div className="results-text flex-item flex-column">
                        <p>Blabla la mer monte</p>
                        <p>Blabla il fait trop chaud tout le temps</p>
                        <p>Blabla le coronavirus c'est du pipi à côté de ça</p>
                    </div>
                </div>
                <div className="results-btns flex-item">
                    <Link to="/simulator"><button className="green-btn left-btn">Retour</button></Link>
                    <button className="green-btn left-btn">Sauvegarder</button>
                    <button className="green-btn left-btn">Partager</button>
                    <button className="green-btn left-btn">Télécharger</button>
                </div>
                <button className="border-btn down-btn"><a href="#detail-results">Résultats détaillés</a></button>
            </article>

            <article id="detail-results" className="detail-results">
                <button className="border-btn up-btn"><a href="#scroll-top">Resultats globaux</a></button>
                <ResultsNav/>
            </article>
            
            <div className="parameter-main-container">
                <h2>Paramètres</h2>
                <div className="parameter-container">
                    {jsonFile.categories.map((categorie, i) => {
                        return <Parametres 
                            scope={categorie.data.scope} 
                            categorie={categorie}
                            />
                        {/* pour accéder aux résultats individuels: .data.value */}
                    })}
                </div>
            </div>
            <div className="emissions-fr-main-container">
                <h2>Emissions françaises</h2>


                <h3>Evolution des émissions par secteur entre 2010 et 2030</h3>
                

                {/* <AreaChart/> */}
             
                <h3>Historique des émissions en comparaison avec les objectifs</h3>

                <div>
                    
                    
                    <h4>Résultat des émissions générales</h4>
                    

                    <GenLinearChart/>

                    <h3>Résultat des émissions par secteur</h3>

                    <div className="sector-linear-charts-container">

                    
                    {checkScope(jsonFile.categories).map((categorie, i) => {
                        console.log(categorie)
                        return <SectorLinearChart data={categorie}/>
                    })
                    }

                    </div>

                </div>

                <h3>Part de chaque secteur dans l'émission de CO2</h3>
                    
                <BubbleChart/> 
                
            </div>

            <div className="emissions-mondiales-main-container">

                    <h2>Emissions mondiales</h2>

                    <MondialLinearChart/>

            </div>
            
            <div className="sim-jauge">
                <Sunburst/>
            </div>
        </div>
    )
}

export default Results

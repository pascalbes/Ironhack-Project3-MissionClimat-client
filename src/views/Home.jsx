import React from 'react'
import Footer from "../components/partials/Footer"
import { Link } from "react-router-dom"

import "../styles/home.css"
import "../styles/footer.css"


const Home = () => {
    return (
        <div className="home-page flex-item flex-column">
            <article className="hero-landing flex-item flex-column">
                {/* <div className="hidden"></div> */}
                <div className="hero-box flex-item">
                    <div className="hero-left">
                        <h1 className="border"><span className="hero-mission">mission</span><br/><span className="hero-temp">Climat</span></h1>
                        <p className="hero-text">Votre mission, si vous l'acceptez, est de proposer un scénario climat 2030 pour la France, permettant de limiter les impacts du dérèglement climatique à un niveau soutenable. Pour ce faire, nous mettons à votre disposition quelques paramètres, un modèle de calcul et un joli tableau de bord.</p>
                        <p className="hero-text hero-bold">Configurez, visualisez, et, une fois l'ensemble du <br/>vivant préservé, partagez : il paraît que c'est sympa.</p>
                        <br></br>
                        <div className="hero-btn flex-item">
                            <Link to="/simulator"><button id="cta-btn" className="green-btn">Mission acceptée !</button></Link>
                        </div>
                    </div>
                    <div id="hero-img-container">
                        <img className="hero-img" src="../../images/Illustration Home.png" alt="landing-visual"/>    
                    </div>
                    
                </div>
                <button className="blinking border-btn down-btn"><a href="#next-landing">Plus...</a></button>
            </article>

            <article id="next-landing" className="next-landing flex-item">
                
                <div className="home-item flex-item flex-column">
                    <div className="home-card-head flex-item">
                        <img
                        className="team-logo"
                        src="../../images/logo/logoIH.svg"
                        alt="Logo Ironhack"
                        />
                        <h4 className="nomarge">Pourquoi Mission Climat ?</h4>
                    </div>
                    <p>Depuis des années, le Groupe d’Experts Intergouvernemental sur l’Evolution du Climat (GIEC) publie de nombreux rapports alertant l’humanité sur les dangers du réchauffement climatique et la nécessité de mettre en place des mesures pour réduire les émissions de gaz à effet de serre.</p>
                    <p>S’appuyant sur ces données, le cabinet de conseil BL évolution a publié une étude intitulée «Comment la France peut s’aligner sur une trajectoire compatible avec les 1,5°C». L’objectif de cette étude était de donner à voir quelques mesures qui permettraient de suivre les recommandations des scientifiques du GIEC.
                    Ce site, développé par des bénévoles, vous permettra de paramétrer vos propres mesures, secteur par secteur et de visualiser les résultats dans une modélisation où la France servirait d’exemple au reste du monde.
                    </p>
                </div>


                <div className="home-item flex-item flex-column">
                    <div className="home-card-head flex-item">
                        <img
                        className="team-logo"
                        src="../../images/logo/logoIH.svg"
                        alt="Logo Ironhack"
                        />
                        <h4 className="nomarge">Comment ça marche ?</h4>
                    </div>
                    <p>Le modèle de calcul utilisé sur ce simulateur a été conçu par BL Evolution. Une trentaines de paramètres peuvent être configurés pour visualiser l’impact de certains changements sociétaux sur les émissions de gaz à effet de serre en France. </p>
                    <p>Le modèle calcule ensuite une projection mondiale selon les hypothèses que vous choisissez concernant l’évolution de la population mondiale et le maintien ou non des inégalités. </p>
                    <p>
                    Une page de résultats détaillés vous permet d’aller plus loin dans votre scénario et de découvrir les changements qu’il implique sur la société française. 
                    </p>
                </div>
                
            </article>
            <Footer/>
        </div>
    )
}

export default Home
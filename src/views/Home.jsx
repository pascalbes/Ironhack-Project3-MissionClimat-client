import React from 'react'
import Footer from "../components/partials/Footer"
import "../styles/home.css"
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div className="home-page flex-item flex-column">
            <article className="hero-landing flex-item flex-column">
                <div className="hidden"></div>
                <div className="hero-box flex-item">
                    <div className="hero-left">
                        <h1 className="h1-border"><span className="hero-mission">mission</span><br/><span className="hero-temp">1.5°C</span></h1>
                        <p className="hero-text">Envie de sauver la planète ? Créez le plan climat de demain !</p>
                        <Link to="/simulator"><button className="green-btn">Je me lance !</button></Link>
                    </div>
                    <img className="hero-img" src="../../images/undraw_travel_plans_li01.svg" alt="landing-visual"/>
                </div>
                <button className="border-btn down-btn"><a href="#next-landing">Plus...</a></button>
            </article>
            
            <article id="next-landing" className="next-landing flex-item flex-column">
                <button className="border-btn up-btn"><a href="#scroll-top">Accueil</a></button>
                <div className="home-white-box flex-item light">
                    <div className="home-white-item flex-item flex-column">
                        <img src="" alt=""/>
                        <h3>blabla</h3>
                        <p>blablablabla blabla bla bjhzd dhziwnha dhziuehf w</p>
                    </div>
                    <div className="home-white-item flex-item flex-column">
                        <img src="" alt=""/>
                        <h3>blabla</h3>
                        <p>blablablabla blabla bla bjhzd dhziwnha dhziuehf w</p>
                    </div>
                    <div className="home-white-item flex-item flex-column">
                        <img src="" alt=""/>
                        <h3>blabla</h3>
                        <p>blablablabla blabla bla bjhzd dhziwnha dhziuehf w</p>
                    </div>
                </div>
                <Footer />
            </article>
        </div>
    )
}

export default Home
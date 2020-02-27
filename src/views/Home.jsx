import React from 'react'
import Footer from "../components/partials/Footer"
import "../styles/home.css"


const Home = () => {
    return (
        <div className="home-page flex-item flex-column">
            <article id="hero-landing" className="hero-landing flex-item flex-column">
                <div className="hero-box flex-item">
                    <div className="hero-left">
                        <h1 className="h1-border"><span className="hero-mon">mon</span><br/>scénario<br/><span className="hero-climat">> climat</span></h1>
                        <p>Envie de sauver la planète ? Créez le plan climat de demain !</p>
                    </div>
                    <img className="hero-img" src="../../images/undraw_travel_plans_li01.svg" alt="landing-visual"/>
                </div>
                <button className="hero-next-btn sim-init-button border-background"><a href="#next-landing">DOWN</a></button>
            </article>
            <article id="next-landing" className="next-landing flex-item flex-column">
                <button className="hero-prev-btn sim-init-button border-background"><a href="#hero-landing">UP</a></button>
                <div className="home-white-box">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </article>
            <Footer />
        </div>
    )
}

export default Home